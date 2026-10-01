// ---------- helpers ----------
const $ = (s, el = document) => el.querySelector(s);
const igUrl = `https://www.instagram.com/${SHOP.instagram}/`;
const dmUrl = `https://ig.me/m/${SHOP.instagram}`;
const money = (n) => `${SHOP.symbol}${Number(n).toFixed(2).replace(/\.00$/, "")}`;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

PRODUCTS.forEach((p) => (p.id = slug(`${p.group} ${p.name}`)));
const byId = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]));

const STATUS = { "in-stock": "In stock", "pre-order": "Pre-order", "sold-out": "Sold out" };
const PALETTES = [
  ["#c6ff3d", "#7ee8fa"], ["#b9a4ff", "#ff9ad5"], ["#ffcf6b", "#ff7a59"],
  ["#7ee8fa", "#b9a4ff"], ["#ff9ad5", "#ffcf6b"], ["#9dffcb", "#c6ff3d"],
];
const palette = (key) => PALETTES[[...key].reduce((a, c) => a + c.charCodeAt(0), 0) % PALETTES.length];

function art(p, big = false) {
  if (p.image) return `<img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy">`;
  const [a, b] = palette(p.name);
  return `<div class="ph${big ? " ph-big" : ""}" style="--a:${a};--b:${b}"><span>${esc(p.group)}</span><small>${esc(p.category)}</small></div>`;
}

// ---------- links ----------
document.querySelectorAll(".ig-link").forEach((a) => (a.href = igUrl));
document.querySelectorAll(".dm-link").forEach((a) => (a.href = dmUrl));
document.querySelectorAll(".ig-handle").forEach((el) => (el.textContent = "@" + SHOP.instagram));
$("#year").textContent = new Date().getFullYear();

// ---------- marquee ----------
const tags = [...new Set([...PRODUCTS.map((p) => p.group), ...PRODUCTS.map((p) => p.category)])];
const run = tags.map((t) => `<span>${esc(t)}</span><i>✦</i>`).join("");
$("#marquee").innerHTML = run + run + run + run;

// ---------- catalogue ----------
let cat = "All";
const catEl = $("#cat-filters");
["All", ...new Set(PRODUCTS.map((p) => p.category))].forEach((c) => {
  const b = document.createElement("button");
  b.className = "chip";
  b.textContent = c;
  b.setAttribute("aria-pressed", c === cat);
  b.onclick = () => {
    cat = c;
    catEl.querySelectorAll(".chip").forEach((x) => x.setAttribute("aria-pressed", x === b));
    renderGrid();
  };
  catEl.appendChild(b);
});
const groupEl = $("#group-filter");
groupEl.innerHTML = ["All groups", ...new Set(PRODUCTS.map((p) => p.group))].map((g) => `<option>${esc(g)}</option>`).join("");
groupEl.onchange = renderGrid;
$("#search").oninput = renderGrid;

function renderGrid() {
  const q = $("#search").value.trim().toLowerCase();
  const g = groupEl.value;
  const items = PRODUCTS.filter((p) =>
    (cat === "All" || p.category === cat) &&
    (g === "All groups" || p.group === g) &&
    (!q || `${p.name} ${p.group} ${p.category} ${p.note}`.toLowerCase().includes(q)));
  $("#grid").innerHTML = items.map((p) => {
    const sold = p.status === "sold-out";
    return `
      <article class="card${sold ? " sold" : ""}" data-id="${p.id}" tabindex="0" aria-label="${esc(p.name)}">
        <div class="card-media">${art(p)}<span class="tag ${p.status}">${STATUS[p.status] || ""}</span></div>
        <div class="card-body">
          <p class="card-group">${esc(p.group)}</p>
          <h3>${esc(p.name)}</h3>
          <div class="card-foot">
            <span class="price">${money(p.price)}</span>
            <button class="add" data-add="${p.id}" ${sold ? "disabled" : ""} aria-label="Add ${esc(p.name)} to cart">${sold ? "Sold out" : "+ Add"}</button>
          </div>
        </div>
      </article>`;
  }).join("");
  $("#empty").hidden = items.length > 0;
}

$("#grid").addEventListener("click", (e) => {
  const add = e.target.closest("[data-add]");
  if (add) return addToCart(add.dataset.add, 1);
  const card = e.target.closest(".card");
  if (card) openQuickView(card.dataset.id);
});
$("#grid").addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.classList.contains("card")) openQuickView(e.target.dataset.id);
});

// ---------- quick view ----------
const qv = $("#quickview");
function openQuickView(id) {
  const p = byId[id];
  const sold = p.status === "sold-out";
  $("#qv-body").innerHTML = `
    <div class="qv-media">${art(p, true)}</div>
    <div class="qv-info">
      <span class="tag ${p.status}">${STATUS[p.status]}</span>
      <p class="card-group">${esc(p.group)} · ${esc(p.category)}</p>
      <h2>${esc(p.name)}</h2>
      <p class="qv-price">${money(p.price)}</p>
      ${p.note ? `<p class="muted">${esc(p.note)}</p>` : ""}
      ${sold
        ? `<a class="btn btn-line dm-link" href="${dmUrl}" target="_blank" rel="noopener">Ask about a restock</a>`
        : `<div class="qty-row">
             <div class="qty"><button data-q="-1" aria-label="Less">−</button><input id="qv-qty" type="number" min="1" value="1" aria-label="Quantity"><button data-q="1" aria-label="More">+</button></div>
             <button class="btn" id="qv-add">${p.status === "pre-order" ? "Pre-order" : "Add to cart"}</button>
           </div>`}
    </div>`;
  qv.showModal();
  const qty = $("#qv-qty");
  if (!qty) return;
  $("#qv-body").querySelectorAll("[data-q]").forEach((b) =>
    (b.onclick = () => (qty.value = Math.max(1, (+qty.value || 1) + +b.dataset.q))));
  $("#qv-add").onclick = () => {
    addToCart(id, Math.max(1, Math.floor(+qty.value) || 1));
    qv.close();
  };
}
document.querySelectorAll("dialog [data-close]").forEach((b) => (b.onclick = () => b.closest("dialog").close()));
document.querySelectorAll("dialog").forEach((d) =>
  d.addEventListener("click", (e) => { if (e.target === d) d.close(); }));

// ---------- cart ----------
let cart = {};
try { cart = JSON.parse(localStorage.getItem("mh-cart") || "{}"); } catch { cart = {}; }
for (const id in cart) if (!byId[id] || byId[id].status === "sold-out") delete cart[id];

const saveCart = () => { try { localStorage.setItem("mh-cart", JSON.stringify(cart)); } catch {} };
const cartLines = () => Object.entries(cart).map(([id, qty]) => ({ p: byId[id], qty }));
const subtotal = () => cartLines().reduce((s, l) => s + l.p.price * l.qty, 0);
const cartCount = () => Object.values(cart).reduce((a, b) => a + b, 0);

function addToCart(id, qty) {
  cart[id] = (cart[id] || 0) + qty;
  saveCart();
  renderCart();
  toast(`Added: ${byId[id].name}`);
  const btn = $("#cart-open");
  btn.classList.remove("bump"); void btn.offsetWidth; btn.classList.add("bump");
}
function setQty(id, qty) {
  if (qty <= 0) delete cart[id]; else cart[id] = qty;
  saveCart();
  renderCart();
}

function renderCart() {
  $("#cart-count").textContent = cartCount();
  const lines = cartLines();
  $("#cart-items").innerHTML = lines.length
    ? lines.map(({ p, qty }) => `
        <div class="line">
          <div class="line-art">${art(p)}</div>
          <div class="line-info">
            <p class="card-group">${esc(p.group)}</p>
            <p class="line-name">${esc(p.name)}</p>
            <div class="qty qty-sm"><button data-set="${p.id}" data-v="${qty - 1}" aria-label="Less">−</button><span>${qty}</span><button data-set="${p.id}" data-v="${qty + 1}" aria-label="More">+</button></div>
          </div>
          <div class="line-end"><b>${money(p.price * qty)}</b><button class="link" data-set="${p.id}" data-v="0">Remove</button></div>
        </div>`).join("")
    : `<div class="cart-empty"><p>Your cart is empty.</p><button class="btn btn-small" id="keep-shopping">Start shopping</button></div>`;
  const sub = subtotal();
  $("#cart-subtotal").textContent = money(sub);
  const left = SHOP.freeShippingOver - sub;
  $("#ship-note").textContent = !SHOP.freeShippingOver || !lines.length ? ""
    : left > 0 ? `Add ${money(left)} more for free shipping` : "You've unlocked free shipping 🎉";
  $("#checkout-btn").disabled = !lines.length;
  const ks = $("#keep-shopping");
  if (ks) ks.onclick = () => { closeCart(); location.hash = "#shop"; };
}
$("#cart-items").addEventListener("click", (e) => {
  const b = e.target.closest("[data-set]");
  if (b) setQty(b.dataset.set, +b.dataset.v);
});

const drawer = $("#drawer"), scrim = $("#scrim");
function openCart() { drawer.classList.add("open"); drawer.setAttribute("aria-hidden", "false"); scrim.hidden = false; }
function closeCart() { drawer.classList.remove("open"); drawer.setAttribute("aria-hidden", "true"); scrim.hidden = true; }
$("#cart-open").onclick = openCart;
$("#cart-close").onclick = closeCart;
scrim.onclick = closeCart;
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeCart(); });

// ---------- checkout ----------
const co = $("#checkout");
const coBody = $("#checkout-body");
const PAYPAL = "paypal";

function shippingCost(method, sub) {
  if (!method || method.price === 0) return 0;
  return SHOP.freeShippingOver && sub >= SHOP.freeShippingOver ? 0 : method.price;
}

function summaryHtml(shipIdx) {
  const sub = subtotal();
  const ship = shippingCost(SHOP.shipping[shipIdx], sub);
  return `
    <div class="sum-lines">${cartLines().map(({ p, qty }) =>
      `<div class="sum-line"><span>${qty} × ${esc(p.name)}<small>${esc(p.group)}${p.status === "pre-order" ? " · Pre-order" : ""}</small></span><b>${money(p.price * qty)}</b></div>`).join("")}</div>
    <div class="row"><span>Subtotal</span><span>${money(sub)}</span></div>
    <div class="row"><span>Shipping</span><span>${ship ? money(ship) : "Free"}</span></div>
    <div class="row total"><span>Total</span><b>${money(sub + ship)} <small>${esc(SHOP.currency)}</small></b></div>`;
}

function openCheckout() {
  closeCart();
  const methods = [
    ...(SHOP.paypalClientId ? [{ id: PAYPAL, name: "Card or PayPal", desc: "Pay securely now with a debit/credit card or PayPal." }] : []),
    ...SHOP.manualPayments.map((m, i) => ({ id: "m" + i, name: m.name, desc: "We'll show you the payment details after you place the order." })),
  ];
  coBody.innerHTML = `
    <div class="co">
      <form class="co-form" id="co-form" novalidate>
        <p class="kicker">Checkout</p>
        <h2>Your details</h2>
        <div class="fields">
          <label><span>Full name</span><input name="name" required autocomplete="name"></label>
          <label><span>Email</span><input name="email" type="email" required autocomplete="email"></label>
          <label><span>Instagram <span class="opt">(optional)</span></span><input name="instagram" placeholder="@yourhandle"></label>
          <label><span>Phone <span class="opt">(optional)</span></span><input name="phone" type="tel" autocomplete="tel"></label>
        </div>
        <h3>Delivery</h3>
        <div class="options">${SHOP.shipping.map((s, i) => `
          <label class="option"><input type="radio" name="ship" value="${i}" ${i === 0 ? "checked" : ""}>
            <span><b>${esc(s.name)}</b><small>${s.price ? money(s.price) : "Free"}</small></span></label>`).join("")}
        </div>
        <label class="full" id="addr-wrap"><span>Shipping address</span><textarea name="address" rows="3" autocomplete="street-address" placeholder="Street, city, postcode, country"></textarea></label>
        <label class="full"><span>Order notes <span class="opt">(optional)</span></span><textarea name="notes" rows="2" placeholder="Member preference, version, etc."></textarea></label>
        <h3>Payment</h3>
        <div class="options">${methods.map((m, i) => `
          <label class="option"><input type="radio" name="pay" value="${m.id}" ${i === 0 ? "checked" : ""}>
            <span><b>${esc(m.name)}</b><small>${esc(m.desc)}</small></span></label>`).join("")}
        </div>
        <p class="form-error" id="form-error" role="alert"></p>
        <button class="btn btn-block" type="submit" id="place-btn">Place order</button>
        <p class="secure">🔒 Card payments are handled by PayPal. Your card details never touch this website.</p>
      </form>
      <div class="co-summary"><h3>Order summary</h3><div id="co-sum">${summaryHtml(0)}</div></div>
    </div>`;
  const form = $("#co-form");
  const sync = () => {
    const idx = +form.ship.value;
    $("#co-sum").innerHTML = summaryHtml(idx);
    $("#addr-wrap").hidden = SHOP.shipping[idx].price === 0;
    $("#place-btn").textContent = form.pay.value === PAYPAL ? "Continue to payment" : "Place order";
    $(".secure").hidden = form.pay.value !== PAYPAL;
  };
  form.addEventListener("change", sync);
  sync();
  form.onsubmit = (e) => { e.preventDefault(); placeOrder(form); };
  co.showModal();
}
$("#checkout-btn").onclick = openCheckout;

function newOrderId() {
  return "MH-" + Date.now().toString(36).slice(-5).toUpperCase() + Math.random().toString(36).slice(2, 4).toUpperCase();
}

function placeOrder(form) {
  const f = Object.fromEntries(new FormData(form));
  const ship = SHOP.shipping[+f.ship];
  const err = $("#form-error");
  const needAddr = ship.price > 0;
  if (!f.name.trim()) return (err.textContent = "Please enter your name.");
  if (!/^\S+@\S+\.\S+$/.test(f.email)) return (err.textContent = "Please enter a valid email.");
  if (needAddr && !f.address.trim()) return (err.textContent = "Please enter your shipping address.");
  err.textContent = "";

  const sub = subtotal();
  const shipCost = shippingCost(ship, sub);
  const order = {
    id: newOrderId(),
    date: new Date().toISOString(),
    customer: { name: f.name.trim(), email: f.email.trim(), instagram: f.instagram.trim(), phone: f.phone.trim(), address: needAddr ? f.address.trim() : "" },
    notes: f.notes.trim(),
    items: cartLines().map(({ p, qty }) => ({ name: p.name, group: p.group, status: p.status, price: p.price, qty })),
    shipping: { method: ship.name, cost: shipCost },
    subtotal: sub,
    total: sub + shipCost,
    currency: SHOP.currency,
  };

  if (f.pay === PAYPAL) {
    order.payment = { method: "Card / PayPal", status: "pending" };
    return showPayPal(order);
  }
  const m = SHOP.manualPayments[+f.pay.slice(1)];
  order.payment = { method: m.name, status: "awaiting payment" };
  sendOrderEmail(order);
  finishOrder(order, m);
}

function orderText(o) {
  return [
    `New order ${o.id}`,
    ...o.items.map((i) => `• ${i.qty} × ${i.name} (${i.group})${i.status === "pre-order" ? " [pre-order]" : ""}: ${money(i.price * i.qty)}`),
    `Shipping: ${o.shipping.method} (${o.shipping.cost ? money(o.shipping.cost) : "free"})`,
    `Total: ${money(o.total)} ${o.currency}`,
    `Payment: ${o.payment.method} (${o.payment.status})${o.payment.txn ? " · ref " + o.payment.txn : ""}`,
    `Name: ${o.customer.name}`,
    `Email: ${o.customer.email}`,
    o.customer.instagram && `Instagram: ${o.customer.instagram}`,
    o.customer.phone && `Phone: ${o.customer.phone}`,
    o.customer.address && `Address: ${o.customer.address}`,
    o.notes && `Notes: ${o.notes}`,
  ].filter(Boolean).join("\n");
}

async function sendOrderEmail(order) {
  if (!SHOP.orderEmailEndpoint) return;
  try {
    await fetch(SHOP.orderEmailEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ _subject: `Order ${order.id} (${order.payment.status})`, email: order.customer.email, order: orderText(order) }),
    });
  } catch { /* the customer still has the DM/copy option */ }
}

function showPayPal(order) {
  coBody.innerHTML = `
    <div class="co">
      <div class="co-form">
        <button class="link back" id="back">← Back to details</button>
        <p class="kicker">Payment · ${esc(order.id)}</p>
        <h2>Pay ${money(order.total)} ${esc(order.currency)}</h2>
        <p class="muted">Pay with your PayPal account or as a guest with a debit/credit card.</p>
        <div id="paypal-buttons" class="paypal-box"><p class="muted">Loading secure payment…</p></div>
      </div>
      <div class="co-summary"><h3>Order summary</h3>${summaryHtml(SHOP.shipping.findIndex((s) => s.name === order.shipping.method))}</div>
    </div>`;
  $("#back").onclick = openCheckout;
  loadPayPal().then((paypal) => {
    $("#paypal-buttons").innerHTML = "";
    const amt = (n) => ({ currency_code: SHOP.currency, value: Number(n).toFixed(2) });
    paypal.Buttons({
      style: { shape: "pill", layout: "vertical", label: "pay" },
      createOrder: (_, actions) => actions.order.create({
        purchase_units: [{
          reference_id: order.id,
          custom_id: order.id,
          description: `${SHOP.name} order ${order.id}`,
          amount: { ...amt(order.total), breakdown: { item_total: amt(order.subtotal), shipping: amt(order.shipping.cost) } },
          items: order.items.map((i) => ({ name: `${i.group} ${i.name}`.slice(0, 127), quantity: String(i.qty), unit_amount: amt(i.price) })),
        }],
      }),
      onApprove: async (_, actions) => {
        const res = await actions.order.capture();
        order.payment.status = "paid";
        order.payment.txn = res?.purchase_units?.[0]?.payments?.captures?.[0]?.id || res?.id || "";
        sendOrderEmail(order);
        finishOrder(order, null);
      },
      onError: () => toast("Payment didn't go through. Please try again or choose another method."),
    }).render("#paypal-buttons");
  }).catch(() => {
    $("#paypal-buttons").innerHTML = `<p class="form-error">Couldn't load PayPal. Check your connection, or go back and choose another payment method.</p>`;
  });
}

let paypalPromise;
function loadPayPal() {
  if (window.paypal) return Promise.resolve(window.paypal);
  paypalPromise ??= new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(SHOP.paypalClientId)}&currency=${encodeURIComponent(SHOP.currency)}&intent=capture`;
    s.onload = () => resolve(window.paypal);
    s.onerror = () => { paypalPromise = null; reject(); };
    document.head.appendChild(s);
  });
  return paypalPromise;
}

function finishOrder(order, manual) {
  cart = {};
  saveCart();
  renderCart();
  const text = orderText(order);
  coBody.innerHTML = `
    <div class="done">
      <div class="done-badge">${manual ? "✓" : "♥"}</div>
      <p class="kicker">Order ${esc(order.id)}</p>
      <h2>${manual ? "Order placed!" : "Payment received, thank you!"}</h2>
      ${manual
        ? `<p class="muted">Please pay <b>${money(order.total)} ${esc(order.currency)}</b> by ${esc(manual.name)} using the details below. Your order is confirmed once payment is received.</p>
           <pre class="paybox">${esc(manual.details)}</pre>`
        : `<p class="muted">We've received your payment of <b>${money(order.total)} ${esc(order.currency)}</b>. A receipt from PayPal is on its way to your email.</p>`}
      <p class="muted">Send us your order on Instagram so we can confirm it quickly${manual ? ", and attach your payment screenshot" : ""}.</p>
      <div class="done-actions">
        <button class="btn" id="copy-dm">Copy order &amp; DM us</button>
        <button class="btn btn-line" data-close-co>Done</button>
      </div>
      <details class="order-text"><summary>View order details</summary><pre>${esc(text)}</pre></details>
    </div>`;
  $("#copy-dm").onclick = async () => {
    try { await navigator.clipboard.writeText(text); toast("Order copied. Paste it in your DM!"); } catch { toast("Opening Instagram…"); }
    setTimeout(() => window.open(dmUrl, "_blank", "noopener"), 600);
  };
  $("[data-close-co]").onclick = () => co.close();
}

// ---------- toast ----------
let toastTimer;
function toast(t) {
  const el = $("#toast");
  (document.querySelector("dialog[open]") || document.body).appendChild(el); // stay above open modals
  el.textContent = t;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 3000);
}

renderGrid();
renderCart();
