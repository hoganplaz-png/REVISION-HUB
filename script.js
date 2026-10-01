const igUrl = `https://www.instagram.com/${SHOP.instagram}/`;
const dmUrl = `https://ig.me/m/${SHOP.instagram}`;

document.getElementById("nav-ig").href = igUrl;
document.getElementById("hero-ig").href = dmUrl;
document.querySelectorAll(".ig-link").forEach((a) => (a.href = igUrl));
document.querySelectorAll(".ig-handle").forEach((el) => (el.textContent = "@" + SHOP.instagram));
document.getElementById("year").textContent = new Date().getFullYear();

const STATUS_LABEL = { "in-stock": "In stock", "pre-order": "Pre-order", "sold-out": "Sold out" };
const PALETTES = [
  ["#ff9ac1", "#b28dff"],
  ["#8ec5ff", "#c3a6ff"],
  ["#ffd29d", "#ff8fb1"],
  ["#9df0d1", "#7fb4ff"],
  ["#ffb3d9", "#ffd6a5"],
];

const grid = document.getElementById("grid");
const filtersEl = document.getElementById("filters");
const searchEl = document.getElementById("search");
const emptyEl = document.getElementById("empty");
const toastEl = document.getElementById("toast");

let activeCategory = "All";

const categories = ["All", ...new Set(PRODUCTS.map((p) => p.category))];
categories.forEach((cat) => {
  const b = document.createElement("button");
  b.className = "chip";
  b.textContent = cat;
  b.setAttribute("aria-pressed", cat === activeCategory);
  b.addEventListener("click", () => {
    activeCategory = cat;
    filtersEl.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", c === b));
    render();
  });
  filtersEl.appendChild(b);
});

searchEl.addEventListener("input", render);

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function card(p, i) {
  const [a, b] = PALETTES[i % PALETTES.length];
  const soldOut = p.status === "sold-out";
  const media = p.image
    ? `<img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" loading="lazy">`
    : `<div class="ph" style="background:linear-gradient(135deg,${a},${b})"><span>${escapeHtml(p.group)}</span></div>`;
  return `
    <article class="product${soldOut ? " is-sold" : ""}">
      <div class="media">${media}<span class="badge ${p.status}">${STATUS_LABEL[p.status] || ""}</span></div>
      <div class="info">
        <p class="meta">${escapeHtml(p.group)} · ${escapeHtml(p.category)}</p>
        <h3>${escapeHtml(p.name)}</h3>
        ${p.note ? `<p class="note">${escapeHtml(p.note)}</p>` : ""}
        <div class="buy">
          <span class="price">${SHOP.currency}${p.price}</span>
          <button class="btn btn-small" data-i="${i}" ${soldOut ? "disabled" : ""}>${soldOut ? "Sold out" : "Order"}</button>
        </div>
      </div>
    </article>`;
}

function render() {
  const q = searchEl.value.trim().toLowerCase();
  const items = PRODUCTS.map((p, i) => [p, i]).filter(([p]) => {
    const inCat = activeCategory === "All" || p.category === activeCategory;
    const hay = `${p.name} ${p.group} ${p.category} ${p.note}`.toLowerCase();
    return inCat && (!q || hay.includes(q));
  });
  grid.innerHTML = items.map(([p, i]) => card(p, i)).join("");
  emptyEl.hidden = items.length > 0;
}

grid.addEventListener("click", async (e) => {
  const btn = e.target.closest("button[data-i]");
  if (!btn) return;
  const p = PRODUCTS[+btn.dataset.i];
  const msg = `Hi! I'd like to order: ${p.name} (${p.group}), ${SHOP.currency}${p.price}. Is it available?`;
  try {
    await navigator.clipboard.writeText(msg);
    toast("Order message copied. Paste it in your Instagram DM!");
  } catch {
    toast("Opening Instagram. Tell us you want: " + p.name);
  }
  setTimeout(() => window.open(dmUrl, "_blank", "noopener"), 700);
});

let toastTimer;
function toast(text) {
  toastEl.textContent = text;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 3500);
}

render();
