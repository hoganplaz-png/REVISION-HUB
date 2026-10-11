// ===================================================================
//  商店設定：想改網站內容，只需要修改這個檔案。
// ===================================================================

const SHOP = {
  name: "MH_KPOP",
  instagram: "mh.kpop.sell",
  currency: "HKD",   // 貨幣代碼
  symbol: "$",       // 價錢前面顯示的符號

  // ---------- 門市資料 ----------
  store: {
    address: ["新界西貢坑口常寧路厚德邨", "TKO Gateway 東翼一樓 E171 號舖", "別樹一格 A24 & B24 格位"],
    hours: "星期一至日 12:00 - 20:00",
    note: "查詢時請表示有意購買 xx，並不接受語音訊息 🙏🏻",
  },

  // 結帳時客人可選的交收方式。
  // 順豐到付：運費由客人在收件時付給順豐，所以網上不收運費。
  shipping: [
    { name: "順豐到付（運費到付）", price: 0 },
    { name: "門市自取（將軍澳）", price: 0, pickup: true },
  ],
  freeShippingOver: 0, // 不設免運費門檻

  // ---------- 付款方式 ----------
  // 1) PayPal：客人可用 PayPal 或信用卡／扣帳卡付款。
  //    把 PayPal「Client ID」貼在下面（教學見 README）。留空 "" 即不顯示。
  paypalClientId: "",

  // 2) 手動付款：落單後顯示你的付款資料。請改成你的真實資料，不用的可以刪除。
  manualPayments: [
    {
      name: "轉數快 FPS",
      details: "FPS 號碼：請填寫你的 FPS 號碼\n收款人：請填寫收款人姓名\n轉帳時請在備註寫上訂單編號。",
    },
    {
      name: "PayMe",
      details: "PayMe 號碼：請填寫你的 PayMe 號碼\n請在備註寫上訂單編號。",
    },
    {
      name: "門市付款（自取）",
      details: "請於將軍澳門市自取時付款。\n門市營業時間：星期一至日 12:00 - 20:00",
    },
  ],

  // 3) 可選：每張訂單都 email 給你。
  //    在 https://formspree.io 免費建立表單，把網址貼在這裡，
  //    例如 "https://formspree.io/f/abcdwxyz"。留空 "" 即關閉。
  orderEmailEndpoint: "",
};

// ===================================================================
//  你的商品
// ===================================================================
//  {
//    name: "商品名稱",
//    group: "組合名稱",
//    category: "專輯",
//    price: 109,                    // 只寫數字
//    image: "images/photo.jpg",     // 相片放在 images/ 資料夾（留空 "" 會顯示顏色卡）
//    status: "in-stock",            // "in-stock" 有貨、"pre-order" 預訂、"sold-out" 售罄
//    note: "獨家優惠價",             // 顯示在商品上的小標籤
//  },
//  本店「售完即止、不設預留」。

const PRODUCTS = [
  { name: "CORTIS Album (PB ver)",       group: "CORTIS",      category: "專輯", price: 109, image: "", status: "in-stock", note: "獨家優惠價" },
  { name: "CORTIS Album (WVS ver)",      group: "CORTIS",      category: "專輯", price: 69,  image: "", status: "in-stock", note: "獨家優惠價" },
  { name: "-CHOOM PB",                   group: "BABYMONSTER", category: "專輯", price: 109, image: "", status: "in-stock", note: "期間限定" },
  { name: "JEWEL VER",                   group: "BABYMONSTER", category: "專輯", price: 79,  image: "", status: "in-stock", note: "期間限定" },
  { name: "最新 PB 補貨",                 group: "TXT",         category: "專輯", price: 85,  image: "", status: "in-stock", note: "低過市價 $30" },
  { name: "THE ACTION PB",               group: "BOYNEXTDOOR", category: "專輯", price: 35,  image: "", status: "in-stock", note: "震撼價" },
  { name: "NEVER SAY NEVER PB",          group: "ZEROBASEONE", category: "專輯", price: 49,  image: "", status: "in-stock", note: "只限門市" },
  { name: "Album 首批 (PB ver)",          group: "BLACKPINK",   category: "專輯", price: 125, image: "", status: "in-stock", note: "送預售禮" },
];
