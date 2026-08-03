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

export const PRODUCT_LINKS = {
  executiveDashboard: "https://whop.com/joined/almonzer-fadl/products/executive-dashboard/",
  businessDashboardPro: "https://whop.com/joined/almonzer-fadl/products/business-dashboard-pro/",
  businessOperatingSystem: "https://whop.com/joined/almonzer-fadl/products/business-operating-system-7f/",
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
