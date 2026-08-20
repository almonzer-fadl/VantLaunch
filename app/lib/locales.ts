export const GULF_LOCALES = ["sa", "ae", "qa", "kw", "bh", "om"] as const;
export type Locale =
  | (typeof GULF_LOCALES)[number]
  | "us" | "uk" | "ca" | "au" | "nz" | "sg"
  | "ie" | "de" | "nl" | "se" | "no" | "dk"
  | "global";

export function isRTL(locale: Locale): boolean {
  return (GULF_LOCALES as readonly string[]).includes(locale);
}

type LocaleData = {
  currency: string;
  engagementPrices: { starter: string; pro: string; mobile: string };
  heroSubheadline: string;
  ctaHeading: string;
  ctaSub: string;
  ctaButton: string;
  dir: "ltr" | "rtl";
  lang: string;
};

const A = {
  heroSubheadline: "استبدل الأدوات المتفرقة والعمل المتكرر والعمليات غير المتصلة بنظام واحد مبني حول طريقة عمل شركتك.",
  ctaHeading: "تخيل فتح لوحة تحكم واحدة بدلاً من عشر تبويبات.",
  ctaSub: "عملياتك تستحق أفضل من الأدوات المتفرقة والتقارير اليدوية. احجز مكالمة اكتشاف مجانية — نقوم بتحليل عملياتك ونريك ما هو ممكن.",
  ctaButton: "احجز مكالمة اكتشاف",
};

const EN = {
  heroSubheadline: "Replace scattered tools, repetitive work, and disconnected workflows with one system built around the way your business operates.",
  ctaHeading: "Imagine opening one dashboard instead of ten tabs.",
  ctaSub: "Your operations deserve better than scattered tools and manual reports. Book a free discovery call — we will map your operations and show you what is possible.",
  ctaButton: "Book Discovery Call",
};

export const LOCALE_DATA: Record<Locale, LocaleData> = {
  // ── US ──
  us: {
    currency: "USD",
    engagementPrices: { starter: "$999", pro: "$1,699", mobile: "$2,499" },
    heroSubheadline: EN.heroSubheadline,
    ctaHeading: EN.ctaHeading,
    ctaSub: EN.ctaSub,
    ctaButton: EN.ctaButton,
    dir: "ltr", lang: "en-US",
  },

  // ── UK ──
  uk: {
    currency: "GBP",
    engagementPrices: { starter: "£799", pro: "£1,399", mobile: "£1,999" },
    heroSubheadline: "Built for UK agencies, consultancies and professional service firms. Replace scattered tools with one system built around your operations.",
    ctaHeading: EN.ctaHeading,
    ctaSub: EN.ctaSub,
    ctaButton: EN.ctaButton,
    dir: "ltr", lang: "en-GB",
  },

  // ── Canada ──
  ca: {
    currency: "CAD",
    engagementPrices: { starter: "1,349 CAD", pro: "2,299 CAD", mobile: "3,399 CAD" },
    heroSubheadline: "Helping Canadian service businesses replace manual operations with one connected system built around the way you work.",
    ctaHeading: EN.ctaHeading,
    ctaSub: EN.ctaSub,
    ctaButton: EN.ctaButton,
    dir: "ltr", lang: "en-CA",
  },

  // ── Australia ──
  au: {
    currency: "AUD",
    engagementPrices: { starter: "1,549 AUD", pro: "2,649 AUD", mobile: "3,899 AUD" },
    heroSubheadline: "Built for Australian agencies, consultancies and growing service businesses. One connected system around your operations.",
    ctaHeading: EN.ctaHeading,
    ctaSub: EN.ctaSub,
    ctaButton: EN.ctaButton,
    dir: "ltr", lang: "en-AU",
  },

  // ── New Zealand ──
  nz: {
    currency: "NZD",
    engagementPrices: { starter: "1,699 NZD", pro: "2,899 NZD", mobile: "4,299 NZD" },
    heroSubheadline: "Built for New Zealand service businesses ready to replace scattered tools with one connected system.",
    ctaHeading: EN.ctaHeading,
    ctaSub: EN.ctaSub,
    ctaButton: EN.ctaButton,
    dir: "ltr", lang: "en-NZ",
  },

  // ── Singapore ──
  sg: {
    currency: "SGD",
    engagementPrices: { starter: "1,349 SGD", pro: "2,299 SGD", mobile: "3,399 SGD" },
    heroSubheadline: "Helping Singapore businesses automate operations and centralise workflows into one connected platform.",
    ctaHeading: EN.ctaHeading,
    ctaSub: EN.ctaSub,
    ctaButton: EN.ctaButton,
    dir: "ltr", lang: "en-SG",
  },

  // ── Ireland ──
  ie: {
    currency: "EUR",
    engagementPrices: { starter: "899 €", pro: "1,499 €", mobile: "2,199 €" },
    heroSubheadline: "Built for Irish agencies, consultancies and professional service firms ready to replace disconnected tools.",
    ctaHeading: EN.ctaHeading,
    ctaSub: EN.ctaSub,
    ctaButton: EN.ctaButton,
    dir: "ltr", lang: "en-IE",
  },

  // ── Germany ──
  de: {
    currency: "EUR",
    engagementPrices: { starter: "899 €", pro: "1,499 €", mobile: "2,199 €" },
    heroSubheadline: "Helping German businesses replace disconnected software with custom operational systems built around their workflow.",
    ctaHeading: EN.ctaHeading,
    ctaSub: EN.ctaSub,
    ctaButton: EN.ctaButton,
    dir: "ltr", lang: "de-DE",
  },

  // ── Netherlands ──
  nl: {
    currency: "EUR",
    engagementPrices: { starter: "899 €", pro: "1,499 €", mobile: "2,199 €" },
    heroSubheadline: "Built for Dutch agencies, consultancies and growing service businesses. Replace scattered tools with one system.",
    ctaHeading: EN.ctaHeading,
    ctaSub: EN.ctaSub,
    ctaButton: EN.ctaButton,
    dir: "ltr", lang: "nl-NL",
  },

  // ── Sweden ──
  se: {
    currency: "SEK",
    engagementPrices: { starter: "9,900 SEK", pro: "16,900 SEK", mobile: "24,900 SEK" },
    heroSubheadline: "Helping Swedish service businesses replace manual operations with one connected system built around their workflow.",
    ctaHeading: EN.ctaHeading,
    ctaSub: EN.ctaSub,
    ctaButton: EN.ctaButton,
    dir: "ltr", lang: "sv-SE",
  },

  // ── Norway ──
  no: {
    currency: "NOK",
    engagementPrices: { starter: "10,900 NOK", pro: "18,500 NOK", mobile: "27,500 NOK" },
    heroSubheadline: "Helping Norwegian service businesses replace scattered tools with custom internal business systems.",
    ctaHeading: EN.ctaHeading,
    ctaSub: EN.ctaSub,
    ctaButton: EN.ctaButton,
    dir: "ltr", lang: "nb-NO",
  },

  // ── Denmark ──
  dk: {
    currency: "DKK",
    engagementPrices: { starter: "6,900 DKK", pro: "11,900 DKK", mobile: "17,500 DKK" },
    heroSubheadline: "Helping Danish service businesses replace disconnected software with one connected operational platform.",
    ctaHeading: EN.ctaHeading,
    ctaSub: EN.ctaSub,
    ctaButton: EN.ctaButton,
    dir: "ltr", lang: "da-DK",
  },

  // ── Saudi Arabia ──
  sa: {
    currency: "SAR",
    engagementPrices: { starter: "3,950 SAR", pro: "6,450 SAR", mobile: "9,450 SAR" },
    heroSubheadline: "نساعد الشركات السعودية على تبسيط العمليات من خلال برمجيات مخصصة مبنية حول سير عملها.",
    ctaHeading: A.ctaHeading,
    ctaSub: A.ctaSub,
    ctaButton: A.ctaButton,
    dir: "rtl", lang: "ar-SA",
  },

  // ── UAE ──
  ae: {
    currency: "AED",
    engagementPrices: { starter: "3,850 AED", pro: "6,450 AED", mobile: "9,450 AED" },
    heroSubheadline: "نساعد شركات الإمارات على مركزة العمليات في منصة واحدة مخصصة.",
    ctaHeading: A.ctaHeading,
    ctaSub: A.ctaSub,
    ctaButton: A.ctaButton,
    dir: "rtl", lang: "ar-AE",
  },

  // ── Qatar ──
  qa: {
    currency: "QAR",
    engagementPrices: { starter: "3,650 QAR", pro: "6,250 QAR", mobile: "9,150 QAR" },
    heroSubheadline: "نساعد الشركات القطرية على استبدال الأدوات المتفرقة بأنظمة تشغيلية مخصصة.",
    ctaHeading: A.ctaHeading,
    ctaSub: A.ctaSub,
    ctaButton: A.ctaButton,
    dir: "rtl", lang: "ar-QA",
  },

  // ── Kuwait ──
  kw: {
    currency: "KWD",
    engagementPrices: { starter: "305 KWD", pro: "520 KWD", mobile: "760 KWD" },
    heroSubheadline: "نساعد الشركات الكويتية على أتمتة العمليات ومركزة البيانات في نظام واحد.",
    ctaHeading: A.ctaHeading,
    ctaSub: A.ctaSub,
    ctaButton: A.ctaButton,
    dir: "rtl", lang: "ar-KW",
  },

  // ── Bahrain ──
  bh: {
    currency: "BHD",
    engagementPrices: { starter: "375 BHD", pro: "635 BHD", mobile: "935 BHD" },
    heroSubheadline: "نساعد الشركات البحرينية على استبدال العمليات اليدوية بأنظمة رقمية مخصصة.",
    ctaHeading: A.ctaHeading,
    ctaSub: A.ctaSub,
    ctaButton: A.ctaButton,
    dir: "rtl", lang: "ar-BH",
  },

  // ── Oman ──
  om: {
    currency: "OMR",
    engagementPrices: { starter: "390 OMR", pro: "650 OMR", mobile: "950 OMR" },
    heroSubheadline: "نساعد الشركات العمانية على بناء أنظمة داخلية مخصصة تدعم نموها التشغيلي.",
    ctaHeading: A.ctaHeading,
    ctaSub: A.ctaSub,
    ctaButton: A.ctaButton,
    dir: "rtl", lang: "ar-OM",
  },

  // ── Global fallback ──
  global: {
    currency: "USD",
    engagementPrices: { starter: "$999", pro: "$1,699", mobile: "$2,499" },
    heroSubheadline: EN.heroSubheadline,
    ctaHeading: EN.ctaHeading,
    ctaSub: EN.ctaSub,
    ctaButton: EN.ctaButton,
    dir: "ltr", lang: "en",
  },
};
