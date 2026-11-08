// https://makeup-api.herokuapp.com/api/v1/products.json
// https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation
export const NAV_ITEMS = [
  { label: "new", href: "/new" },
  { label: "clothing", href: "/clothing" },
  { label: "abayas", href: "/abayas" },
  { label: "beauty", href: "/beauty" },
  { label: "care", href: "/care" },
];

export const categories = [
  { id: 1, name: "Blush", value: "blush" },
  { id: 2, name: "Bronzer", value: "bronzer" },
  { id: 3, name: "Eyebrow", value: "eyebrow" },
  { id: 4, name: "Eyeliner", value: "eyeliner" },
  { id: 5, name: "Eyeshadow", value: "eyeshadow" },
  { id: 6, name: "Foundation", value: "foundation" },
  { id: 7, name: "Lip Liner", value: "lip_liner" },
  { id: 8, name: "Lipstick", value: "lipstick" },
  { id: 9, name: "Mascara", value: "mascara" },
  { id: 10, name: "Nail Polish", value: "nail_polish" },
];

export const allCategories = [
  {
    title: "جديد",
    slug: "new-arrivals",
    subCategories: [],
  },
  {
    title: "ملابس خروج",
    slug: "women-clothing",
    subCategories: [
      { title: "فساتين", slug: "dresses" },
      { title: "بلوزات", slug: "blouses" },
      { title: "بناطيل", slug: "pants" },
      { title: "جيبات", slug: "skirts" },
      { title: "أطقم", slug: "sets" },
      { title: "بيجامات", slug: "pajamas" },
    ],
  },
  {
    title: "ملابس داخلية",
    slug: "lingerie",
    subCategories: [
      { title: "حمالات صدر", slug: "bras" },
      { title: "ملابس داخلية", slug: "underwear" },
      { title: "أطقم لانجيري", slug: "lingerie-sets" },
      { title: "كورسيه", slug: "corsets" },
      { title: "بودي سوت", slug: "bodysuits" },
    ],
  },
  {
    title: "عبايات",
    slug: "abayas",
    subCategories: [
      { title: "عبايات خروج", slug: "outdoor-abayas" },
      { title: "عبايات استقبال", slug: "reception-abayas" },
      { title: "عبايات منزلية", slug: "home-abayas" },
      { title: "عبايات خليجي", slug: "gulf-abayas" },
    ],
  },
  {
    title: "جمال وعناية",
    slug: "beauty-care",
    subCategories: [
      { title: "مكياج", slug: "makeup" },
      { title: "عطور", slug: "perfumes" },
      { title: "العناية بالبشرة", slug: "skincare" },
      { title: "العناية بالشعر", slug: "haircare" },
      { title: "العناية بالجسم", slug: "bodycare" },
    ],
  },
  {
    title: "منقبات",
    slug: "niqabs",
    subCategories: [
      { title: "نقاب", slug: "niqab" },
      { title: "طرح", slug: "hijabs" },
      { title: "خُمُر", slug: "khimars" },
      { title: "إسدالات", slug: "islamic-prayer-wear" },
      { title: "أكمام", slug: "arm-sleeves" },
    ],
  },
];
