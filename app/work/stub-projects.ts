export type WorkStubConfig = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  imageSrc: string;
  imageAlt: string;
  badges: string[];
  /** Short blurb for homepage venture cards */
  cardSummary: string;
  /** Hero subline on the stub case page */
  lede: string;
  /** Extra context below the lede */
  detail: string;
  bullets: string[];
  /** Product-facing capability chips (no speculative stack claims) */
  capabilities: string[];
  emailSubject: string;
  figureCaption: string;
  /** Tailwind classes for the homepage venture card image */
  previewImgClass: string;
};

export const WORK_STUBS = {
  araba: {
    slug: "araba",
    title: "Araba",
    metaTitle: "Araba | Wheelchair Assistance Platform — VantLaunch",
    metaDescription:
      "A multi-platform assistance service for airports and hospitals: Laravel backend, Flutter mobile apps, real-time tracking, and secure payments.",
    imageSrc: "/portfolio/araba.png",
    imageAlt: "Araba product — mobile experience with maps, requests, and brand-forward UI",
    badges: ["Multi-platform", "Flutter · Laravel"],
    cardSummary:
      "Wheelchair assistance platform for airports and hospitals. Instant booking, live tracking, and secure payments.",
    lede: "A multi-platform assistance service connecting users with wheelchair helpers at airports, hospitals, and malls.",
    detail:
      "Built with a Laravel backend and Flutter mobile apps, Araba features a real-time tracking system and secure payment gateways (Mada, Apple Pay) to ensure a safe and transparent experience for people with limited mobility. The app is fully bilingual (Arabic/English) and optimized for complex venues.",
    bullets: [
      "Instant booking with real-time assistant tracking on live maps",
      "Secure in-app payments via Mada, Apple Pay, and credit cards",
      "Professional, trained assistance team available 24/7",
      "Precise mapping and location services for airports and medical centers",
      "Bilingual support (Arabic/English) across all customer and assistant surfaces",
    ],
    capabilities: [
      "Laravel API",
      "Flutter Mobile",
      "Real-time Tracking",
      "Payment Integration",
      "Bilingual UX",
    ],
    emailSubject: "Araba%20project",
    figureCaption:
      "Araba — mobile-first flows with map and request context, backed by Laravel and realtime channels.",
    previewImgClass:
      "object-contain object-center opacity-50 sm:opacity-[0.48]",
  },
  gari: {
    slug: "gari",
    title: "Gari",
    metaTitle: "Gari | Saudi Auto Service Marketplace — VantLaunch",
    metaDescription:
      "Fixing the $8B auto service market with a trust-based marketplace: Hono, Bun, Prisma, and native iOS apps with a unique two-code authorization system.",
    imageSrc: "/portfolio/teramotors-mobile.jpg",
    imageAlt: "Gari customer app — service categories, vehicle hub, and search",
    badges: ["Automotive", "SwiftUI · Hono"],
    cardSummary:
      "Fixing the $8B auto service market with a trust-based marketplace and unique two-code authorization system.",
    lede: "A digital-first auto service marketplace that brings transparency and trust to every repair in the Saudi market.",
    detail:
      "Gari eliminates 'trust me bro' repairs with a unique two-code system: Drop-off and Collection codes that ensure workshops only access and release vehicles upon authorization and payment. Built with a high-performance stack (Hono, Bun, Prisma) for massive scale and reliability.",
    bullets: [
      "Two-code authorization system for secure vehicle access and release",
      "Full digital inspection (DVI) with photo and video evidence trails",
      "Transparent quote approval and integrated Mada/Apple Pay payments via Moyasar",
      "Role-aware native apps for both customers and workshops built with SwiftUI",
      "High-performance backend built with Hono and Bun with 300+ passing tests",
    ],
    capabilities: [
      "Hono · Bun · Prisma",
      "SwiftUI Native",
      "Moyasar Payments",
      "Real-time Socket.io",
      "Two-Code Authorization",
    ],
    emailSubject: "Gari%20project",
    figureCaption:
      "Gari — home, categories, vehicle hub, and search tuned for transparent automotive service journeys.",
    previewImgClass:
      "object-contain object-center opacity-42 transition-transform duration-700 group-hover:scale-[1.03]",
  },
  "aqua-marwa": {
    slug: "aqua-marwa",
    title: "Aqua Marwa",
    metaTitle: "Aqua Marwa | Water Delivery Platform — VantLaunch",
    metaDescription:
      "Production-ready water delivery platform built with Expo and React Native, streamlining household replenishment with real-time tracking.",
    imageSrc: "/portfolio/water-delivery-app.jpeg",
    imageAlt: "Aqua Marwa — storefront, promos, and product shortcuts",
    badges: ["On-demand", "Expo · React Native"],
    cardSummary:
      "Production-ready water delivery platform built with Expo and React Native, streamlining household replenishment.",
    lede: "A dedicated mobile experience for water delivery, featuring real-time tracking and seamless order management.",
    detail:
      "Built with TypeScript, Expo, and NativeWind, Aqua Marwa provides a smooth ordering lifecycle from catalog browsing to real-time delivery status. It includes full profile management and push notification support for order milestones.",
    bullets: [
      "Mobile-first ordering with delivery slot scheduling and catalog browsing",
      "Real-time order tracking and status updates from placement to doorstep",
      "Integrated profile and address management for recurring orders",
      "Push notification support for order milestones and promotions",
      "Consistent UI/UX across mobile surfaces built with NativeWind",
    ],
    capabilities: [
      "Expo · React Native",
      "TypeScript",
      "NativeWind UI",
      "Orders & Tracking",
      "Push Notifications",
    ],
    emailSubject: "Aqua%20Marwa",
    figureCaption:
      "Aqua Marwa — promo surfaces, product shortcuts, and catalog tuned for repeat orders.",
    previewImgClass:
      "object-contain object-top opacity-45 transition-transform duration-700 group-hover:scale-[1.03]",
  },
} as const satisfies Record<string, WorkStubConfig>;

export type WorkStubSlug = keyof typeof WORK_STUBS;

/** Homepage venture cards — order and data from WORK_STUBS */
export const HOME_PREVIEW_STUB_ORDER = [
  "araba",
  "gari",
  "aqua-marwa",
] as const satisfies readonly WorkStubSlug[];
