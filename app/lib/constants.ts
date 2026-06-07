import { Sparkles, MonitorPlay, Rocket } from "lucide-react";

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

export const PROCESS_FLOW_PATH_D = "M 96 44 C 252 6 348 82 450 44 S 648 6 804 44";

export const PROCESS_PHASES = [
  {
    num: "01",
    title: "Create account",
    desc: "Add your shop details and start setting up the workspace.",
    Icon: Sparkles,
  },
  {
    num: "02",
    title: "Start the trial",
    desc: "Use TeraMotors for 14 days with no credit card required.",
    Icon: MonitorPlay,
  },
  {
    num: "03",
    title: "Keep what works",
    desc: "Continue on the plan that fits your workshop after the trial.",
    Icon: Rocket,
  },
] as const;

export const WHY_US_POINTS = [
  {
    title: "Ship fast, iterate faster",
    body: "We go from zero to live in weeks, not months — validate with real users, then refine based on traction.",
  },
  {
    title: "One quality bar, every product",
    body: "Whether it's TeraMotors, SpeakBill, or Gari — every product ships with the same engineering and design standards.",
  },
  {
    title: "You talk to builders, not account managers",
    body: "Work directly with the people designing and coding your product. No handoffs, no bottlenecks, no fluff.",
  },
  {
    title: "Traction over vanity",
    body: "Every decision is measured against adoption, retention, and revenue — not pitch decks or inflated metrics.",
  },
] as const;
