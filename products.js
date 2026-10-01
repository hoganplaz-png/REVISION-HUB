// ===================================================================
//  SHOP SETTINGS: edit this file to change your website.
// ===================================================================

const SHOP = {
  name: "MH KPOP",
  instagram: "mh.kpop.sell",
  currency: "USD",   // 3-letter code, e.g. USD, HKD, SGD, MYR, GBP, EUR
  symbol: "$",       // shown before prices

  // Shipping choices the customer picks at checkout.
  shipping: [
    { name: "Standard tracked shipping", price: 5 },
    { name: "Express shipping", price: 15 },
    { name: "Local pick-up / meet-up", price: 0 },
  ],
  // Orders at or above this amount ship free (set to 0 to turn it off).
  freeShippingOver: 80,

  // ---------- PAYMENTS ----------
  // 1) PayPal: lets customers pay with PayPal OR a debit/credit card.
  //    Paste your PayPal "Client ID" here (see README). Leave "" to hide it.
  paypalClientId: "",

  // 2) Manual payments: shown with your instructions after the order is placed.
  //    Remove any you don't use, or add your own (FPS, PayNow, Wise, Venmo...).
  manualPayments: [
    {
      name: "Bank transfer",
      details: "Bank: YOUR BANK\nAccount name: YOUR NAME\nAccount no: 000-000000-000\nUse your order number as the reference.",
    },
    {
      name: "PayPal Friends & Family / other",
      details: "Send payment to: your-email@example.com\nInclude your order number in the note.",
    },
  ],

  // 3) Optional: get every order emailed to you.
  //    Create a free form at https://formspree.io and paste its URL here,
  //    e.g. "https://formspree.io/f/abcdwxyz". Leave "" to turn off.
  orderEmailEndpoint: "",
};

// ===================================================================
//  YOUR PRODUCTS
// ===================================================================
//  {
//    name: "Product name",
//    group: "Group name",
//    category: "Album",            // Album, Photocard, Signed, Trading Card, Merch...
//    price: 25,                    // number only
//    image: "images/my-photo.jpg", // put the photo in the images/ folder ("" = placeholder)
//    status: "in-stock",           // "in-stock", "pre-order" or "sold-out"
//    note: "Short description",
//  },
//  The items below are SAMPLES. Replace them with your real stock.

const PRODUCTS = [
  { name: "DARK BLOOD Signed Postcard Set", group: "ENHYPEN", category: "Signed", price: 65, image: "", status: "in-stock", note: "Signed postcards (NI-KI, JAKE, SUNOO). Official, with album." },
  { name: "FATE World Tour Trading Cards", group: "ENHYPEN", category: "Trading Card", price: 12, image: "", status: "in-stock", note: "Official tour MD trading cards. Random pull." },
  { name: "MANIFESTO Tour MD Photocards", group: "ENHYPEN", category: "Photocard", price: 9, image: "", status: "in-stock", note: "Official tour photocards, sleeved and toploaded." },
  { name: "Baekhyun Reorder Photocard", group: "EXO", category: "Photocard", price: 14, image: "", status: "in-stock", note: "Official reorder photocard." },
  { name: "Latest Mini Album (Random Ver.)", group: "TXT", category: "Album", price: 22, image: "", status: "pre-order", note: "Sealed. Ships when released." },
  { name: "Beomgyu Folded Poster", group: "TXT", category: "Merch", price: 10, image: "", status: "in-stock", note: "Official poster, shipped in a tube." },
  { name: "Sunghoon Selfie Photocard", group: "ENHYPEN", category: "Photocard", price: 18, image: "", status: "sold-out", note: "Official album inclusion." },
  { name: "Season's Greetings Package", group: "ENHYPEN", category: "Merch", price: 45, image: "", status: "pre-order", note: "Full package with pre-order benefit." },
];
