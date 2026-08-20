export const GULF_LOCALES = ["sa", "ae", "qa", "kw", "bh", "om"] as const;
export const EN_LOCALES = ["us", "uk", "global"] as const;
export type Locale = (typeof GULF_LOCALES)[number] | (typeof EN_LOCALES)[number];

export function isRTL(locale: Locale): boolean {
  return (GULF_LOCALES as readonly string[]).includes(locale);
}

export function langCode(locale: Locale): string {
  return isRTL(locale) ? "ar" : "en";
}

const A = {
  heroHeading: "أنظمة أعمال داخلية مخصصة للشركات الخدمية المتنامية",
  heroSubheadline: "استبدل الأدوات المتفرقة والعمل المتكرر والعمليات غير المتصلة بنظام واحد مبني حول طريقة عمل شركتك.",
  ctaHeading: "تخيل فتح لوحة تحكم واحدة بدلاً من عشر تبويبات.",
  ctaSub: "عملياتك تستحق أفضل من الأدوات المتفرقة والتقارير اليدوية. احجز مكالمة اكتشاف مجانية — سنقوم بتحليل عملياتك ونريك ما هو ممكن.",
  ctaButton: "احجز مكالمة اكتشاف",
};

type LocaleData = {
  currency: string;
  symbol: string;
  engagementPrices: { starter: string; pro: string; mobile: string };
  heroSubheadline: string;
  ctaHeading: string;
  ctaSub: string;
  ctaButton: string;
  dir: "ltr" | "rtl";
  lang: string;
};

export const LOCALE_DATA: Record<Locale, LocaleData> = {
  // ── English locales ──
  us: {
    currency: "USD", symbol: "$",
    engagementPrices: { starter: "$999", pro: "$1,699", mobile: "$2,499" },
    heroSubheadline: "Replace scattered tools, repetitive work, and disconnected workflows with one system built around the way your business operates.",
    ctaHeading: "Imagine opening one dashboard instead of ten tabs.",
    ctaSub: "Your operations deserve better than scattered tools and manual reports. Book a free discovery call — we will map your operations and show you what is possible.",
    ctaButton: "Book Discovery Call",
    dir: "ltr", lang: "en",
  },
  uk: {
    currency: "GBP", symbol: "£",
    engagementPrices: { starter: "£799", pro: "£1,399", mobile: "£1,999" },
    heroSubheadline: "Replace scattered tools, repetitive work, and disconnected workflows with one system built around how your business operates.",
    ctaHeading: "Imagine opening one dashboard instead of ten tabs.",
    ctaSub: "Your operations deserve better than scattered tools and manual reports. Book a free discovery call — we'll map your operations and show you what's possible.",
    ctaButton: "Book Discovery Call",
    dir: "ltr", lang: "en",
  },
  global: {
    currency: "USD", symbol: "$",
    engagementPrices: { starter: "$999", pro: "$1,699", mobile: "$2,499" },
    heroSubheadline: "Replace scattered tools, repetitive work, and disconnected workflows with one system built around the way your business operates.",
    ctaHeading: "Imagine opening one dashboard instead of ten tabs.",
    ctaSub: "Your operations deserve better than scattered tools and manual reports. Book a free discovery call — we will map your operations and show you what is possible.",
    ctaButton: "Book Discovery Call",
    dir: "ltr", lang: "en",
  },

  // ── Gulf Arabic locales ──
  sa: {
    currency: "SAR", symbol: "ر.س",
    engagementPrices: { starter: "ر.س ٣٬٧٤٩", pro: "ر.س ٦٬٣٧٤", mobile: "ر.س ٩٬٣٧٤" },
    heroSubheadline: A.heroSubheadline,
    ctaHeading: A.ctaHeading,
    ctaSub: A.ctaSub,
    ctaButton: A.ctaButton,
    dir: "rtl", lang: "ar-SA",
  },
  ae: {
    currency: "AED", symbol: "د.إ",
    engagementPrices: { starter: "د.إ ٣٬٦٦٩", pro: "د.إ ٦٬٢٣٩", mobile: "د.إ ٩٬١٧٤" },
    heroSubheadline: A.heroSubheadline,
    ctaHeading: A.ctaHeading,
    ctaSub: A.ctaSub,
    ctaButton: A.ctaButton,
    dir: "rtl", lang: "ar-AE",
  },
  qa: {
    currency: "QAR", symbol: "ر.ق",
    engagementPrices: { starter: "ر.ق ٣٬٦٣٩", pro: "ر.ق ٦٬١٨٩", mobile: "ر.ق ٩٬٠٩٩" },
    heroSubheadline: A.heroSubheadline,
    ctaHeading: A.ctaHeading,
    ctaSub: A.ctaSub,
    ctaButton: A.ctaButton,
    dir: "rtl", lang: "ar-QA",
  },
  kw: {
    currency: "KWD", symbol: "د.ك",
    engagementPrices: { starter: "د.ك ٣٠٩", pro: "د.ك ٥٢٤", mobile: "د.ك ٧٧٤" },
    heroSubheadline: A.heroSubheadline,
    ctaHeading: A.ctaHeading,
    ctaSub: A.ctaSub,
    ctaButton: A.ctaButton,
    dir: "rtl", lang: "ar-KW",
  },
  bh: {
    currency: "BHD", symbol: "د.ب",
    engagementPrices: { starter: "د.ب ٣٧٧", pro: "د.ب ٦٤٠", mobile: "د.ب ٩٤٢" },
    heroSubheadline: A.heroSubheadline,
    ctaHeading: A.ctaHeading,
    ctaSub: A.ctaSub,
    ctaButton: A.ctaButton,
    dir: "rtl", lang: "ar-BH",
  },
  om: {
    currency: "OMR", symbol: "ر.ع",
    engagementPrices: { starter: "ر.ع ٣٨٥", pro: "ر.ع ٦٥٤", mobile: "ر.ع ٩٦٢" },
    heroSubheadline: A.heroSubheadline,
    ctaHeading: A.ctaHeading,
    ctaSub: A.ctaSub,
    ctaButton: A.ctaButton,
    dir: "rtl", lang: "ar-OM",
  },
};
