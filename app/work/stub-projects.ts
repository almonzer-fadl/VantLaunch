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
    metaTitle: "Araba | Multi-platform product — VantLaunch",
    metaDescription:
      "Laravel backend with Flutter mobile clients — REST and GraphQL APIs, Firebase authentication, and Pusher-powered realtime experiences across apps.",
    imageSrc: "/portfolio/araba.png",
    imageAlt: "Araba product — mobile experience with maps, requests, and brand-forward UI",
    badges: ["Multi-platform", "Flutter · Laravel"],
    cardSummary:
      "Mobile apps on Flutter paired with a Laravel API — auth, data, and realtime updates wired for serious day-one usage.",
    lede: "A multi-repo product line: Laravel services on the server, Flutter on the phone, and realtime channels when the experience needs to breathe.",
    detail:
      "The codebase splits cleanly between a PHP API layer and one or more Flutter clients — including a variant with tighter Pusher integration — so teams can evolve backend contracts and mobile UX on different cadences without fighting the architecture.",
    bullets: [
      "Laravel API surface (REST and GraphQL) with familiar deployment and ops patterns",
      "Flutter apps for iOS and Android, with room for a dedicated realtime-first client",
      "Firebase authentication wired into the stack so sign-in stays consistent across surfaces",
      "Pusher where live updates matter — status, messaging, or coordination flows",
      "Shared conventions for env config, secrets, and mobile Firebase bootstrap files",
    ],
    capabilities: [
      "Laravel API",
      "Flutter clients",
      "Firebase Auth",
      "Pusher realtime",
      "Multi-app structure",
    ],
    emailSubject: "Araba%20project",
    figureCaption:
      "Araba — mobile-first flows with map and request context, backed by Laravel and realtime channels.",
    previewImgClass:
      "object-contain object-center opacity-50 sm:opacity-[0.48]",
  },
  "gari-customer": {
    slug: "gari-customer",
    title: "Gari ",
    metaTitle: "Gari customer iOS | Automotive marketplace — VantLaunch",
    metaDescription:
      "Native SwiftUI app for vehicle owners: discover workshops, book service, track jobs with Live Activities, approve quotes with inspection media, pay in-app, and manage documents.",
    imageSrc: "/portfolio/teramotors-mobile.jpg",
    imageAlt: "Gari customer app — service categories, vehicle hub, and search",
    badges: ["Automotive", "SwiftUI · iOS"],
    cardSummary:
      "Owner-side native app — find workshops, book jobs, follow progress on the lock screen, and close the loop with quotes, payments, and paperwork.",
    lede: "The customer-facing native experience for an automotive services marketplace: discovery and booking, transparent job status, and quote workflows that respect how people actually approve work on their cars.",
    detail:
      "Built with SwiftUI on iOS 17+ for Live Activities, MVVM for testable feature slices, and Socket.io when the server pushes job or quote events — without turning the UI into a polling dashboard.",
    bullets: [
      "Workshop discovery and service booking with cart-style checkout patterns",
      "Job tracking with Live Activities so status stays visible between app opens",
      "Quote approval and rejection with Digital Vehicle Inspection (DVI) media in context",
      "Payments via card, wallet, and local rails where the product integrates them",
      "Digital glovebox for vehicle documents plus QR flows for drop-off and collection handoffs",
    ],
    capabilities: [
      "SwiftUI · iOS 17+",
      "Live Activities",
      "Realtime (Socket.io)",
      "Maps & discovery",
      "Payments-ready UX",
    ],
    emailSubject: "Gari%20customer%20iOS",
    figureCaption:
      "Gari customer — home, categories, vehicle hub, and search tuned for repeat service journeys.",
    previewImgClass:
      "object-contain object-center opacity-42 transition-transform duration-700 group-hover:scale-[1.03]",
  },
  "aqua-marwa": {
    slug: "aqua-marwa",
    title: "Aqua Marwa",
    metaTitle: "Aqua Marwa | Water delivery app — VantLaunch",
    metaDescription:
      "React Native / Expo app for ordering drinking water, tracking deliveries, and managing profiles — TypeScript and NativeWind for a cohesive mobile UI.",
    imageSrc: "/portfolio/water-delivery-app.jpeg",
    imageAlt: "Aqua Marwa — storefront, promos, and product shortcuts",
    badges: ["On-demand", "Expo · React Native"],
    cardSummary:
      "Delivery-first mobile app — place orders, watch status, and keep household replenishment straightforward.",
    lede: "A production-minded Expo and React Native client for water delivery: ordering, live-ish order status, and profile management with TypeScript and NativeWind keeping the UI consistent.",
    detail:
      "The app is structured for the habits of repeat buyers — clear catalog paths, promos when marketing rotates campaigns, and checkout copy that stays honest about fees, slots, and what happens after you tap pay.",
    bullets: [
      "Account flows for sign-up and login with shared app shell and navigation",
      "Order placement with delivery details that reduce failed drops and support calls",
      "Order tracking so customers see where things stand without chasing SMS threads",
      "Profile and history surfaces for addresses, preferences, and past runs",
      "Push notification hooks when the product team turns them on for promos or dispatch updates",
    ],
    capabilities: [
      "Expo · RN",
      "TypeScript",
      "NativeWind UI",
      "Orders & tracking",
      "Profile & history",
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
  "gari-customer",
  "aqua-marwa",
] as const satisfies readonly WorkStubSlug[];
