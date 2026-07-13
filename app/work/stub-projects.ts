export type WorkStubConfig = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  imageSrc: string;
  imageAlt: string;
  badges: string[];
  lede: string;
  bullets: string[];
  emailSubject: string;
};

export const WORK_STUBS = {
  araba: {
    slug: "araba",
    title: "Araba",
    metaTitle: "Araba | Hajj & Umrah mobility — VantLaunch",
    metaDescription:
      "Wheelchair assistance for pilgrims: booking, live tracking, professional pushers, and flexible payments — built for Saudi pilgrimage journeys.",
    imageSrc: "/portfolio/araba.png",
    imageAlt: "Araba app: Hajj and Umrah wheelchair assistance — map, request cart, and branding",
    badges: ["Mobility", "Hajj & Umrah · KSA"],
    lede: "On-demand wheelchair assistance for pilgrims — book, track, and pay with a calm, map-first experience around the Haram experience.",
    bullets: [
      "Request flow with live pusher matching and map context",
      "Payments and service quality tuned for high-trust religious travel",
      "Bilingual brand surface ready for field operations",
    ],
    emailSubject: "Araba%20project",
  },
  "teramotors-mobile": {
    slug: "teramotors-mobile",
    title: "TeraMotors — customer app",
    metaTitle: "TeraMotors mobile | Consumer garage & services — VantLaunch",
    metaDescription:
      "Consumer-facing automotive app: My Garage, service catalog, search, and cart — companion to the TeraMotors workshop platform.",
    imageSrc: "/portfolio/teramotors-mobile.jpg",
    imageAlt: "TeraMotors mobile home: service categories, My Garage, and search",
    badges: ["Automotive", "Consumer · GCC"],
    lede: "The driver-facing side of the repair journey — browse services, manage your garage, and move from search to booking without friction.",
    bullets: [
      "Rich service grid with quick paths into parts and labor flows",
      "Garage hub for vehicles the customer actually drives",
      "Pairs with the TeraMotors enterprise workshop product",
    ],
    emailSubject: "TeraMotors%20mobile%20app",
  },
  "water-delivery": {
    slug: "water-delivery",
    title: "Water delivery app",
    metaTitle: "Water delivery commerce app — VantLaunch",
    metaDescription:
      "Bottled water e-commerce in Saudi Arabia: promos, featured products, cart, and Arabic-first storefront patterns.",
    imageSrc: "/portfolio/water-delivery-app.jpeg",
    imageAlt: "Water delivery app home: winter offer banner, product shortcuts, and featured catalog",
    badges: ["E-commerce", "Delivery · KSA"],
    lede: "Retail-grade water delivery — seasonal campaigns, curated SKUs, and a cart flow built for repeat household orders.",
    bullets: [
      "Promo carousels and merchandising blocks for high-volume SKUs",
      "Location-first delivery setup for accurate drops",
      "Arabic-first UX with SAR-native pricing patterns",
    ],
    emailSubject: "Water%20delivery%20app",
  },
} as const satisfies Record<string, WorkStubConfig>;

export type WorkStubSlug = keyof typeof WORK_STUBS;
