import { Sparkles, MonitorPlay, Rocket } from "lucide-react";

export const EASE_CURSOR: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const SOCIAL_LINKS = {
  x: "https://x.com/vantlaunch",
  github: "https://github.com/vantlaunch",
  instagram: "https://instagram.com/vantlaunch",
  facebook: "https://facebook.com/vantlaunch",
  linkedin: "https://www.linkedin.com/company/vantlaunch",
} as const;

export const CONTACT_EMAILS = {
  product: "build@vantlaunch.com",
  company: "ops@vantlaunch.com",
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
    title: "Launch in weeks, not quarters",
    body: "We ship usable product increments fast so you can validate with real users early.",
  },
  {
    title: "Operator-grade quality bar",
    body: "The same engineering and UX standards apply across TeraMotors and the upcoming Gari product line.",
  },
  {
    title: "Direct maker collaboration",
    body: "You work with the people designing and building, without account-layer bottlenecks.",
  },
  {
    title: "Decisions tied to traction",
    body: "We optimize for adoption, retention, and measurable product momentum after launch.",
  },
] as const;
