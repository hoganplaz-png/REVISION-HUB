/* Chapter notes: the exam-ready write-up shown first on each topic page, modelled on printed "10 分鐘搞掂" notes.
   Numbered, colour-banded parts with a time budget; core box, 口訣 (memory hooks), tables, a worked example,
   失分位 (where marks are lost); then a one-page 總口訣 summary and IB-style practice with answers.
   Data lives in js/data/fast/<subject>.js and is loaded on demand: IB.addFast({ "<topicId>": sheet }).

   sheet = {
     title: "Transformations · Asymptotes · Domain & Range",   // what the 10 minutes cover
     intro: "…",                                              // optional one-liner under the title
     parts: [{ h: "Transformations 圖形變換", min: 3, blocks: [
       ["key", html],                       // grey core box: the one formula / idea to hold on to
       ["rhyme", label, phrase, html?],     // dashed yellow 口訣 box
       ["table", [head…], [[cell…]…]],      // compact table
       ["eg", questionHtml, [step…]],       // worked example, step by step
       ["trap", [item…]],                   // pink 失分位 box
       ["note", html],                      // any other short box
       ["html", html],                      // raw html (diagrams built from .fn-hub / .fn-flow)
       ["flow", [[label, html]…]],          // chevron chain, e.g. ① 轉 mol → ② 比例 → ③ 轉返
       ["grid", [[tag, phrase, hint]…]],    // all the 口訣 of a topic in a two-column grid
       ["check", [item…]],                  // "can you do this without notes?" tick list
     ] }],
     summary: [phrase…],                    // 一頁總口訣 (read 3 times before the exam)
     practice: [{ q, m, a, o? }],           // IB-style questions, marks, answers; o = MCQ options ["A. …", …]
   } */
(function () {
  "use strict";
  const IB = window.IB;
  const NUM = "①②③④⑤⑥⑦⑧⑨⑩⑪⑫";
  const COLORS = ["#6D28D9", "#0E7490", "#C2410C", "#15803D", "#BE123C", "#1D4ED8", "#A16207", "#7E22CE"];
  const ZH = (sid) => sid === "chia";

  IB.fastMinutes = (f) => f.parts.reduce((n, p) => n + (p.min || 0), 0) + (f.summary && f.summary.length ? 0.5 : 0) + (f.practice && f.practice.length ? 1 : 0);
  const minLabel = (m) => `${Math.round(m * 10) / 10} 分鐘`;

  const table = (head, rows) =>
    `<div class="table-wrap"><table class="fn-table"><thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((x) => `<td>${x}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;

  function block(b, opts) {
    const [k] = b;
    if (k === "key") return `<div class="fn-key">${b[1]}</div>`;
    if (k === "note") return `<div class="fn-key fn-note">${b[1]}</div>`;
    if (k === "rhyme") return `<div class="fn-rhyme"><div class="fn-rhyme-h"><b>${b[1]}：</b><span>「${b[2]}」</span></div>${b[3] ? `<div class="fn-rhyme-b">${b[3]}</div>` : ""}</div>`;
    if (k === "table") return table(b[1], b[2]);
    if (k === "eg") return `<div class="fn-eg"><div class="fn-eg-q"><b>例：</b>${b[1]}</div>${(b[2] || []).map((s) => `<div class="fn-step">${s}</div>`).join("")}</div>`;
    if (k === "html") return b[1];
    if (k === "flow") return `<div class="fn-flow">${b[1].map((x, i) => `${i ? '<span class="fn-arrow">→</span>' : ""}<div class="fn-step-chip"><b>${x[0]}</b><span>${x[1]}</span></div>`).join("")}</div>`;
    if (k === "grid") return `<div class="fn-grid">${b[1].map((x) => `<div class="fn-gi"><span class="fn-tag">${x[0]}</span><b>「${x[1]}」</b>${x[2] ? `<small>${x[2]}</small>` : ""}</div>`).join("")}</div>`;
    if (k === "check") return `<ul class="fn-check">${b[1].map((x) => `<li><label><input type="checkbox"> <span>${x}</span></label></li>`).join("")}</ul>`;
    if (k === "trap") return `<div class="fn-trap"><div class="fn-trap-h">⚠ 失分位</div><ul>${b[1].map((x) => `<li>${x}</li>`).join("")}</ul></div>`;
    return "";
  }
  const bar = (n, h, min, color) => `<div class="fn-bar" style="--fc:${color}"><span>${NUM[n] || n + 1} ${h}</span>${min ? `<span class="fn-min">${minLabel(min)}</span>` : ""}</div>`;

  // 10-minute version: only the memory hooks, traps, checklists and the first 3 practice items of the full sheet
  const BRIEF = { rhyme: 1, grid: 1, flow: 1, trap: 1, check: 1 };
  function briefOf(f) {
    const parts = f.parts.map((p) => {
      let key = 0;
      const blocks = p.blocks.filter((b) => BRIEF[b[0]] || (b[0] === "key" && !key++));
      return blocks.length ? { h: p.h, min: Math.max(0.5, Math.round(p.min / 3 * 2) / 2), blocks } : null;
    }).filter(Boolean);
    return { ...f, parts, practice: (f.practice || []).slice(0, 3) };
  }

  /** HTML for one topic's fast notes. opts.static: answers shown (PDF/print) rather than behind a click. */
  IB.fastHtml = function (t, opts = {}) {
    let f = IB.fast[t.id];
    if (!f) return "";
    if (opts.brief) f = briefOf(f);
    const s = IB.subjects[t.subject];
    let n = 0;
    const out = [];
    out.push(`<div class="fn-head" style="--fc:${COLORS[0]}"><div class="fn-eyebrow">${opts.brief ? "⏱ 10 分鐘 Fast notes" : "📘 " + (ZH(t.subject) ? "章節筆記" : "Chapter notes")} · ${Math.ceil(IB.fastMinutes(f))} 分鐘</div><h3 class="fn-title">${f.title}</h3><div class="fn-sub">IB ${IB.esc(s ? s.baseName : "")} · ${IB.esc(t.code)} ${IB.esc(t.title)}｜${f.intro || "每個 part 有時間建議，跟住讀就得。"}</div></div>`);
    f.parts.forEach((p) => {
      out.push(`<div class="fn-part">${bar(n, p.h, p.min, COLORS[n % COLORS.length])}${p.blocks.map((b) => block(b, opts)).join("")}</div>`);
      n++;
    });
    if (f.summary && f.summary.length) {
      out.push(`<div class="fn-part">${bar(n, "一頁總口訣（考前讀 3 次）", 0.5, "#15803D")}<div class="fn-rhyme fn-sum"><ol>${f.summary.map((x) => `<li>${x}</li>`).join("")}</ol></div></div>`);
      n++;
    }
    if (f.practice && f.practice.length) {
      const qs = f.practice.map((q, i) => `<div class="fn-q"><b>${i + 1}.</b> ${q.q} <i class="fn-m">[${q.m}]</i>${q.o ? `<div class="fn-opts">${q.o.map((x) => `<span>${x}</span>`).join("")}</div>` : ""}${opts.static ? `<div class="fn-lines">${'<i></i>'.repeat(Math.min(4, 1 + Math.ceil(q.m / 2)))}</div>` : `<details class="fn-ans"><summary>Show answer · 睇答案</summary><div>${q.a}</div></details>`}</div>`).join("");
      const ms = opts.static ? `<div class="fn-ms"><b>答案 Markscheme</b><ol>${f.practice.map((q) => `<li>${q.a}</li>`).join("")}</ol></div>` : "";
      out.push(`<div class="fn-part">${bar(n, "IB-style Practice（1 分鐘快試）", 1, "#BE123C")}${qs}</div>${ms}`);
    }
    return out.join("");
  };

  /** Section for the topic notes page (same shape as IB.topicSections entries). */
  IB.fastSection = function (t) {
    if (!IB.fast[t.id]) return null;
    return ["fast", "Exam notes", `<section class="card fast" id="sec-fast" data-reveal>${IB.fastHtml(t)}</section>`];
  };

  // ---------- on-demand loading ----------
  const loading = {};
  IB.loadFast = function (subjectId) {
    if (!subjectId) return Promise.resolve();
    if (!loading[subjectId]) {
      loading[subjectId] = new Promise((ok) => {
        const el = document.createElement("script");
        el.src = `js/data/fast/${subjectId}.js`;
        el.onload = ok;
        el.onerror = () => { delete loading[subjectId]; ok(); };
        document.head.appendChild(el);
      });
    }
    return loading[subjectId];
  };
})();
