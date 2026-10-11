# MH_KPOP 韓國 K-POP 產品專賣店 website

The site is in Traditional Chinese with HKD prices. Store address, opening hours, SF Express collect (順豐到付) and store pick-up are set in `products.js`. Replace the placeholder FPS and PayMe details with your real ones before going live.

Shop website for [@mh.kpop.sell](https://www.instagram.com/mh.kpop.sell/).
Customers browse products, add them to a cart and check out with **card/PayPal** or a **manual payment** (bank transfer etc.).
Every order gets an order number, and customers can send the full order to you by Instagram DM in one tap.

Everything you need to change is in **`products.js`**.

## 1. Add your products

1. Put product photos in the `images/` folder (for example `images/enhypen-pc.jpg`). Portrait photos (4:5) look best.
2. In `products.js`, edit the `PRODUCTS` list: name, group, category, price, image, status (`in-stock`, `pre-order` or `sold-out`) and a short note.

The products in the file now are **samples**. Replace them with your real stock.

## 2. Set up payments

### Card + PayPal (customers pay online)
Customers can pay with a PayPal account **or a debit/credit card, without a PayPal account**. Card details are handled by PayPal and never touch your site.

1. Make a free **PayPal Business** account at paypal.com, or upgrade your personal one.
2. Go to <https://developer.paypal.com>, log in, open **Apps & Credentials**, switch to **Live** and click **Create App**.
3. Copy the **Client ID**. Never share the "Secret".
4. Paste it into `products.js`: `paypalClientId: "AbC123..."`.
5. Set `currency` and `symbol` to your currency (e.g. `"HKD"` and `"HK$"`).

> **Tip:** test first with a **Sandbox** Client ID and PayPal's test accounts, then switch to the Live one.
>
> **Important:** this is a static website, so prices are sent from the customer's browser. Before shipping,
> always check in PayPal that the amount you received matches the order total. PayPal shows the order
> number (e.g. `MH-ABC1234`) on each payment.

### Manual payments (bank transfer, FPS, PayNow, etc.)
Edit `manualPayments` in `products.js` with your real payment details. After placing the order, the customer sees
those details and the amount to pay, then DMs you the order and a payment screenshot.

### Get orders by email (optional, recommended)
1. Create a free form at <https://formspree.io>.
2. Paste its URL into `orderEmailEndpoint`.
You'll get an email for every order, both manual orders and paid card/PayPal orders.

### Shipping
Edit the `shipping` options and `freeShippingOver` in `products.js`.

## 3. Put it online for free (GitHub Pages)

1. On GitHub, open this repository and go to **Settings → Pages**.
2. Choose **Deploy from a branch**, pick `main` and `/ (root)`, then save.
3. Your site will be live at `https://<your-username>.github.io/<repo-name>/`. Put that link in your Instagram bio.

PayPal needs the site to be on `https://`, which GitHub Pages provides.

## Files

- `products.js`: **shop settings, payments and products (edit this one)**
- `index.html`: page layout and text
- `styles.css`: design and colours (change `--accent` to change the highlight colour)
- `script.js`: shop, cart and checkout logic
