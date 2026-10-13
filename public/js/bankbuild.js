/* Builds a structured question bank for every topic from the notes, on top of the hand-written exam questions.
   Sections: exam-style (hand-written), key-term drills, explain-the-concept, worked-example replays and fixed
   calculation sets (seeded so ids - and your progress - stay stable between visits).
   Every question is also tagged with its sub-topic, paper and question type (command term) for sorting. */
(function () {
  "use strict";
  const IB = window.IB;

  IB.SECTIONS = [
    ["drill", "Question bank", "Exam-style structured and essay questions by sub-topic, each with a clear marking rule and full markscheme"],
    ["exam", "Exam-style", "Hand-written questions in the style of the real papers"],
    ["case", "Data response / case studies", "Full exam-style questions built on one text and data extract, part by part, like the real paper"],
    ["frames", "Markscheme frames", "One question for every recurring IB question type in this topic, marked against its frame"],
    ["calc", "Calculations", "Fixed calculation sets - plus endless fresh numbers from the generator"],
    ["worked", "Worked-example replays", "Answer the notes' worked examples yourself, then compare"],
    ["concepts", "Explain the concept", "Short explanations of every key concept"],
    ["terms", "Key-term drills", "Definitions and quick-fire term recognition"],
  ];
  IB.sectionName = (k) => (IB.SECTIONS.find((s) => s[0] === k) || [k, k])[1];

  // Small deterministic PRNG so derived sets are identical on every visit.
  const seedOf = (str) => Array.from(str).reduce((h, c) => (Math.imul(h ^ c.charCodeAt(0), 2654435761) >>> 0), 2166136261);
  const rng = (seed) => () => {
    seed = (seed + 0x6d2b79f5) >>> 0;
    let t = seed;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const shuffle = (arr, r) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(r() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  // only real tags: "x < −2 and x > 3" must survive
  const strip = (h) => String(h).replace(/<\/?[a-zA-Z][^>]*>/g, "").replace(/\s+/g, " ").trim();
  // Split prose into markscheme-sized points (keeps maths and HTML intact inside each sentence).
  const points = (html, max) => {
    const parts = String(html)
      .split(/(?<=[.!?。！？])\s+(?=[A-Z一-鿿「（(<])/)
      .map((s) => s.trim())
      .filter((s) => strip(s).length > 3);
    if (parts.length <= max) return parts;
    const out = parts.slice(0, max - 1);
    out.push(parts.slice(max - 1).join(" "));
    return out;
  };

  const ZH = (sid) => sid === "chia";
  const T = {
    define: (sid, k) => (ZH(sid) ? `解釋「${k}」的意思。` : `Define the term <strong>${k}</strong>.`),
    defMs: (sid) => (ZH(sid) ? "準確定義（關鍵詞到位即可得分）" : "Accurate definition including the key idea"),
    whichTerm: (sid, v) => (ZH(sid) ? `以下哪一個術語符合這個定義？<br><em>「${v}」</em>` : `Which term matches this definition?<br><em>"${v}"</em>`),
    whichDef: (sid, k) => (ZH(sid) ? `以下哪一項最能說明「${k}」？` : `Which statement best describes <strong>${k}</strong>?`),
    explain: (sid, h, m) => (ZH(sid) ? `解釋：${h}。[${m}]` : `Explain: ${h}. [${m}]`),
  };

  function derive(s) {
    const allTerms = s.allTopics.flatMap((t) => (t.terms || []).map(([k, v]) => ({ k, v, topic: t.id })));
    s.allTopics.forEach((t) => {
      const r = rng(seedOf(t.id));
      const qs = (t.questions = t.questions || []);
      qs.forEach((q) => (q.sec = q.sec || (q.numeric ? "calc" : "exam")));
      const add = (q) => {
        Object.assign(q, { subject: s.id, topic: t.id, derived: true, diff: q.diff || 1 });
        q.type = q.type || "short";
        if (t.hl) q.hl = true;
        qs.push(q);
      };

      // key-term drills: define it, term-from-definition, definition-from-term
      (t.terms || []).forEach(([k, v], i) => {
        if (s.id === "math") add({ id: `${t.id}-k${i + 1}d`, sec: "terms", marks: 1, q: `State what is meant by <strong>${k}</strong>.`, ms: [`${v} [A1]`] });
        else add({ id: `${t.id}-k${i + 1}d`, sec: "terms", marks: 2, q: T.define(s.id, k), ms: [v, T.defMs(s.id)] });
        const others = shuffle(allTerms.filter((x) => x.k !== k && x.v !== v), r);
        // prefer distractors from the same topic (harder), then the rest of the subject
        const near = others.filter((x) => x.topic === t.id).concat(others.filter((x) => x.topic !== t.id));
        const seenK = new Set([k.toLowerCase()]), seenV = new Set([v.toLowerCase()]);
        const d = near.filter((x) => {
          const a = x.k.toLowerCase(), b = x.v.toLowerCase();
          if (seenK.has(a) || seenV.has(b)) return false;
          seenK.add(a);
          seenV.add(b);
          return true;
        }).slice(0, 3);
        if (d.length === 3) {
          const o1 = shuffle([k].concat(d.map((x) => x.k)), r);
          add({ id: `${t.id}-k${i + 1}m`, sec: "terms", type: "mcq", marks: 1, q: T.whichTerm(s.id, v), options: o1, answer: o1.indexOf(k), ms: [`${k}: ${v}`] });
          const o2 = shuffle([v].concat(d.map((x) => x.v)), r);
          add({ id: `${t.id}-k${i + 1}r`, sec: "terms", type: "mcq", marks: 1, diff: 2, q: T.whichDef(s.id, k), options: o2, answer: o2.indexOf(v), ms: [`${k}: ${v}`] });
        }
      });

      // explain the concept (markscheme = the notes' own points)
      (t.concepts || []).forEach((c, i) => {
        if (!c.b || strip(c.b).length < 40 || /<table/i.test(c.b)) return;
        let ms = points(c.b, 4);
        const marks = Math.max(2, Math.min(4, ms.length));
        // maths: a recall drill ("write down" the results), one A1 per result, without the notes' paragraph tags
        if (s.id === "math") ms = ms.map((p) => `${p.replace(/<\/?p>/g, "").trim()} [A1]`);
        add({ id: `${t.id}-c${i + 1}`, sec: "concepts", marks, diff: 2, q: s.id === "math" ? `Write down the key results for: ${c.h}. [${marks}]` : T.explain(s.id, c.h, marks), ms, hl: !!c.hl || !!t.hl });
      });

      // worked-example replays: the model answer becomes the markscheme
      (t.examples || []).forEach((e, i) => {
        const m = /\[(\d+)\]\s*$/.exec(strip(e.q));
        const marks = m ? +m[1] : 4;
        const ms = points(e.a, Math.max(2, Math.min(marks, 8)));
        add({ id: `${t.id}-w${i + 1}`, sec: "worked", type: marks >= 8 ? "extended" : "short", marks, diff: 2, q: e.q, ms });
      });

      // fixed calculation sets from the topic's generators (seeded, deduplicated)
      if (IB.hasGenerator && IB.hasGenerator(t.id)) {
        const real = Math.random, seen = new Set();
        Math.random = rng(seedOf(t.id + "calc"));
        try {
          for (let i = 0, n = 0; i < 40 && n < 15; i++) {
            const g = IB.generate(t.id);
            delete IB._generated[g.id];
            if (seen.has(g.q)) continue;
            seen.add(g.q);
            n++;
            g.id = `${t.id}-g${n}`;
            delete g.generated;
            add(Object.assign(g, { sec: "calc", diff: g.diff || 2 }));
          }
        } finally {
          Math.random = real;
        }
      }
    });
  }

  IB.subjectList().forEach(derive);

  // ---------- "find / correct the mistake" questions are not IB question types: drop them ----------
  const isFixError = (q) => {
    const txt = strip(q.stem || q.q);
    return /^(identify and )?correct the\b/i.test(txt) || /指出錯誤|改錯|病句/.test(txt);
  };
  IB.subjectList().forEach((s) => s.allTopics.forEach((t) => (t.questions = (t.questions || []).filter((q) => !isFixError(q)))));

  // ---------- paper: every question gets one of its subject's real papers, or "Any paper" ----------
  const SCI = ["chem", "phys", "bio"];
  IB.ANY_PAPER = "ANY";
  IB.paperOf = (q) => {
    if (q.pp) return q.pp;
    const codes = (IB.paperOptions[q.subject] || []).map(([c]) => c);
    let p = codes.includes(q.paper) ? q.paper : null;
    if (!p && q.type === "mcq" && SCI.includes(q.subject)) p = "P1A";
    if (!p && q.numeric && SCI.includes(q.subject)) p = "P2";
    return (q.pp = p || IB.ANY_PAPER);
  };
  IB.paperLabel = (sid, code) => (code === IB.ANY_PAPER ? (sid === "chia" ? "不限試卷（基礎知識）" : "Any paper (core skills)") : IB.paperName(sid, code));

  // ---------- question type: the IB command term (a multi-part question can have several) ----------
  // [key, label, command terms (any case), command terms that must start with a capital (they double as ordinary words), Chinese]
  IB.QTYPES = [
    ["mcq", "Multiple choice"],
    ["define", "Define", /\b(define|what is meant by|state what is meant by|state the meaning)\b/i, null, /解釋「[^」]{1,12}」的意思|定義/],
    ["state", "State / identify / outline", /\b(identify|outline|write down)\b/i, /\b(State|List|Name|Give|Label)\b/, /指出|列出|寫出|找出|舉出/],
    ["calc", "Calculate / find / solve", /\b(calculate|determine)\b/i, /\b(Find|Solve|Estimate|Hence)\b/],
    ["show", "Show that / prove", /\b(show that|prove|verify)\b/i],
    ["diagram", "Draw / sketch a diagram or graph", /\b(draw|sketch|using an? (appropriate |labelled |suitable |relevant )?(diagram|graph)|use an? (diagram|graph)|with the help of an? diagram)\b/i, /\bPlot\b/],
    ["describe", "Describe", /\bdescribe\b/i, null, /描述/],
    ["explain", "Explain / analyse", /\b(explain|analyse|analyze|account for)\b/i, /\bWhy\b/, /解釋|說明|分析|為何|為甚麼|為什麼/],
    ["compare", "Compare / distinguish", /\b(compare|contrast|distinguish|differentiate)\b/i, null, /比較|異同/],
    ["suggest", "Suggest / predict / deduce", /\b(suggest|predict|deduce)\b/i, /\b(Interpret|Comment)\b/, /推斷|建議|試提出/],
    ["evaluate", "Evaluate / discuss / to what extent", /\b(evaluate|discuss|examine|justify|assess|to what extent|recommend)\b/i, null, /評價|評論|評估|討論|多大程度|是否同意/],
    ["write", "Writing task", /\b(write (a|an|the) (blog|article|speech|letter|email|e-mail|report|review|proposal|diary|interview|brochure|leaflet|essay|text|post|editorial|guide|set of instructions)|you (are|have been) (asked|invited))\b/i, null, /撰寫|寫一篇|試寫/],
    ["other", "Other"],
  ];
  IB.qtypeLabel = (k) => (IB.QTYPES.find((x) => x[0] === k) || [k, k])[1];
  IB.qtypesOf = (q) => {
    if (q.qts) return q.qts;
    if (q.type === "mcq") return (q.qts = ["mcq"]);
    const txt = strip(q.stem || q.q).replace(/^📄[^\]]*?\]/, "");
    const out = IB.QTYPES.filter(([, , en, cap, zh]) => (en && en.test(txt)) || (cap && cap.test(txt)) || (zh && zh.test(txt))).map((x) => x[0]);
    // in maths "evaluate" means work out a value
    if (q.subject === "math" && out.includes("evaluate")) out.splice(out.indexOf("evaluate"), 1, "calc");
    if (!out.length) out.push(q.numeric ? "calc" : "other");
    // kept in the fixed QTYPES order; the first is the question's main type (essays and writing tasks excepted, below)
    const rank = IB.QTYPES.map((x) => x[0]);
    out.sort((a, b) => rank.indexOf(a) - rank.indexOf(b));
    return (q.qts = Array.from(new Set(out)));
  };
  IB.qtypeOf = (q) => {
    const ts = IB.qtypesOf(q);
    if (ts.includes("write")) return "write";
    if (ts.includes("evaluate") && (q.type === "extended" || q.marks >= 8)) return "evaluate";
    return ts[0];
  };

  // ---------- sub-topic: drill questions carry their unit; every other question is matched to the closest unit ----------
  const STOP = new Set("the and for with that this from which what when where into their there these those your have has had was were are its use using used show shows explain state outline describe define calculate determine find answer marks mark one two three four five each also than then them they been being would could should between about after before other such only more most less many much some data text figure table following given value values question questions".split(" "));
  const tokens = (str) => {
    const t = strip(str).toLowerCase().replace(/\\[a-z]+/g, " ");
    const out = (t.match(/[a-z][a-z-]{2,}/g) || []).filter((w) => !STOP.has(w)).map((w) => w.replace(/(ies|es|s)$/, ""));
    const zh = t.replace(/[^一-鿿]/g, "");
    for (let i = 0; i + 1 < zh.length; i++) out.push(zh.slice(i, i + 2));
    return out;
  };
  function tagUnits(t) {
    const units = t.units || {};
    const keys = Object.keys(units);
    if (!keys.length) return;
    const docs = {};
    keys.forEach((k) => (docs[k] = {}));
    const addTo = (k, str, w) => tokens(str).forEach((x) => (docs[k][x] = (docs[k][x] || 0) + w));
    keys.forEach((k) => addTo(k, units[k], 6));
    t.questions.forEach((q) => { if (q.unit && docs[q.unit]) addTo(q.unit, q.q + " " + (q.ms || []).join(" "), 1); });
    const df = {};
    keys.forEach((k) => Object.keys(docs[k]).forEach((x) => (df[x] = (df[x] || 0) + 1)));
    const idf = (x) => Math.log((keys.length + 1) / ((df[x] || 0) + 0.5));
    const norm = {};
    keys.forEach((k) => (norm[k] = Math.sqrt(Object.entries(docs[k]).reduce((n, [x, c]) => n + (c * idf(x)) ** 2, 0)) || 1));
    t.unitOf = (q) => {
      const v = {};
      tokens(strip(q.stem || q.q) + " " + (q.ms || []).join(" ")).forEach((x) => (v[x] = (v[x] || 0) + 1));
      let best = keys[0], bestS = -1;
      keys.forEach((k) => {
        const sc = Object.entries(v).reduce((n, [x, c]) => n + (docs[k][x] ? c * docs[k][x] * idf(x) ** 2 : 0), 0) / norm[k];
        if (sc > bestS) { bestS = sc; best = k; }
      });
      return best;
    };
    t.questions.forEach((q) => {
      if (!(q.unit && units[q.unit])) q.unit = t.unitOf(q);
      q.unitName = units[q.unit];
    });
  }
  IB.subjectList().forEach((s) => s.allTopics.forEach(tagUnits));
  // questions added later (my past papers, AI, generator) get their sub-topic on demand
  IB.unitOf = (q) => {
    if (q.unitName) return q.unit;
    const t = IB.topic(q.topic);
    if (!t || !t.unitOf) return "";
    q.unit = t.unitOf(q);
    q.unitName = t.units[q.unit];
    return q.unit;
  };

  // Section counts for a topic, in display order.
  IB.topicSections2 = (topicId) => {
    const qs = IB.topicQuestions(topicId);
    return IB.SECTIONS.map(([k, name, desc]) => ({ k, name, desc, qs: qs.filter((q) => (q.sec || "exam") === k) })).filter((x) => x.qs.length);
  };
})();
