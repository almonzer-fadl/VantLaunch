import { ClipboardCheck, PencilRuler, Code2, Rocket, Repeat } from "lucide-react";

export const EASE_CURSOR: [number, number, number, number] = [0.16, 1, 0.3, 1];

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

