/* Mark handwritten or typed work from photos / PDFs. The files go to the Gemini marking Worker (POST /api/mark-file),
   which reads them like an examiner and marks against the question's markscheme (or looks up IB criteria for your own question).
   Used by the question cards (essays and maths) and by the AI marking page. */
(function () {
  "use strict";
  const IB = window.IB;
  const esc = IB.esc;
  const MAX_FILES = 6, MAX_PDF = 8 * 1024 * 1024;

  const readBase64 = (blob) => new Promise((ok, bad) => {
    const fr = new FileReader();
    fr.onload = () => ok(String(fr.result).split(",")[1] || "");
    fr.onerror = () => bad(new Error("Couldn't read that file."));
    fr.readAsDataURL(blob);
  });

  // Photos are shrunk (long edge 1800px, JPEG) so a phone camera shot uploads quickly; PDFs are sent as they are.
  async function prep(file) {
    if (file.type === "application/pdf" || /\.pdf$/i.test(file.name)) {
      if (file.size > MAX_PDF) throw new Error(`${file.name} is over 8 MB - split it or export fewer pages.`);
      return { mime: "application/pdf", data: await readBase64(file), name: file.name, pdf: true };
    }
    if (!/^image\//.test(file.type)) throw new Error(`${file.name} isn't a photo or PDF.`);
    const url = URL.createObjectURL(file);
    try {
      const img = await new Promise((ok, bad) => { const i = new Image(); i.onload = () => ok(i); i.onerror = () => bad(new Error(`Couldn't open ${file.name}. Try a JPEG or PNG.`)); i.src = url; });
      const k = Math.min(1, 1800 / Math.max(img.naturalWidth, img.naturalHeight));
      const c = document.createElement("canvas");
      c.width = Math.round(img.naturalWidth * k); c.height = Math.round(img.naturalHeight * k);
      const g = c.getContext("2d");
      g.fillStyle = "#fff"; g.fillRect(0, 0, c.width, c.height);
      g.drawImage(img, 0, 0, c.width, c.height);
      const data = c.toDataURL("image/jpeg", 0.85);
      return { mime: "image/jpeg", data: data.split(",")[1], name: file.name, preview: data };
    } finally {
      URL.revokeObjectURL(url);
    }
  }

  // An upload box: choose or photograph pages, see thumbnails, remove any. files() gives what to send.
  IB.uploadPanel = function (opts = {}) {
    const items = [];
    const el = IB.el(`<div class="up-panel">
      <div class="up-drop" tabindex="0" role="button" aria-label="Upload your work">
        <strong>${esc(opts.title || "Upload your handwritten or typed work")}</strong>
        <span class="small muted">Photos (JPEG/PNG) or a PDF, up to ${MAX_FILES} files. Tap to choose, or take a photo on your phone.</span>
        <span class="btn-row" style="justify-content:center"><span class="btn small">📎 Choose files</span></span>
      </div>
      <input type="file" accept="image/*,application/pdf" multiple hidden>
      <div class="up-thumbs"></div>
      <p class="small up-err" role="alert" hidden></p>
    </div>`);
    const input = IB.qs("input", el), drop = IB.qs(".up-drop", el), thumbs = IB.qs(".up-thumbs", el), err = IB.qs(".up-err", el);
    const draw = () => {
      thumbs.innerHTML = items.map((it, i) => `<div class="up-thumb">${it.preview ? `<img src="${it.preview}" alt="Page ${i + 1}">` : `<div class="up-pdf">PDF</div>`}<span class="small">${esc(it.name).slice(0, 24)}</span><button class="icon-btn" data-i="${i}" aria-label="Remove ${esc(it.name)}">×</button></div>`).join("");
      IB.qsa("button", thumbs).forEach((b) => (b.onclick = () => { items.splice(+b.dataset.i, 1); draw(); if (opts.onChange) opts.onChange(items.length); }));
      el.classList.toggle("has-files", items.length > 0);
    };
    const add = async (list) => {
      err.hidden = true;
      for (const f of Array.from(list)) {
        if (items.length >= MAX_FILES) { err.textContent = `Up to ${MAX_FILES} files at a time.`; err.hidden = false; break; }
        try { items.push(await prep(f)); } catch (e) { err.textContent = e.message; err.hidden = false; }
      }
      input.value = "";
      draw();
      if (opts.onChange) opts.onChange(items.length);
    };
    drop.onclick = () => input.click();
    drop.onkeydown = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); input.click(); } };
    input.onchange = () => add(input.files);
    ["dragover", "dragenter"].forEach((n) => drop.addEventListener(n, (e) => { e.preventDefault(); drop.classList.add("over"); }));
    ["dragleave", "drop"].forEach((n) => drop.addEventListener(n, (e) => { e.preventDefault(); drop.classList.remove("over"); }));
    drop.addEventListener("drop", (e) => add(e.dataTransfer.files));
    return {
      el,
      files: () => items.map((i) => ({ mime: i.mime, data: i.data })),
      count: () => items.length,
      clear: () => { items.length = 0; draw(); },
    };
  };

  // payload: { subject, topic, question, ms[], marks, answer (typed text), files[], paper, level }
  IB.ai.markFiles = async function (payload) {
    if (IB.hosted) throw new Error("Uploading work to be marked needs the main site (ib-revision-hub.web.app).");
    let r;
    try {
      r = await IB.apiFetch("/api/mark-file", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    } catch (e) {
      throw new Error("Couldn't reach the AI marker - check your connection and try again.");
    }
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(j.error || "AI marking failed");
    j.awarded = (j.awarded || []).map(esc);
    j.missing = (j.missing || []).map(esc);
    j.improvements = (j.improvements || []).map(esc);
    return j;
  };

  const CONF = { high: "Clear to read", medium: "Mostly clear", low: "Hard to read / low confidence" };

  // Standard feedback card plus what the AI read, the mark breakdown, sources and an honest "this is an estimate" note.
  IB.fileFeedbackEl = function (fb) {
    const el = IB.feedbackEl(fb);
    const extra = IB.el(`<div class="fm-extra">
      <p class="small fm-est"><strong>Estimated mark.</strong> ${esc(CONF[fb.confidence] || "")}. AI marking is a revision aid and can misread handwriting or miss a valid alternative - it is not an official IB grade. Check it against the markscheme and your teacher's feedback.</p>
      ${fb.criteria && fb.criteria.length ? `<table class="fm-table small"><thead><tr><th>Criterion / mark point</th><th>Marks</th><th>Comment</th></tr></thead><tbody>${fb.criteria.map((c) => `<tr><td>${esc(c.name)}</td><td>${c.awarded}/${c.max}</td><td>${esc(c.comment)}</td></tr>`).join("")}</tbody></table>` : ""}
      ${fb.markscheme_used && fb.markscheme_used.length ? `<details class="small"><summary>Markscheme the AI marked against${fb.grounded ? " (found by searching)" : ""}</summary><ul>${fb.markscheme_used.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></details>` : ""}
      ${fb.transcription ? `<details class="small"><summary>What the AI read from your work - check it is right</summary><pre class="fm-trans">${esc(fb.transcription)}</pre></details>` : ""}
      ${fb.sources && fb.sources.length ? `<p class="small muted">Sources searched: ${fb.sources.map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a>`).join(" · ")}</p>` : ""}
    </div>`);
    el.appendChild(extra);
    return el;
  };
})();
