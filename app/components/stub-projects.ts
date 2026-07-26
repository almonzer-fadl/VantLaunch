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
  /** Product-facing capability chips */
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
      "Gari previews a mobile app for booking auto service, managing vehicles, tracking jobs, and handling payments.",
    imageSrc: "/media/gari-home.webp",
    imageAlt: "Gari customer app — garage, service categories, and search",
    badges: ["Automotive", "Coming soon"],
    cardSummary:
      "A mobile app preview for booking service, managing vehicles, tracking jobs, and paying with confidence.",
    lede: "Auto service, built around trust.",
    detail:
      "Gari brings service discovery, vehicle profiles, active job tracking, payments, and handover controls into a clean mobile experience for drivers.",
    bullets: [
      "Find workshops and compare service options",
      "Manage vehicles and service history",
      "Track active jobs and parts orders",
      "Pay with saved cards or digital wallets",
      "Use handover controls for safer drop-off and collection",
    ],
    capabilities: [
      "Workshop discovery",
      "Vehicle garage",
      "Active job tracking",
      "Digital payments",
      "Drop-off and collection controls",
    ],
    emailSubject: "Gari%20project",
    figureCaption:
      "Gari — home, categories, vehicle hub, and search tuned for transparent automotive service journeys.",
    previewImgClass:
      "object-contain object-center opacity-42 transition-transform duration-700 group-hover:scale-[1.03]",
  },
  speakbill: {
    slug: "speakbill",
    title: "SpeakBill",
    metaTitle: "SpeakBill | Voice-to-Invoice — VantLaunch",
    metaDescription:
      "SpeakBill turns voice into professional invoices in seconds. Built for freelancers, boutiques, and small teams.",
    imageSrc: "/media/speakbill-dashboard.png",
    imageAlt: "SpeakBill dashboard with invoice list and voice input",
    badges: ["Invoicing", "Live"],
    cardSummary:
      "Voice-to-invoice. Speak your bill and get a clean, professional invoice in seconds.",
    lede: "Speak. Invoice. Done.",
    detail:
      "SpeakBill lets you create professional invoices by voice — no typing, no templates, no hassle. Built for freelancers, boutique businesses, and small teams who want to get paid faster.",
    bullets: [
      "Speak your bill and get an instant invoice",
      "Multi-currency support with automatic formatting",
      "Multi-language voice recognition",
      "Client and product management built in",
      "Professional PDF invoices ready to send",
    ],
    capabilities: [
      "Voice-to-invoice",
      "Multi-currency",
      "Client management",
      "Product catalog",
      "PDF export",
    ],
    emailSubject: "SpeakBill%20inquiry",
    figureCaption:
      "SpeakBill — voice-powered invoicing dashboard, mic input, invoice preview, and client management.",
    previewImgClass:
      "object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]",
  },
} as const satisfies Record<string, WorkStubConfig>;

export type WorkStubSlug = keyof typeof WORK_STUBS;

/** Homepage venture cards — order and data from WORK_STUBS */
export const HOME_PREVIEW_STUB_ORDER = [
  "gari",
] as const satisfies readonly WorkStubSlug[];
