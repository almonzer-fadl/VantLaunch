import { ClipboardCheck, PencilRuler, Code2, Rocket, Repeat } from "lucide-react";

export const EASE_CURSOR: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const POLAR_ORG = "vantlaunch";

export const SOCIAL_LINKS = {
  x: "https://x.com/vantlaunch",
  github: "https://github.com/vantlaunch",
  instagram: "https://instagram.com/vantlaunch",
  facebook: "https://facebook.com/vantlaunch",
  linkedin: "https://www.linkedin.com/company/vantlaunch",
} as const;

export const CONTACT_EMAILS = {
  product: "vantlaunch@gmail.com",
  company: "vantlaunch@gmail.com",
} as const;

export const TERAMOTORS_REGISTER_URL = "https://app.teramotor.cc/register";

export const POLAR_PRODUCT_IDS = {
  starter: "e1caeeda-8223-4df9-a0fc-adbcba65ea55",
  pro: "83802323-2db4-4fb7-bc2b-e138b96daaef",
  mobile: "cdab126e-5475-48b0-8304-473cf8e4e53f",
} as const;

export const PRODUCT_LINKS = {
  starter: "/api/checkout?product=starter",
  pro: "/api/checkout?product=pro",
  mobile: "/api/checkout?product=mobile",
} as const;

export const CHECKOUT_PRODUCT_MAP: Record<string, string> = {
  starter: POLAR_PRODUCT_IDS.starter,
  pro: POLAR_PRODUCT_IDS.pro,
  mobile: POLAR_PRODUCT_IDS.mobile,
};

export const PROCESS_FLOW_PATH_D = "M 96 44 C 252 6 348 82 450 44 S 648 6 804 44";

export const PROCESS_PHASES = [
  {
    num: "01",
    title: "Discovery",
    desc: "We learn how your business operates — your tools, your workflows, your bottlenecks. Clear understanding before any build starts.",
    Icon: ClipboardCheck,
  },
  {
    num: "02",
    title: "Design",
    desc: "We map your workflows and design the system architecture around how your team actually works.",
    Icon: PencilRuler,
  },
  {
    num: "03",
    title: "Build",
    desc: "We develop your internal system, connecting your tools and data into one cohesive workspace.",
    Icon: Code2,
  },
  {
    num: "04",
    title: "Launch",
    desc: "Your system goes live. We train your team and hand over full documentation so you are self-sufficient from day one.",
    Icon: Rocket,
  },
  {
    num: "05",
    title: "Improve",
    desc: "As your business grows, we continue optimizing and expanding your system to match your evolving needs.",
    Icon: Repeat,
  },
] as const;

export const ENGAGEMENT_OPTIONS = [
  {
    name: "Starter",
    tagline: "Solve one operational bottleneck.",
    description:
      "Perfect for businesses that need to fix a specific workflow — a central dashboard, a reporting system, or a workflow that is costing you hours every week.",
    price: "$999",
    features: [
      "One connected system",
      "Custom integrations",
      "Setup and training",
      "Source code ownership",
      "30-day post-launch support",
    ],
    accent: "#004225",
    href: PRODUCT_LINKS.starter,
    featured: false,
    isCustom: false,
  },
  {
    name: "Pro",
    tagline: "Centralize multiple workflows.",
    description:
      "Ideal for businesses ready to connect several operations — team dashboards, reporting, and workflow automation — into one shared workspace.",
    price: "$1,699",
    features: [
      "Everything in Starter",
      "Multiple team workspaces",
      "Workflow automation",
      "Advanced integrations",
      "60-day post-launch support",
    ],
    accent: "#0f766e",
    href: PRODUCT_LINKS.pro,
    featured: true,
    isCustom: false,
  },
  {
    name: "Mobile",
    tagline: "Leadership visibility on the go.",
    description:
      "Everything in Pro plus a dedicated mobile experience for owners and leadership teams who need visibility and approvals from anywhere.",
    price: "$2,499",
    features: [
      "Everything in Pro",
      "Dedicated mobile app",
      "Push notifications and alerts",
      "Approval workflows",
      "90-day post-launch support",
    ],
    accent: "#1e40af",
    href: PRODUCT_LINKS.mobile,
    featured: false,
    isCustom: false,
  },
  {
    name: "Enterprise",
    tagline: "A complete operating system.",
    description:
      "For larger businesses requiring fully custom systems, advanced integrations, or company-wide operational platforms. Scoped and quoted individually.",
    price: "Custom Quote",
    features: [
      "Fully custom architecture",
      "Company-wide deployment",
      "Advanced integrations",
      "Dedicated support team",
      "Ongoing optimization",
    ],
    accent: "#11100E",
    featured: false,
    isCustom: true,
  },
] as const;
