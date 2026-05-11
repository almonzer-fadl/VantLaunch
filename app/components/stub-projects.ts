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
  gari: {
    slug: "gari",
    title: "Gari",
    metaTitle: "Gari | Auto Service Product — VantLaunch",
    metaDescription:
      "Coming soon from VantLaunch: a trust-first auto service product for approvals, vehicle handover, and service visibility.",
    imageSrc: "/media/gari-home.webp",
    imageAlt: "Gari customer app — garage, service categories, and search",
    badges: ["Automotive", "SwiftUI · Hono"],
    cardSummary:
      "Coming soon: a trust-first auto-service product with booking, payment, handover, and customer visibility flows.",
    lede: "A product in development for clearer, more trustworthy auto-service journeys in Saudi Arabia.",
    detail:
      "Gari is being shaped around service discovery, vehicle profiles, active job tracking, payments, secure drop-off and collection controls, transparent quote approval, and customer-facing repair visibility. It sits next to TeraMotors in VantLaunch's automotive software focus.",
    bullets: [
      "Two-code authorization system for secure vehicle access and release",
      "Full digital inspection (DVI) with photo and video evidence trails",
      "Transparent quote approval and integrated Mada/Apple Pay payments via Moyasar",
      "Role-aware native apps for both customers and workshops built with SwiftUI",
      "Backend architecture planned around fast APIs, typed data access, and auditable service events",
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
} as const satisfies Record<string, WorkStubConfig>;

export type WorkStubSlug = keyof typeof WORK_STUBS;

/** Homepage venture cards — order and data from WORK_STUBS */
export const HOME_PREVIEW_STUB_ORDER = [
  "gari",
] as const satisfies readonly WorkStubSlug[];
