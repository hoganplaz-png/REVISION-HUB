# MH K-pop Shop website

A simple shop website for [@mh.kpop.sell](https://www.instagram.com/mh.kpop.sell/).
Customers browse products and tap **Order**. That copies an order message and opens an Instagram DM to the shop.

## Change your products

1. Put product photos in the `images/` folder (for example `images/album1.jpg`).
2. Open `products.js` and edit the `PRODUCTS` list: name, group, category, price, image, status (`in-stock`, `pre-order` or `sold-out`) and an optional note.
3. Change the currency sign or Instagram handle in `SHOP` at the top of the same file.

The products in the file now are **samples**. Replace them with your real stock.

## Put it online for free (GitHub Pages)

1. On GitHub, open this repository and go to **Settings → Pages**.
2. Under "Build and deployment", choose **Deploy from a branch**, pick `main` and the `/ (root)` folder, then save.
3. After a minute your site is live at `https://<your-username>.github.io/<repo-name>/`.
4. Add that link to your Instagram bio.

## Files

- `index.html`: page layout and text (hero, how to order, FAQ)
- `styles.css`: colours and design
- `script.js`: product grid, search, filters and the Order button
- `products.js`: **your products (edit this one)**
