// IB Revision Hub - AI marking server for the static site, running as a free Cloudflare Worker.
// It keeps the Gemini API key out of the website: the browser calls this Worker, and only the Worker
// talks to Google. Endpoints match server.js (/api/health, /mark, /mark-diagram, /generate, /json, /tutor).
//
// Secrets (set by the GitHub workflow, never in code): GEMINI_API_KEY, optional ACCESS_CODE.
// Vars (wrangler.toml): GEMINI_MODEL, RATE_LIMIT, ALLOWED_ORIGINS.

const API = "https://generativelanguage.googleapis.com/v1beta/models";

const SUBJECT_NAMES = {
  econ: "IB Economics SL",
  chem: "IB Chemistry SL",
  phys: "IB Physics SL",
  geo: "IB Geography SL",
  math: "IB Mathematics: Analysis and Approaches SL",
  bio: "IB Biology SL",
  engb: "IB English B HL",
  chia: "IB Chinese A: Language and Literature SL (answer in Traditional Chinese)",
};

const IAEE_SYSTEM = `You are an experienced IB Diploma coursework supervisor and moderator helping a student with their Internal Assessment (IA) or Extended Essay (EE).
- Follow IB academic integrity rules strictly: never write, rewrite or paraphrase sections of the student's IA/EE for them, and never invent data, quotes or sources. Coach instead: ask questions, explain criteria, point to specific weaknesses, suggest what to investigate, and give short generic examples that are clearly not about their topic.
- Tie advice to the assessment criteria and their level descriptors; say which criterion a change would lift and why.
- Help with research questions (focused, arguable, answerable, subject-appropriate), methodology, structure, data analysis, evaluation, referencing and reflections (RPPF).
- Remind the student that their teacher/supervisor gives the official feedback and that criteria change between sessions, so confirm with the current subject guide.
- Keep replies focused: short paragraphs and bullet points; end with one question that moves their work forward.`;

const TUTOR_SYSTEM = `You are an experienced IB Diploma teacher and examiner tutoring a student in IB Economics SL, Chemistry SL, Physics SL, Geography SL, Mathematics: Analysis & Approaches SL, Biology SL, English B HL and Chinese A: Language & Literature SL. For Chinese A, reply in Traditional Chinese unless the student writes in English.

How to tutor:
- Guide rather than hand over answers. When a student asks for help with a problem, first ask what they have tried or give the next hint, unless they explicitly ask for the full worked solution.
- Use IB command terms precisely (define, describe, explain, analyse, evaluate, discuss, to what extent, calculate, show that, hence) and tell students what each demands in marks.
- Use correct IB terminology, units, significant figures and notation. For economics, recommend which diagram to draw and how to label it. For geography, push for named, located case studies with data. For chemistry and physics, insist on units and significant figures. For maths, show working and say which steps are "show that" vs. calculator-allowed (Paper 1 vs Paper 2).
- Write mathematics with LaTeX between \\( and \\) for inline maths and $$ $$ for display maths. Do not use single $ delimiters.
- Keep answers focused and well structured (short paragraphs, bullet points). End with a quick check-for-understanding question when it helps.
- If asked about IB rules, deadlines or assessment changes you are unsure of, say so and suggest checking with their teacher or the current subject guide.`;

const MARK_SYSTEM = `You are a senior IB examiner. Mark the student's answer strictly against the IB-style markscheme provided, the way an IB examiner would.

Rules:
- Award marks only for creditworthy points that are present in the answer. Accept equivalent wording and valid alternatives (OWTTE). Do not reward vague or incorrect statements.
- For extended responses (economics Paper 1 part (b), geography essays) apply the level descriptors in the markscheme holistically and pick the best-fit level and mark.
- For calculations, apply method marks (M) and accuracy marks (A); follow-through (FT) errors where IB would.
- The score must be an integer between 0 and the maximum marks.
- Feedback is for a 16-18 year old student: specific, encouraging, and actionable. Quote or paraphrase their own words when pointing out what earned or lost marks.`;

const MARK_SCHEMA = {
  type: "object",
  properties: {
    score: { type: "integer", description: "Marks awarded" },
    level: { type: "string", description: "Level/band awarded for extended responses, or empty string" },
    summary: { type: "string", description: "One or two sentence overall verdict" },
    awarded: { type: "array", items: { type: "string" }, description: "Markscheme points the student earned" },
    missing: { type: "array", items: { type: "string" }, description: "Markscheme points the student missed or got wrong" },
    improvements: { type: "array", items: { type: "string" }, description: "Concrete actions to gain the missing marks" },
    model_answer: { type: "string", description: "A concise full-mark model answer" },
  },
  required: ["score", "level", "summary", "awarded", "missing", "improvements", "model_answer"],
};

const GEN_SCHEMA = {
  type: "object",
  properties: {
    questions: {
      type: "array",
      items: {
        type: "object",
        properties: {
          q: { type: "string" },
          marks: { type: "integer" },
          type: { type: "string", enum: ["mcq", "short", "extended"] },
          options: { type: "array", items: { type: "string" } },
          answer: { type: "integer", description: "Index of correct option for mcq, else -1" },
          ms: { type: "array", items: { type: "string" } },
        },
        required: ["q", "marks", "type", "options", "answer", "ms"],
      },
    },
  },
  required: ["questions"],
};

const DIAGRAM_SYSTEM = `You are a senior IB Economics examiner checking a student's hand-drawn diagram (a photo or screenshot).
Judge only what is visible in the image against each checklist point, the way an examiner awards diagram marks:
- A point is met only if it is clearly drawn and labelled; do not give credit for things you have to guess.
- Accept equivalent IB labels (e.g. "APL" for average price level, "Real GDP" or "Y" for real output, "D" or "AR").
- If the image is not an economics diagram, or is unreadable, mark every point as not met and say why in the summary.
- Notes are short (under 20 words), specific and written to the student.`;

const DIAGRAM_SCHEMA = {
  type: "object",
  properties: {
    items: {
      type: "array",
      items: { type: "object", properties: { ok: { type: "boolean" }, note: { type: "string" } }, required: ["ok", "note"] },
    },
    summary: { type: "string", description: "One or two sentences: overall verdict and the single most important fix" },
  },
  required: ["items", "summary"],
};

// ---------- helpers ----------

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

const str = (v, max = 20_000) => String(v ?? "").slice(0, max);

function corsHeaders(req, env) {
  const origin = req.headers.get("Origin") || "";
  const allowed = String(env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);
  const ok = !allowed.length || allowed.includes(origin) || /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
  return {
    "Access-Control-Allow-Origin": ok ? origin || "*" : allowed[0],
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, x-access-code",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

const json = (body, status, cors) => new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json; charset=utf-8" } });

async function readBody(req, limit = 200_000) {
  const text = await req.text();
  if (text.length > limit) throw new HttpError(413, "Request too large");
  try {
    return JSON.parse(text || "{}");
  } catch {
    throw new HttpError(400, "Invalid JSON");
  }
}

// Best-effort per-visitor limit (each Worker instance keeps its own count) so strangers can't use up the free key.
const hits = new Map();
function rateLimited(req, env) {
  const limit = Number(env.RATE_LIMIT) || 30;
  const ip = req.headers.get("CF-Connecting-IP") || "?";
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < 3_600_000);
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 10_000) hits.clear();
  return list.length > limit;
}

function geminiError(status, detail) {
  if (status === 429) return new HttpError(429, "The free Gemini limit has been reached for now. Try again in a little while.");
  if (status === 400 && /api key/i.test(detail)) return new HttpError(503, "AI marking isn't set up correctly (the Gemini key was rejected).");
  if (status === 403) return new HttpError(503, "AI marking isn't set up correctly (the Gemini key isn't allowed to use this model).");
  let msg = "";
  try { msg = (JSON.parse(detail).error || {}).message || ""; } catch {}
  return new HttpError(502, `The AI service returned an error (${status}${msg ? ": " + msg.slice(0, 200) : ""}).`);
}

function textOf(data) {
  const c = data && data.candidates && data.candidates[0];
  if (!c) {
    if (data && data.promptFeedback && data.promptFeedback.blockReason) throw new HttpError(422, "The AI declined this request.");
    return "";
  }
  if (c.finishReason === "SAFETY" || c.finishReason === "PROHIBITED_CONTENT") throw new HttpError(422, "The AI declined this request.");
  return ((c.content && c.content.parts) || []).filter((p) => p.text && !p.thought).map((p) => p.text).join("");
}

function parseJson(text) {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenced) text = fenced[1];
  const start = Math.min(...["{", "["].map((c) => (text.indexOf(c) + 1 || Infinity) - 1));
  const end = Math.max(text.lastIndexOf("}"), text.lastIndexOf("]")) + 1;
  try {
    return JSON.parse(text.slice(start, end));
  } catch {
    throw new HttpError(502, "The AI's reply couldn't be read - please try again.");
  }
}

async function gemini(env, { system, parts, schema, maxTokens = 8192 }) {
  const body = {
    contents: [{ role: "user", parts }],
    generationConfig: { maxOutputTokens: maxTokens, responseMimeType: "application/json" },
  };
  if (system) body.systemInstruction = { parts: [{ text: system }] };
  if (schema) body.generationConfig.responseJsonSchema = schema;
  const call = (b) =>
    fetch(`${API}/${env.GEMINI_MODEL || "gemini-flash-latest"}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": env.GEMINI_API_KEY },
      body: JSON.stringify(b),
    });
  let r = await call(body);
  if (r.status === 404 && !env._fellBack) {
    // Model retired or renamed: fall back to Google's rolling alias.
    env = { ...env, GEMINI_MODEL: "gemini-flash-latest", _fellBack: true };
    r = await call(body);
  }
  if (r.status === 400 && schema) {
    // Older models don't take a JSON schema; fall back to plain JSON mode (the prompts describe the shape too).
    delete body.generationConfig.responseJsonSchema;
    r = await call(body);
  }
  if (!r.ok) throw geminiError(r.status, await r.text());
  return parseJson(textOf(await r.json()));
}

// ---------- API routes ----------

async function handleMark(req, env) {
  const b = await readBody(req);
  const max = Math.max(1, Math.min(60, parseInt(b.marks, 10) || 1));
  const prompt = `Subject: ${SUBJECT_NAMES[b.subject] || str(b.subject, 60)}
Topic: ${str(b.topic, 200)}
Maximum marks: ${max}

<question>
${str(b.question)}
</question>

<markscheme>
${(Array.isArray(b.ms) ? b.ms : [b.ms]).map((p) => "- " + str(p, 2000)).join("\n")}
</markscheme>

<student_answer>
${str(b.answer) || "(no answer given)"}
</student_answer>

Mark the student answer out of ${max}. Reply with only a JSON object with keys score, level, summary, awarded, missing, improvements, model_answer.`;
  const r = await gemini(env, { system: MARK_SYSTEM, parts: [{ text: prompt }], schema: MARK_SCHEMA });
  const arr = (x) => (Array.isArray(x) ? x.map(String) : []);
  return {
    score: Math.max(0, Math.min(max, Math.round(Number(r.score) || 0))), max,
    level: String(r.level || ""), summary: String(r.summary || ""),
    awarded: arr(r.awarded), missing: arr(r.missing), improvements: arr(r.improvements), model_answer: String(r.model_answer || ""),
  };
}

async function handleMarkDiagram(req, env) {
  const b = await readBody(req, 6_000_000);
  const m = String(b.image || "").match(/^data:(image\/(?:jpeg|png|webp|gif));base64,([A-Za-z0-9+/=]+)$/);
  if (!m) throw new HttpError(400, "Send the diagram as a JPEG or PNG image.");
  const items = (Array.isArray(b.items) ? b.items : []).slice(0, 12).map((x) => str(x, 400));
  if (!items.length) throw new HttpError(400, "No checklist sent.");
  const text = `Diagram expected: ${str(b.diagram, 120)}

<question>
${str(b.question, 4000)}
</question>

<markscheme>
${(Array.isArray(b.ms) ? b.ms : []).map((p) => "- " + str(p, 1000)).join("\n")}
</markscheme>

<diagram_checklist>
${items.map((t, i) => `${i + 1}. ${t}`).join("\n")}
</diagram_checklist>

<common_errors>
${(Array.isArray(b.errors) ? b.errors : []).slice(0, 8).map((t) => "- " + str(t, 300)).join("\n")}
</common_errors>

Check the student's diagram in the image. Return exactly ${items.length} items, in checklist order, as JSON {"items":[{"ok":bool,"note":"..."}],"summary":"..."}.`;
  const out = await gemini(env, { system: DIAGRAM_SYSTEM, parts: [{ inlineData: { mimeType: m[1], data: m[2] } }, { text }], schema: DIAGRAM_SCHEMA });
  const got = Array.isArray(out.items) ? out.items : [];
  return { items: items.map((_, i) => ({ ok: !!(got[i] && got[i].ok), note: String((got[i] && got[i].note) || "") })), summary: String(out.summary || "") };
}

async function handleGenerate(req, env) {
  const b = await readBody(req);
  const n = Math.max(1, Math.min(10, parseInt(b.count, 10) || 5));
  const style = b.style === "mcq" ? "multiple-choice (4 options)" : b.style === "extended" ? "extended-response" : "a mix of short-answer and structured";
  const prompt = `Write ${n} ORIGINAL exam-style practice questions for ${SUBJECT_NAMES[b.subject] || str(b.subject, 60)}, topic "${str(b.topic, 200)}".
Style: ${style}. Difficulty: ${str(b.difficulty, 20) || "mixed"}.
Match IB command terms, mark allocations and markscheme conventions. Do not copy real IB past-paper questions verbatim.
For each question give the markscheme as a list of mark points (one creditworthy point per mark where possible; for extended responses give indicative content plus level descriptors).
For mcq set "options" to 4 strings and "answer" to the 0-based correct index; for other types set options to [] and answer to -1.
Write maths with \\( \\) inline delimiters.
Reply with only a JSON object: {"questions": [{"q", "marks", "type", "options", "answer", "ms"}]}.`;
  const r = await gemini(env, {
    system: "You are a senior IB examiner who writes high-quality, original exam-style questions with accurate markschemes.",
    parts: [{ text: prompt }],
    schema: GEN_SCHEMA,
    maxTokens: 16384,
  });
  return { questions: Array.isArray(r.questions) ? r.questions : [] };
}

// Free-form prompt that must return JSON (IA/EE predicted marking, RQ checker).
async function handleJson(req, env) {
  const b = await readBody(req, 400_000);
  const prompt = str(b.prompt, 120_000);
  if (prompt.length < 20) throw new HttpError(400, "Prompt too short.");
  return gemini(env, {
    system: "You are a careful IB examiner and teacher. Reply with only the JSON value requested - no prose before or after it.",
    parts: [{ text: prompt }],
    maxTokens: 16384,
  });
}

// Streams the tutor reply as the same server-sent events server.js sends (event: delta / error / done).
async function handleTutor(req, env, cors) {
  const b = await readBody(req, 400_000);
  const history = (Array.isArray(b.messages) ? b.messages : [])
    .filter((m) => (m.role === "user" || m.role === "assistant") && m.content)
    .slice(-20)
    .map((m) => ({ role: m.role === "assistant" ? "model" : "user", parts: [{ text: str(m.content, 12_000) }] }));
  if (!history.length || history[history.length - 1].role !== "user") throw new HttpError(400, "Last message must be from the student.");
  const context = b.subject ? `\n\nThe student is currently studying ${SUBJECT_NAMES[b.subject] || str(b.subject, 60)}${b.topic ? `, topic: ${str(b.topic, 200)}` : ""}.` : "";
  const system = b.mode === "iaee"
    ? IAEE_SYSTEM + (b.context ? `\n\n<student_work_context>\n${str(b.context, 60_000)}\n</student_work_context>` : "") + context
    : TUTOR_SYSTEM + context;

  const upstream = await fetch(`${API}/${env.GEMINI_MODEL || "gemini-flash-latest"}:streamGenerateContent?alt=sse`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": env.GEMINI_API_KEY },
    body: JSON.stringify({ systemInstruction: { parts: [{ text: system }] }, contents: history, generationConfig: { maxOutputTokens: 8192 } }),
  });
  if (!upstream.ok) throw geminiError(upstream.status, await upstream.text());

  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();
  const enc = new TextEncoder();
  const send = (event, data) => writer.write(enc.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));
  (async () => {
    const reader = upstream.body.getReader();
    const dec = new TextDecoder();
    let buf = "";
    try {
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        buf += dec.decode(value, { stream: true }).replace(/\r\n/g, "\n");
        let idx;
        while ((idx = buf.indexOf("\n\n")) >= 0) {
          const chunk = buf.slice(0, idx);
          buf = buf.slice(idx + 2);
          const line = (chunk.match(/^data: (.*)$/m) || [])[1];
          if (!line) continue;
          const text = textOf(JSON.parse(line));
          if (text) await send("delta", { text });
        }
      }
      await send("done", {});
    } catch (err) {
      await send("error", { error: (err && err.message) || "AI error" });
    }
    await writer.close();
  })();
  return new Response(readable, { headers: { ...cors, "Content-Type": "text/event-stream; charset=utf-8", "Cache-Control": "no-cache" } });
}

const ROUTES = { "/api/mark": handleMark, "/api/mark-diagram": handleMarkDiagram, "/api/generate": handleGenerate, "/api/json": handleJson };

export default {
  async fetch(req, env) {
    const cors = corsHeaders(req, env);
    if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
    const path = new URL(req.url).pathname;
    try {
      if (path === "/api/health") return json({ ai: !!env.GEMINI_API_KEY, model: env.GEMINI_API_KEY ? env.GEMINI_MODEL || "gemini-flash-latest" : null }, 200, cors);
      if (!path.startsWith("/api/")) return json({ error: "Not found" }, 404, cors);
      if (req.method !== "POST") return json({ error: "POST only" }, 405, cors);
      if (env.ACCESS_CODE && req.headers.get("x-access-code") !== env.ACCESS_CODE) return json({ error: "Enter the access code to use AI marking.", code: "access_code" }, 401, cors);
      if (rateLimited(req, env)) return json({ error: "Hourly AI limit reached - try again later." }, 429, cors);
      if (!env.GEMINI_API_KEY) return json({ error: "AI marking isn't set up yet (no Gemini key on the server)." }, 503, cors);
      if (path === "/api/tutor") return await handleTutor(req, env, cors);
      const handler = ROUTES[path];
      if (!handler) return json({ error: "Unknown endpoint" }, 404, cors);
      return json(await handler(req, env), 200, cors);
    } catch (err) {
      if (!(err instanceof HttpError)) console.error("[api]", err && err.message);
      return json({ error: (err instanceof HttpError && err.message) || "Server error" }, (err && err.status) || 500, cors);
    }
  },
};
