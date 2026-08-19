export type Locale = "us" | "uk" | "global";

export const LOCALE_DATA: Record<Locale, {
  currency: string;
  symbol: string;
  engagementPrices: { starter: string; pro: string; mobile: string };
  heroSubheadline: string;
  ctaHeading: string;
  ctaSub: string;
}> = {
  us: {
    currency: "USD",
    symbol: "$",
    engagementPrices: { starter: "$999", pro: "$1,699", mobile: "$2,499" },
    heroSubheadline: "Replace scattered tools, repetitive work, and disconnected workflows with one system built around the way your business operates.",
    ctaHeading: "Imagine opening one dashboard instead of ten tabs.",
    ctaSub: "Your operations deserve better than scattered tools and manual reports. Book a free discovery call — we will map your operations and show you what is possible.",
  },
  uk: {
    currency: "GBP",
    symbol: "£",
    engagementPrices: { starter: "£799", pro: "£1,399", mobile: "£1,999" },
    heroSubheadline: "Replace scattered tools, repetitive work, and disconnected workflows with one system built around how your business operates.",
    ctaHeading: "Imagine opening one dashboard instead of ten tabs.",
    ctaSub: "Your operations deserve better than scattered tools and manual reports. Book a free discovery call — we'll map your operations and show you what's possible.",
  },
  global: {
    currency: "USD",
    symbol: "$",
    engagementPrices: { starter: "$999", pro: "$1,699", mobile: "$2,499" },
    heroSubheadline: "Replace scattered tools, repetitive work, and disconnected workflows with one system built around the way your business operates.",
    ctaHeading: "Imagine opening one dashboard instead of ten tabs.",
    ctaSub: "Your operations deserve better than scattered tools and manual reports. Book a free discovery call — we will map your operations and show you what is possible.",
  },
};
