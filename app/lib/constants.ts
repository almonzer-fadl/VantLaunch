import { BarChart3, LayoutDashboard, Settings, LineChart, Workflow, Code2 } from "lucide-react";

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
  executiveDashboard: "e1caeeda-8223-4df9-a0fc-adbcba65ea55",
  businessDashboardPro: "83802323-2db4-4fb7-bc2b-e138b96daaef",
  businessOperatingSystem: "cdab126e-5475-48b0-8304-473cf8e4e53f",
} as const;

export const PRODUCT_LINKS = {
  executiveDashboard: "/api/checkout?product=executive",
  businessDashboardPro: "/api/checkout?product=dashboard-pro",
  businessOperatingSystem: "/api/checkout?product=business-os",
} as const;

export const PROCESS_FLOW_PATH_D = "M 96 44 C 252 6 348 82 450 44 S 648 6 804 44";

export const PROCESS_PHASES = [
  {
    num: "01",
    title: "Discovery & Scoping",
    desc: "We map your current tools, data sources, and what you need to see. Clear requirements before any build starts.",
    Icon: LineChart,
  },
  {
    num: "02",
    title: "Build & Integrate",
    desc: "We build your dashboard or system, connect your data sources, and configure every integration.",
    Icon: Code2,
  },
  {
    num: "03",
    title: "Review & Refine",
    desc: "You review the working system. We fine-tune based on your feedback until it fits your workflow.",
    Icon: Settings,
  },
  {
    num: "04",
    title: "Launch & Train",
    desc: "Your system goes live with full training and documentation so your team can use it from day one.",
    Icon: BarChart3,
  },
] as const;
