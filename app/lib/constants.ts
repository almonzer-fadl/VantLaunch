import {
  siBetterauth,
  siMongodb,
  siNextdotjs,
  siPosthog,
  siReacthookform,
  siResend,
  siSentry,
  siShadcnui,
  siSocketdotio,
  siStripe,
  siTailwindcss,
  siTypescript,
  siVercel,
  siZod,
  siFramer,
} from "simple-icons";
import { Sparkles, MonitorPlay, Rocket } from "lucide-react";

export const EASE_CURSOR: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const SOCIAL_LINKS = {
  x: "https://x.com/vantlaunch",
  github: "https://github.com/vantlaunch",
  instagram: "https://instagram.com/vantlaunch",
  facebook: "https://facebook.com/vantlaunch",
  linkedin: "https://www.linkedin.com/company/vantlaunch",
} as const;

export const PROCESS_FLOW_PATH_D = "M 96 44 C 252 6 348 82 450 44 S 648 6 804 44";

export const PROCESS_PHASES = [
  {
    num: "01",
    title: "Find the operator pain",
    desc: "We start from real automotive workflows, then choose the smallest useful product surface to ship.",
    Icon: Sparkles,
  },
  {
    num: "02",
    title: "Ship the working loop",
    desc: "The first release focuses on the core job: bookings, job flow, approvals, payments, or handover.",
    Icon: MonitorPlay,
  },
  {
    num: "03",
    title: "Improve from usage",
    desc: "We keep the product grounded in adoption, support questions, and the workflows customers repeat.",
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

export const STACK_TECH = [
  { label: "Next.js", icon: siNextdotjs },
  { label: "Framer Motion", icon: siFramer },
  { label: "Stripe", icon: siStripe },
  { label: "MongoDB", icon: siMongodb },
  { label: "Zod", icon: siZod },
  { label: "React Hook Form", icon: siReacthookform },
  { label: "Socket.io", icon: siSocketdotio },
  { label: "Tailwind CSS", icon: siTailwindcss },
  { label: "shadcn/ui", icon: siShadcnui },
  { label: "TypeScript", icon: siTypescript },
  { label: "Vercel", icon: siVercel },
  { label: "Resend", icon: siResend },
  { label: "Sentry", icon: siSentry },
  { label: "PostHog", icon: siPosthog },
  { label: "Better Auth / NextAuth", icon: siBetterauth },
] as const;

export const STACK_ICON_FILL_OVERRIDES: Partial<Record<(typeof STACK_TECH)[number]["label"], string>> = {
  "Next.js": "#FFFFFF",
  Vercel: "#FFFFFF",
  "shadcn/ui": "#FFFFFF",
};
