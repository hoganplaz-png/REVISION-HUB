// Reports questions that duplicate or nearly duplicate another question in the same topic.
// Usage: node scripts/dup-report.mjs [subject] [--write]
// With --write, saves the ids of later duplicates (token Jaccard >= 0.8) to public/js/data/dupes.js, which hides them.
// Without it, prints near-duplicates (>= 0.6) so new questions can be checked.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
const src = fs.readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), "check-data.js"), "utf8");
const head = src.slice(0, src.indexOf("const IB = ctx.IB;")).replace(/import\.meta\.url/g, `"${import.meta.url}"`).replace(/"data\/dupes\.js", /, "");
const mod = path.join(path.dirname(fileURLToPath(import.meta.url)), ".dup-load.mjs");
fs.writeFileSync(mod, head + "\nexport { ctx };\n");
const { ctx } = await import(mod);
fs.rmSync(mod);
const IB = ctx.IB;
const WRITE = process.argv.includes("--write");
const skip = [];
const args = process.argv.slice(2);
const subj = args.find((a) => IB.subjects[a]);
const strip = (h) => String(h).replace(/<\/?[a-zA-Z][^>]*>/g, " ").replace(/&#?\w+;/g, " ").toLowerCase();
const toks = (q) => new Set((strip(q.stem || q.q).match(/[a-z0-9.%一-鿿]{2,}/g) || []).filter((w) => !["the","and","for","with","that","this","from","which","what","state","explain","calculate","define","find","show","using","use"].includes(w)));
const nums = (t) => (strip(t).match(/\d+(\.\d+)?/g) || []).join(",");
let bad = 0, total = 0;
for (const s of IB.subjectList()) {
  if (subj && s.id !== subj) continue;
  for (const t of s.allTopics) {
    const qs = t.questions.filter((q) => !q.derived && q.sec !== "frames" && q.sec !== "case");
    const T = qs.map((q) => [q, toks(q)]);
    for (let i = 1; i < T.length; i++) {
      const [a, ta] = T[i];
      for (let j = 0; j < i; j++) {
        const [b, tb] = T[j];
        let inter = 0; ta.forEach((w) => tb.has(w) && inter++);
        const jac = inter / (ta.size + tb.size - inter || 1);
        if (jac >= 0.8) skip.push(a.id);
        if (!WRITE && (jac >= 0.6 || (jac >= 0.45 && nums(a.q) && nums(a.q) === nums(b.q)))) { bad++; console.log(`${a.id} ~ ${b.id} (${jac.toFixed(2)}): ${strip(a.q).slice(0, 80).trim()}`); }
      }
    }
    total += qs.length;
  }
}
if (WRITE) {
  const ids = Array.from(new Set(skip)).sort();
  fs.writeFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public", "js", "data", "dupes.js"), `/* Questions that repeat an earlier question in the same topic (scripts/dup-report.mjs --write): hidden everywhere. */\n(function () {\n  const dup = new Set(${JSON.stringify(ids)});\n  window.IB.subjectList().forEach((s) => s.allTopics.forEach((t) => (t.questions = (t.questions || []).filter((q) => !dup.has(q.id)))));\n})();\n`);
  console.log(`${ids.length} duplicate question(s) hidden`);
  process.exit(0);
}
console.log(`${total} questions scanned, ${bad} near-duplicate pair(s)`);
process.exit(0);
