export type Product = {
  id: string;
  slug: string;
  name: string;
  hebrew: string;
  description: string;
  longDescription?: string;
  ritual?: string;
  category: string;
  occasion: string[];
  status: "commission" | "drop";
  price: string;
  priceUSD?: string;
  size: "sm" | "md" | "lg";
  collection: string;
  /** First image is the hero (used as gallery card thumbnail). Remaining images are additional views shown on the detail page. */
  images: string[];
};

export const products: Product[] = [
  {
    id: "1",
    slug: "natla",
    name: "Natla",
    hebrew: "נטלה",
    description: "Two-handled ritual handwashing vessel with personalized Hebrew engraving",
    longDescription:
      "The natla is the vessel used for netilat yadayim — the ritual washing of hands before eating bread. This handmade ceramic version features two handles for the traditional pouring method, with space for personalized Hebrew engraving of your family name or a meaningful word.",
    ritual:
      "Netilat yadayim — the ritual washing of hands before bread — deserves a vessel as intentional as the blessing itself.",
    category: "vessels",
    occasion: ["shabbat", "everyday"],
    status: "commission",
    price: "₪200",
    priceUSD: "$56",
    size: "lg",
    collection: "first-light",
    images: ["/images/products/natla/hero.jpeg"],
  },
  {
    id: "2",
    slug: "kli-sheni",
    name: "Kli Sheni",
    hebrew: "כלי שני",
    description: "The Shabbat hot water vessel that didn't exist — until now",
    longDescription:
      "The kli sheni is the vessel you pour hot water into before making tea or coffee on Shabbat — a halachic requirement that has never had a dedicated, beautiful vessel. Until now. Handmade ceramic with a comfortable handle and spout designed for easy pouring.",
    ritual:
      "In Jewish law, hot water must be transferred to a second vessel before making tea or coffee on Shabbat. The kli sheni makes this beautiful.",
    category: "vessels",
    occasion: ["shabbat"],
    status: "commission",
    price: "₪175",
    priceUSD: "$47",
    size: "md",
    collection: "first-light",
    images: ["/images/products/kli_sheni/hero.jpeg"],
  },
  {
    id: "3",
    slug: "servingware",
    name: "Servingware",
    hebrew: "כלי הגשה",
    description: "Handmade serving tray for your Friday night table",
    longDescription:
      "A generously sized ceramic tray designed to anchor your Shabbat table. Perfect for challah, kiddush cups, or as a centerpiece. Each tray can be personalized with Hebrew engraving.",
    ritual:
      "The Shabbat table is where family gathers every week. This tray is made to be the foundation of that gathering.",
    category: "servingware",
    occasion: ["shabbat"],
    status: "commission",
    price: "From ₪200",
    priceUSD: "From $54",
    size: "md",
    collection: "first-light",
    images: [
      "/images/products/shabbat_tray/14-round-engraved.jpeg",
      "/images/products/shabbat_tray/1-hero.jpeg",
      "/images/products/shabbat_tray/2-lifestyle.jpeg",
      "/images/products/shabbat_tray/3-rect-detail.jpeg",
      "/images/products/shabbat_tray/4-rect-detail-alt.jpeg",
      "/images/products/shabbat_tray/5-rect-styled.jpeg",
      "/images/products/shabbat_tray/6-square-side.jpeg",
      "/images/products/shabbat_tray/7-square-side-alt.jpeg",
      "/images/products/shabbat_tray/8-square-top.jpeg",
      "/images/products/shabbat_tray/9-square-top-alt.jpeg",
      "/images/products/shabbat_tray/10-oval-styled.jpeg",
      "/images/products/shabbat_tray/11-oval-tealights.jpeg",
      "/images/products/shabbat_tray/12-oval-top.jpeg",
      "/images/products/shabbat_tray/13-oval-top-alt.jpeg",
      "/images/products/shabbat_tray/15-round-dotted.jpeg",
      "/images/products/shabbat_tray/16-round-dotted-alt.jpeg",
      "/images/products/shabbat_tray/17-round-tealights.jpeg",
      "/images/products/shabbat_tray/18-round-tealights-top.jpeg",
      "/images/products/shabbat_tray/19-scalloped.jpeg",
      "/images/products/shabbat_tray/20-scalloped-alt.jpeg",
    ],
  },
  {
    id: "4",
    slug: "challah-basket",
    name: "Challah Basket",
    hebrew: "סלסלת חלה",
    description: "Ceramic basket shaped to cradle your weekly challah",
    longDescription:
      "A wide, shallow ceramic basket with gently curved walls, designed to hold and present your weekly challah. The organic form complements the bread's braided shape.",
    category: "baskets",
    occasion: ["shabbat"],
    status: "commission",
    price: "₪300",
    priceUSD: "$84",
    size: "md",
    collection: "first-light",
    images: [
      "/images/products/challah_basket/1-hero.jpeg",
      "/images/products/challah_basket/2-lifestyle.jpeg",
      "/images/products/challah_basket/3-detail.jpeg",
    ],
  },
  {
    id: "5",
    slug: "kiddush-cup",
    name: "Kiddush Cup",
    hebrew: "כוס קידוש",
    description: "Handcrafted ceramic kiddush cup with teal glaze",
    longDescription:
      "A kiddush cup that feels as sacred as the blessing itself. Glazed in Clay Metuka's signature teal over warm clay, with a comfortable grip and stable base.",
    ritual:
      "Kiddush — the sanctification of Shabbat over wine — is the first act of the Friday night table. This cup is made for that moment.",
    category: "cups",
    occasion: ["shabbat"],
    status: "drop",
    price: "₪120",
    priceUSD: "$34",
    size: "sm",
    collection: "first-light",
    images: [],
  },
  {
    id: "6",
    slug: "tea-light-pair",
    name: "Tea Light Holders",
    hebrew: "מחזיקי נרות",
    description: "Pair of ceramic tea light holders for Shabbat candles",
    longDescription:
      "A matched pair of ceramic tea light holders with subtle texture and warmth. Designed to hold standard tea lights for Shabbat candle lighting.",
    category: "candles",
    occasion: ["shabbat"],
    status: "commission",
    price: "₪100",
    priceUSD: "$27",
    size: "sm",
    collection: "first-light",
    images: [
      "/images/products/tea_light_pair/2-lifestyle.jpeg",
      "/images/products/tea_light_pair/1-hero.jpeg",
      "/images/products/tea_light_pair/3-styled.jpeg",
      "/images/products/tea_light_pair/4-detail.jpeg",
    ],
  },
  {
    id: "7",
    slug: "ceramic-mug",
    name: "Ceramic Mug",
    hebrew: "ספל",
    description: "Handmade mug with carved botanical motifs and teal glaze",
    longDescription:
      "A generous, comfortable mug featuring hand-carved botanical motifs under Clay Metuka's signature teal glaze. The angular handle is designed for a secure, natural grip.",
    category: "mugs",
    occasion: ["everyday"],
    status: "drop",
    price: "₪150",
    priceUSD: "$41",
    size: "md",
    collection: "everyday",
    images: ["/images/products/mug/hero.jpeg"],
  },
  {
    id: "9",
    slug: "espresso-cup",
    name: "Espresso Cup",
    hebrew: "כוס אספרסו",
    description:
      "A small, sturdy espresso cup with a hamsa stamp — handmade for your morning ritual.",
    ritual:
      "Some rituals are ancient. Some are deeply personal. The first coffee of the morning deserves a vessel shaped by hand.",
    category: "cups",
    occasion: ["everyday"],
    status: "drop",
    price: "₪70",
    size: "sm",
    collection: "everyday",
    images: [
      "/images/products/espresso_cup/hero.jpeg",
      "/images/products/espresso_cup/lifestyle.jpeg",
    ],
  },
  {
    id: "10",
    slug: "kiddush-divider",
    name: "Kiddush Divider",
    hebrew: "מחלק קידוש",
    description:
      "A spouted ceremonial pourer for distributing kiddush wine — clean, modular, and built for any size table.",
    ritual:
      "Kiddush is meant to be shared. But the traditional fountain pourer is awkward to clean, fragile, and rarely scales to the size of your table. The מחלק קידוש solves what no one else has: a single beautiful vessel that pours kiddush wine cleanly into every cup, whether you're three at the table or thirty. Shaped to honor the ritual without complicating it.\n\nHalachically, wine poured from a kiddush cup becomes pagum — diminished — and unfit for others to fulfill their obligation. The מחלק קידוש holds the wine before kiddush, letting you pour fresh, full-strength wine into each guest's cup after the bracha. Beautiful, functional, and quietly solving a problem most Shabbat tables have just learned to live with.",
    category: "vessels",
    occasion: ["shabbat", "ritual"],
    status: "drop",
    price: "₪150",
    priceUSD: "$41",
    size: "md",
    collection: "first-light",
    images: [
      "/images/products/wine_pourer/hero.jpeg",
      "/images/products/wine_pourer/lifestyle.jpeg",
      "/images/products/wine_pourer/3-styled.jpeg",
    ],
  },
];

export const categories = [
  "all",
  "vessels",
  "servingware",
  "cups",
  "mugs",
  "candles",
  "baskets",
] as const;

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
