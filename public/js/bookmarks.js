/* Bookmarks: questions and notes topics you saved, with your own name, colour and folder.
   Stored in the progress store (d.bookmarks) so they sync with the rest of your progress. */
IB.page = function () {
  const app = IB.qs("#app");
  let folder = "all", kind = "all", open = null;

  app.innerHTML = `<h1 style="margin-bottom:.2em">Bookmarks</h1>
    <p class="muted" style="margin-top:0">Bookmark any question (🔖 under it) or notes topic, give it your own name, colour and folder, and find it again here.</p>
    <div class="mk-bar card">
      <div class="seg" id="bmKind" role="tablist"></div>
      <label class="small">Folder <select id="bmFolder"></select></label>
    </div>
    <div id="bmList"></div>`;

  function render() {
    const all = IB.bm.list();
    IB.qs("#bmKind").innerHTML = [["all", `All ${all.length}`], ["q", "Questions"], ["n", "Notes"]]
      .map(([k, l]) => `<button data-k="${k}" class="${k === kind ? "active" : ""}">${l}</button>`).join("");
    IB.qsa("#bmKind button").forEach((b) => (b.onclick = () => { kind = b.dataset.k; render(); }));
    const folders = IB.bm.folders();
    if (folder !== "all" && folder !== "" && !folders.includes(folder)) folder = "all";
    IB.qs("#bmFolder").innerHTML = `<option value="all">All folders</option><option value=""${folder === "" ? " selected" : ""}>No folder</option>` +
      folders.map((f) => `<option${f === folder ? " selected" : ""}>${IB.esc(f)}</option>`).join("");
    IB.qs("#bmFolder").onchange = (e) => { folder = e.target.value; render(); };
    const list = all.filter((b) => (kind === "all" || b.k === kind) && (folder === "all" || (b.folder || "") === folder));
    const box = IB.qs("#bmList");
    if (!list.length) {
      box.innerHTML = `<div class="card" style="text-align:center;padding:32px"><p class="muted">${all.length ? "Nothing in this view." : "No bookmarks yet. Open a question or a notes topic and press 🔖 Bookmark."}</p></div>`;
      return;
    }
    box.innerHTML = "";
    list.forEach((b) => {
      const isQ = b.k === "q";
      const s = IB.subjects[b.s];
      const el = IB.el(`<div class="card bm-item" style="--bmc:${IB.BM_COLORS[b.color] || "var(--border)"}">
        <div class="bm-body">
          <h4>${IB.esc(b.label || b.title)}</h4>
          <div class="small muted">${s ? `<span class="pill ${b.s}">${IB.esc(s.short)}</span> ` : ""}${b.folder ? `📁 ${IB.esc(b.folder)} · ` : ""}${isQ ? "Question" : "Notes"}${b.sub ? " · " + IB.esc(b.sub) : ""}${b.label ? `<br>${IB.esc(b.title)}` : ""}</div>
        </div>
        <div class="btn-row">${isQ ? `<button class="btn small bm-open">${open === b.key ? "Hide" : "Open"}</button>` : `<a class="btn small" href="notes.html?subject=${b.s}&topic=${b.t}">Open notes</a>`}<button class="btn small bm-edit">Edit</button></div>
        <div class="bm-q"></div>
      </div>`);
      IB.qs(".bm-edit", el).onclick = () => IB.bookmarkEditor({ key: b.key, k: b.k, id: b.id, title: b.title, s: b.s, t: b.t, sub: b.sub }, render);
      if (isQ) {
        const show = () => {
          const q = IB.question(b.id);
          const slot = IB.qs(".bm-q", el);
          slot.innerHTML = q ? "" : `<p class="small muted">This question is no longer in the bank.</p>`;
          if (q && open === b.key) slot.appendChild(IB.renderQuestion(q, { showTopic: false }));
        };
        IB.qs(".bm-open", el).onclick = () => { open = open === b.key ? null : b.key; render(); };
        if (open === b.key) show();
      }
      box.appendChild(el);
    });
    IB.math(box);
  }
  render();
};
