/* AI marking page: upload photos/PDFs of handwritten or typed work (or type it) and get an examiner-style mark.
   Pick a question from the bank (marked against its IB-style markscheme) or paste your own (the AI searches for the IB criteria). */
IB.page = async function () {
  const app = IB.qs("#app");
  const ai = await IB.ai.available();
  const pre = IB.param("q") ? IB.question(IB.param("q")) : null;
  let mode = pre ? "bank" : IB.param("mode") === "own" ? "own" : "bank";

  app.innerHTML = `<h1 style="margin-bottom:.2em">AI marking</h1>
    <p class="muted" style="margin-top:0">Upload your handwritten or typed answer (photos or a PDF) for an essay, a structured question or a maths solution. The AI reads it, then marks it strictly against the IB markscheme, the way an examiner would, and shows exactly where each mark was won or lost.</p>
    ${ai ? "" : `<div class="notice warn small"><strong>AI marking isn't switched on for this copy of the site.</strong> You can still use the <a href="questionbank.html">question bank</a>, which marks typed answers with the built-in markscheme marker.</div>`}
    <div class="notice small"><strong>It's an estimate.</strong> AI marking can misread handwriting or miss a valid alternative, so treat the mark as a guide and check it against the markscheme and your teacher.</div>
    <div class="tabs no-print" id="amMode"><button data-m="bank">Question from the bank</button><button data-m="own">My own question</button></div>
    <div class="card" id="amQ"></div>
    <div class="card"><h3 style="margin-top:0">Your work</h3>
      <div id="amUp"></div>
      <label class="field" style="margin-top:12px">Or type / paste your answer (you can use both)<textarea id="amText" rows="6" placeholder="Type or paste your answer here…"></textarea></label>
      <div class="btn-row" style="margin-top:12px"><button class="btn primary" id="amGo" ${ai ? "" : "disabled"}>✦ Mark my work</button><span class="small muted" id="amStatus" aria-live="polite"></span></div>
    </div>
    <div id="amOut"></div>`;

  const q$ = IB.qs("#amQ"), out = IB.qs("#amOut"), status = IB.qs("#amStatus"), go = IB.qs("#amGo"), text = IB.qs("#amText");
  const up = IB.uploadPanel({ title: "Upload photos or a PDF of your work" });
  IB.qs("#amUp").appendChild(up.el);
  const subOpts = (val) => IB.subjectList().map((s) => `<option value="${s.id}" ${s.id === val ? "selected" : ""}>${IB.esc(s.name)}</option>`).join("");
  let chosen = pre;

  function drawBank() {
    const sid0 = (pre && pre.subject) || IB.param("subject") || IB.subjectList()[0].id;
    q$.innerHTML = `<div class="filters">
        <label class="field">Subject<select id="amSub">${subOpts(sid0)}</select></label>
        <label class="field">Topic<select id="amTop"></select></label>
        <label class="field">Type<select id="amTyp"><option value="written">Essays &amp; written</option><option value="math">Maths / calculations</option><option value="all">All written questions</option></select></label>
      </div>
      <label class="field" style="margin-top:12px">Question<select id="amQs"></select></label>
      <div id="amShow" class="q-text" style="margin-top:12px"></div>`;
    const sub = IB.qs("#amSub"), top = IB.qs("#amTop"), typ = IB.qs("#amTyp"), qs = IB.qs("#amQs");
    const fillTopics = () => {
      const s = IB.subjects[sub.value];
      top.innerHTML = s.topics.map((t) => `<option value="${t.id}">${IB.esc(t.code)} ${IB.esc(t.title)}</option>`).join("");
      if (pre && pre.subject === sub.value && s.topics.some((t) => t.id === pre.topic)) top.value = pre.topic;
    };
    const fillQs = () => {
      let list = IB.allQuestions(sub.value).filter((q) => q.topic === top.value && q.type !== "mcq" && q.ms && q.ms.length);
      if (typ.value === "math") list = list.filter((q) => q.numeric || q.subject === "math");
      else if (typ.value === "written") list = list.filter((q) => q.type === "extended" || !q.numeric);
      qs.innerHTML = list.length
        ? list.map((q) => `<option value="${IB.esc(q.id)}">[${q.marks}] ${IB.esc(IB.plain(q.q).replace(/\s+/g, " ").slice(0, 90))}</option>`).join("")
        : `<option value="">No questions of this type in this topic - try another</option>`;
      if (pre && list.some((q) => q.id === pre.id)) qs.value = pre.id;
      show();
    };
    const show = () => {
      chosen = qs.value ? IB.question(qs.value) : null;
      IB.qs("#amShow").innerHTML = chosen ? `<p><span class="pill">${chosen.marks} marks</span> ${chosen.q}</p>` : "";
      IB.math(IB.qs("#amShow"));
    };
    sub.onchange = () => { fillTopics(); fillQs(); };
    top.onchange = fillQs; typ.onchange = fillQs; qs.onchange = show;
    if (pre && pre.subject === sub.value && (pre.numeric || pre.subject === "math")) typ.value = "math";
    fillTopics(); fillQs();
  }

  function drawOwn() {
    chosen = null;
    q$.innerHTML = `<div class="filters">
        <label class="field">Subject<select id="oSub">${subOpts(IB.param("subject"))}</select></label>
        <label class="field">Paper / component<input id="oPaper" placeholder="e.g. Paper 1 (b), Paper 2 Q3"></label>
        <label class="field">Marks available<input id="oMarks" type="number" min="1" max="60" value="10"></label>
      </div>
      <label class="field" style="margin-top:12px">The question<textarea id="oQ" rows="4" placeholder="Paste or type the full question, including any command term (e.g. 'Evaluate…')."></textarea></label>
      <label class="field" style="margin-top:12px">Markscheme (optional)<textarea id="oMs" rows="4" placeholder="One mark point per line. Leave blank and the AI will search for the IB markscheme conventions and criteria for this kind of question, then show you what it used."></textarea></label>`;
  }

  const draw = () => {
    IB.qsa("#amMode button").forEach((b) => b.classList.toggle("active", b.dataset.m === mode));
    mode === "bank" ? drawBank() : drawOwn();
    out.innerHTML = "";
  };
  IB.qsa("#amMode button").forEach((b) => (b.onclick = () => { mode = b.dataset.m; draw(); }));
  draw();

  go.onclick = async () => {
    const answer = text.value.trim();
    if (!up.count() && !answer) return IB.toast("Upload your work or type an answer first.");
    let payload;
    if (mode === "bank") {
      if (!chosen) return IB.toast("Choose a question first.");
      const t = IB.topic(chosen.topic);
      payload = { subject: chosen.subject, topic: t ? t.title : "", question: IB.plain(chosen.q), ms: chosen.ms.map(IB.plain), marks: chosen.marks, paper: IB.paperOf ? IB.paperOf(chosen) : "" };
    } else {
      const qt = IB.qs("#oQ").value.trim();
      if (qt.length < 10) return IB.toast("Type the question first.");
      payload = {
        subject: IB.qs("#oSub").value, paper: IB.qs("#oPaper").value.trim(), question: qt, marks: parseInt(IB.qs("#oMarks").value, 10) || 10,
        ms: IB.qs("#oMs").value.split("\n").map((x) => x.trim()).filter(Boolean),
      };
    }
    payload.answer = answer;
    payload.files = up.files();
    go.disabled = true; go.textContent = "Marking…";
    status.textContent = payload.ms.length ? "Reading your work and marking it against the markscheme…" : "Searching for the IB markscheme, then marking - this can take up to a minute…";
    out.innerHTML = "";
    try {
      const fb = await IB.ai.markFiles(payload);
      const el = IB.fileFeedbackEl(fb);
      out.appendChild(el);
      if (IB.animateFeedback) IB.animateFeedback(el);
      IB.math(out);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      status.textContent = "";
    } catch (e) {
      status.textContent = "";
      out.innerHTML = `<div class="notice warn">${IB.esc(e.message)}</div>`;
    }
    go.disabled = false; go.textContent = "✦ Mark my work again";
  };
};
