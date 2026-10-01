// ===================================================================
//  YOUR PRODUCTS — edit this file to change what shows on the website.
// ===================================================================
//
//  Each product looks like this:
//
//    {
//      name: "Product name",
//      group: "Group name",            // used by the filter buttons
//      category: "Album",              // Album, Photocard, Lightstick, Merch...
//      price: 25,                      // number only, no currency sign
//      image: "images/my-photo.jpg",   // put the photo in the images/ folder
//      status: "in-stock",             // "in-stock", "pre-order" or "sold-out"
//      note: "Sealed, includes POB"    // optional short description
//    },
//
//  Leave image as "" to show a coloured placeholder card instead.
//  The items below are SAMPLES — replace them with your real stock.

const SHOP = {
  name: "MH K-pop Shop",
  instagram: "mh.kpop.sell",
  currency: "$",
};

const PRODUCTS = [
  {
    name: "Sample Album — Ver. A",
    group: "BTS",
    category: "Album",
    price: 22,
    image: "",
    status: "in-stock",
    note: "Sealed, random photocard inclusion",
  },
  {
    name: "Sample Mini Album",
    group: "Stray Kids",
    category: "Album",
    price: 20,
    image: "",
    status: "pre-order",
    note: "Pre-order closes soon",
  },
  {
    name: "Sample Photocard Set",
    group: "NewJeans",
    category: "Photocard",
    price: 8,
    image: "",
    status: "in-stock",
    note: "Official, sleeved & toploaded",
  },
  {
    name: "Sample Official Lightstick",
    group: "SEVENTEEN",
    category: "Lightstick",
    price: 55,
    image: "",
    status: "in-stock",
    note: "Brand new, unopened",
  },
  {
    name: "Sample Album — Digipack",
    group: "TWICE",
    category: "Album",
    price: 15,
    image: "",
    status: "sold-out",
    note: "",
  },
  {
    name: "Sample Keyring & Sticker Pack",
    group: "BLACKPINK",
    category: "Merch",
    price: 12,
    image: "",
    status: "in-stock",
    note: "Bundle deal",
  },
  {
    name: "Sample Lucky Draw Photocard",
    group: "aespa",
    category: "Photocard",
    price: 10,
    image: "",
    status: "in-stock",
    note: "Random member",
  },
  {
    name: "Sample Season's Greetings",
    group: "ENHYPEN",
    category: "Merch",
    price: 40,
    image: "",
    status: "pre-order",
    note: "Ships when released",
  },
];
