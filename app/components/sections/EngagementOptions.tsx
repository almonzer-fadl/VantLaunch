"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Check, Zap, Bell, TrendingUp,
  DollarSign, Users, Target, ShieldCheck, Activity,
} from "lucide-react";
import type { Locale } from "@/app/lib/locales";
import { LOCALE_DATA } from "@/app/lib/locales";
import { useT } from "@/app/lib/LocaleContext";

/* ------------------------------------------------------------------ */
/*  Preview: Fix One Bottleneck — one focused dashboard                  */
/* ------------------------------------------------------------------ */
function StarterPreview() {
  return (
    <motion.div
      key="starter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-2.5"
    >
      {/* Top bar */}
      <div className="flex items-center gap-2 mb-1">
        <div className="h-5 w-5 rounded-md bg-[#004225] flex items-center justify-center">
          <Zap className="h-3 w-3 text-white" />
        </div>
        <span className="text-[9px] font-bold text-[#11100E]">Operations Hub</span>
        <span className="ml-auto flex items-center gap-1 text-[8px] text-[#74695B]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#004225]" />
          Live
        </span>
      </div>

      {/* Main focused widget with solve animation */}
      <motion.div
        initial={{ borderColor: "rgba(255,165,0,0.3)", backgroundColor: "rgba(255,165,0,0.02)" }}
        animate={{ borderColor: "rgba(0,66,37,0.15)", backgroundColor: "rgb(255,255,255)" }}
        transition={{ duration: 1, delay: 0.3 }}
        className="rounded-lg border bg-white p-3"
      >
        <div className="flex items-center justify-between mb-2">
          <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B]">
            Weekly Reporting
          </p>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="flex items-center gap-1 text-[7px] font-bold text-[#004225]"
          >
            <Activity className="h-2.5 w-2.5" /> Automated
          </motion.span>
        </div>
        <div className="flex items-end gap-1 h-10">
          {[28, 35, 32, 45, 38, 52, 48].map((v, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${v}%` }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.03 }}
              className="flex-1 rounded-t-[2px] bg-[#004225]"
              style={{ opacity: 0.25 + (v / 60) * 0.75 }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i} className="text-[7px] text-[#74695B]">{d}</span>
          ))}
        </div>
      </motion.div>

      {/* Simple KPI row */}
      <div className="grid grid-cols-2 gap-2">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-lg border border-black/[0.06] bg-white p-2.5"
        >
          <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B]">Revenue (MTD)</p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base font-bold text-[#11100E] mt-0.5"
          >
            $62.4K
          </motion.p>
          <p className="text-[8px] text-[#004225] mt-0.5">+12.3%</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-lg border border-black/[0.06] bg-white p-2.5"
        >
          <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B]">Tasks Done</p>
          <p className="text-base font-bold text-[#11100E] mt-0.5">8/10</p>
          <div className="h-1.5 w-full rounded-full bg-black/5 overflow-hidden mt-1.5">
            <motion.div initial={{ width: 0 }} animate={{ width: "80%" }} transition={{ duration: 0.6, delay: 0.5 }} className="h-full rounded-full bg-[#004225]" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Preview: Connect Your Operations — widgets wiring together          */
/* ------------------------------------------------------------------ */
function ProPreview() {
  return (
    <motion.div
      key="pro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-2.5 relative"
    >
      {/* Connecting lines (SVG overlay) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ minHeight: 160 }}>
        <motion.line
          x1="25%" y1="22%" x2="50%" y2="22%"
          stroke="#004225" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 2"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        />
        <motion.line
          x1="50%" y1="22%" x2="50%" y2="55%"
          stroke="#004225" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 2"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        />
        <motion.line
          x1="50%" y1="55%" x2="75%" y2="55%"
          stroke="#004225" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 2"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        />
      </svg>

      {/* Top bar */}
      <div className="flex items-center gap-2 mb-1 relative z-10">
        <div className="h-5 w-5 rounded-md bg-[#004225] flex items-center justify-center">
          <Zap className="h-3 w-3 text-white" />
        </div>
        <span className="text-[9px] font-bold text-[#11100E]">VantLaunch OS</span>
        <div className="ml-auto flex gap-1.5">
          {["Dashboard", "Reports", "Team"].map((t) => (
            <span key={t} className="text-[7px] font-bold text-[#74695B]">{t}</span>
          ))}
        </div>
      </div>

      {/* Three connected widgets */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="rounded-lg border border-black/[0.06] bg-white p-2.5 relative z-10"
      >
        <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B]">Revenue</p>
        <p className="text-sm font-bold text-[#11100E] mt-0.5">$847.2K</p>
        <div className="flex items-center gap-1 mt-1">
          <TrendingUp className="h-2.5 w-2.5 text-[#004225]" />
          <span className="text-[8px] font-bold text-[#004225]">+18.2%</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="rounded-lg border border-black/[0.06] bg-white p-2.5 relative z-10"
      >
        <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B] mb-2">Automation</p>
        {[
          { label: "Invoice generation", done: true },
          { label: "Client report sync", done: true },
          { label: "Slack notification", done: true },
        ].map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="flex items-center gap-1.5 py-0.5"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
            >
              <Check className="h-2.5 w-2.5 text-[#004225]" />
            </motion.span>
            <span className="text-[9px] text-[#74695B]">{a.label}</span>
            <span className="ml-auto text-[7px] text-[#74695B]">Done</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="rounded-lg border border-black/[0.06] bg-white p-2.5 relative z-10"
      >
        <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B]">Team</p>
        <div className="flex items-center gap-1.5 mt-1.5">
          {["JD", "MK", "SC", "DO"].map((init, i) => (
            <motion.div
              key={init}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 + i * 0.08, type: "spring" }}
              className="flex h-5 w-5 items-center justify-center rounded-full bg-[#004225]/10 text-[7px] font-bold text-[#004225]"
            >
              {init}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Preview: Leadership On the Go — desktop + phone, notifications      */
/* ------------------------------------------------------------------ */
function MobilePreview() {
  return (
    <motion.div
      key="mobile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-4"
    >
      {/* Desktop dashboard side */}
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-md bg-[#004225] flex items-center justify-center">
            <Zap className="h-3 w-3 text-white" />
          </div>
          <span className="text-[9px] font-bold text-[#11100E]">Dashboard</span>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-lg border border-black/[0.06] bg-white p-2.5"
        >
          <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B]">Monthly Revenue</p>
          <div className="flex items-end gap-0.5 h-10 mt-2">
            {[40, 55, 48, 65, 58, 72, 65, 78, 70, 85].map((v, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${v}%` }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.02 }}
                className="flex-1 rounded-t-[1px] bg-[#004225]"
                style={{ opacity: 0.3 + (v / 100) * 0.7 }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
          className="rounded-lg border border-black/[0.06] bg-white p-2.5"
        >
          <div className="flex items-center gap-1.5">
            <Bell className="h-3 w-3 text-[#004225]" />
            <span className="text-[8px] font-bold text-[#11100E]">Budget approval needed</span>
          </div>
          <div className="flex gap-2 mt-2">
            <span className="flex-1 rounded-md bg-[#004225] py-1 text-center text-[7px] font-bold text-white">Approve</span>
            <span className="flex-1 rounded-md border border-black/10 bg-white py-1 text-center text-[7px] font-bold text-[#74695B]">Review</span>
          </div>
        </motion.div>
      </div>

      {/* Phone mockup */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-20 h-32 rounded-2xl border-2 border-black/20 bg-white p-1.5 shrink-0 flex flex-col gap-1 shadow-lg"
      >
        <div className="flex items-center justify-between">
          <span className="text-[6px] font-bold text-[#11100E]">Today</span>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="flex h-3 w-3 items-center justify-center rounded-full bg-[#004225] text-[5px] font-bold text-white"
          >
            3
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex-1 rounded-md bg-[#004225]/5 p-1 flex flex-col gap-0.5"
        >
          <div className="h-0.5 rounded bg-[#004225]/20 w-full" />
          <div className="h-0.5 rounded bg-[#004225]/20 w-3/4" />
          <div className="h-0.5 rounded bg-[#004225]/20 w-1/2" />
          <div className="mt-auto text-[5px] font-bold text-[#004225]">$28.4K ↑</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="flex-1 rounded-md bg-[#F8F6EF] p-1 flex flex-col gap-0.5"
        >
          <div className="h-0.5 rounded bg-black/20 w-full" />
          <div className="h-0.5 rounded bg-black/20 w-2/3" />
          <div className="mt-auto text-[5px] font-bold text-[#11100E]">12 tasks</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Preview: Full Platform — complete operating system                   */
/* ------------------------------------------------------------------ */
function EnterprisePreview() {
  return (
    <motion.div
      key="enterprise"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-2.5"
    >
      {/* Rich top bar */}
      <div className="flex items-center gap-2 mb-1">
        <div className="h-5 w-5 rounded-md bg-[#11100E] flex items-center justify-center">
          <ShieldCheck className="h-3 w-3 text-white" />
        </div>
        <span className="text-[9px] font-bold text-[#11100E]">VantLaunch Enterprise</span>
        <div className="ml-auto flex gap-1">
          {["Hub", "CRM", "Reports", "Ops", "Team"].map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="text-[7px] font-bold text-[#74695B]"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>

      {/* KPI grid */}
      <div className="grid grid-cols-4 gap-1.5">
        {[
          { label: "Revenue", value: "$1.2M", icon: DollarSign },
          { label: "Projects", value: "47", icon: Target },
          { label: "Team", value: "32", icon: Users },
          { label: "NPS", value: "86", icon: TrendingUp },
        ].map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 + i * 0.06, type: "spring", stiffness: 300 }}
            className="rounded-lg border border-black/[0.06] bg-white p-2 text-center"
          >
            <k.icon className="h-2.5 w-2.5 mx-auto mb-0.5 text-[#004225]" />
            <p className="text-[7px] font-bold uppercase text-[#74695B]">{k.label}</p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="text-[10px] font-bold text-[#11100E] mt-0.5"
            >
              {k.value}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* Workflows + revenue chart row */}
      <div className="grid grid-cols-2 gap-2">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-lg border border-black/[0.06] bg-white p-2.5"
        >
          <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B] mb-2">Workflows</p>
          {[
            { name: "Client Onboarding", status: "Running" },
            { name: "Invoice Processing", status: "Running" },
            { name: "Weekly Reports", status: "Scheduled" },
          ].map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 + i * 0.08 }}
              className="flex items-center justify-between py-0.5"
            >
              <span className="text-[8px] text-[#11100E]">{w.name}</span>
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#004225]" />
                <span className="text-[7px] font-bold text-[#004225]">{w.status}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="rounded-lg border border-black/[0.06] bg-white p-2.5"
        >
          <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B] mb-1">Quarterly</p>
          <div className="flex items-end gap-1 h-12">
            {[50, 62, 58, 75].map((v, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${v}%` }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
                className="flex-1 rounded-t-[2px] bg-[#004225]"
                style={{ opacity: 0.35 + (v / 100) * 0.65 }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {["Q1", "Q2", "Q3", "Q4"].map((q) => (
              <span key={q} className="text-[7px] text-[#74695B]">{q}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const ENGAGEMENTS = [
  {
    id: "starter" as const,
    heading: "Fix One Bottleneck",
    sub: "Solve a specific operational problem that is costing your team hours every week.",
    price: "$999",
    features: ["One connected system", "Custom integrations", "Setup & training", "Source code ownership", "30-day support"],
    preview: StarterPreview,
  },
  {
    id: "pro" as const,
    heading: "Connect Your Operations",
    sub: "Bring multiple workflows, team dashboards, and automation into one shared workspace.",
    price: "$1,699",
    features: ["Everything in Fix One Bottleneck", "Multiple team workspaces", "Workflow automation", "Advanced integrations", "60-day support"],
    preview: ProPreview,
    featured: true,
  },
  {
    id: "mobile" as const,
    heading: "Leadership On the Go",
    sub: "Full operational visibility plus a dedicated mobile experience for owners and leadership.",
    price: "$2,499",
    features: ["Everything in Connect", "Dedicated mobile app", "Push notifications", "Approval workflows", "90-day support"],
    preview: MobilePreview,
  },
  {
    id: "enterprise" as const,
    heading: "Full Platform",
    sub: "A complete business operating system built around your company workflows — scoped and quoted individually.",
    price: "Custom Quote",
    features: ["Fully custom architecture", "Company-wide deployment", "Advanced integrations", "Dedicated support", "Ongoing optimization"],
    preview: EnterprisePreview,
  },
];

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export function EngagementOptionsSection({ locale = "global" }: { locale?: Locale }) {
  const [selected, setSelected] = useState<string>("pro");
  const prices = LOCALE_DATA[locale].engagementPrices;
  const t = useT().t;

  const localizedEngagements = ENGAGEMENTS.map((eng) => ({
    ...eng,
    price: eng.id === "starter" ? prices.starter : eng.id === "pro" ? prices.pro : eng.id === "mobile" ? prices.mobile : eng.price,
  }));

  const active = localizedEngagements.find((e) => e.id === selected) || localizedEngagements[1];
  const ActivePreview = active.preview;

  return (
    <section id="engagement-options" className="scroll-mt-20 border-t border-black/10 bg-[#F8F6EF] px-4 py-16 text-[#11100E] sm:px-6 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">
            {t.engagement.tag}
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t.engagement.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#74695B]">
            {t.engagement.sub}
          </p>
        </motion.div>

        {/* Selector pills — all use brand green when active */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10">
          {ENGAGEMENTS.map((eng) => {
            const isActive = selected === eng.id;
            return (
              <motion.button
                key={eng.id}
                onClick={() => setSelected(eng.id)}
                whileTap={{ scale: 0.96 }}
                className={`relative rounded-full px-4 py-2.5 text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-[#004225] text-white shadow-sm"
                    : "text-[#74695B] bg-white border border-black/10 hover:border-[#004225]/30 hover:text-[#11100E]"
                }`}
              >
                {eng.heading}
                {eng.featured && !isActive && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#004225] text-[6px] font-bold text-white">★</span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-mid"
        >
          <div className="grid md:grid-cols-[1fr_1.1fr]">
            {/* Left: Preview */}
            <div className="bg-[#F8F6EF]/60 border-b md:border-b-0 md:border-r border-black/[0.06] p-5 sm:p-6 flex items-center">
              <div className="w-full">
                <AnimatePresence mode="wait">
                  <ActivePreview />
                </AnimatePresence>
              </div>
            </div>

            {/* Right: Details */}
            <div className="flex flex-col p-6 sm:p-8">
              <motion.div
                key={selected}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#004225]">
                  {active.heading}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#74695B]">
                  {active.sub}
                </p>

                <ul className="mt-5 space-y-2">
                  {active.features.map((f, i) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.05 }}
                      className="flex items-start gap-2.5 text-sm font-medium text-[#443825]"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#004225]" />
                      <span>{f}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl border border-black/[0.06] bg-[#F8F6EF] p-4">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B]">Investment</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold tracking-tight text-[#11100E]">{active.price}</span>
                    {selected !== "enterprise" && (
                      <span className="text-xs font-medium text-[#74695B]">one-time</span>
                    )}
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-5">
                  <a
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#004225] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#11100E] hover:shadow-lg"
                  >
                    {t.engagement.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.div>

                <p className="mt-3 text-center text-[10px] text-[#74695B]">
                  Free call. We recommend the right fit. No pressure.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom flow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 rounded-2xl border border-[#004225]/15 bg-gradient-to-br from-[#004225]/[0.02] to-transparent p-6 text-center sm:p-8"
        >
          <p className="text-sm font-bold text-[#004225]">
            {t.engagement.flowTitle}
          </p>
          <p className="mt-1 text-xs text-[#74695B]">
            {t.engagement.flowText}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
