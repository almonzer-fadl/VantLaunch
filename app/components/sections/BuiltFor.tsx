"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3, Briefcase, Calculator, Building2,
  CheckCircle2, AlertCircle,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Marketing Agency — Campaign dashboard                               */
/* ------------------------------------------------------------------ */
function MarketingPreview() {
  return (
    <motion.div key="marketing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="space-y-3">
      <div className="flex items-center gap-2 mb-1">
        <div className="h-5 w-5 rounded-md bg-[#004225] flex items-center justify-center">
          <BarChart3 className="h-3 w-3 text-white" />
        </div>
        <span className="text-[9px] font-bold text-[#11100E]">Campaign Command</span>
        <span className="ml-auto text-[8px] text-[#004225] font-bold">6 Active</span>
      </div>
      {/* Channel performance */}
      <div className="rounded-xl border border-black/[0.06] bg-white p-3">
        <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B] mb-2">Channel Performance</p>
        {[
          { channel: "Meta Ads", spend: "$42K", roas: "3.2x", pct: 88, color: "#004225" },
          { channel: "Google Ads", spend: "$28K", roas: "4.1x", pct: 72, color: "#004225" },
          { channel: "Email", spend: "$12K", roas: "8.5x", pct: 55, color: "#004225" },
        ].map((ch, i) => (
          <motion.div
            key={ch.channel}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.08 }}
            className="flex items-center gap-3 py-2 border-b border-black/[0.03] last:border-0"
          >
            <span className="text-[9px] font-bold text-[#11100E] w-16 shrink-0">{ch.channel}</span>
            <div className="flex-1 h-1.5 rounded-full bg-black/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${ch.pct}%` }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="h-full rounded-full bg-[#004225]"
              />
            </div>
            <span className="text-[9px] font-bold text-[#004225] w-10 text-right shrink-0">{ch.roas}</span>
          </motion.div>
        ))}
      </div>
      {/* Client report queue */}
      <div className="rounded-xl border border-black/[0.06] bg-white p-3">
        <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B] mb-2">Client Reports</p>
        {[
          { client: "BrandCo", status: "Ready", statusColor: "text-[#004225]" },
          { client: "TechStart", status: "Generating", statusColor: "text-orange-500" },
          { client: "GreenLife", status: "Scheduled", statusColor: "text-[#74695B]" },
        ].map((r, i) => (
          <motion.div
            key={r.client}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.08 }}
            className="flex items-center justify-between py-1.5 border-b border-black/[0.03] last:border-0"
          >
            <span className="text-[9px] font-medium text-[#11100E]">{r.client}</span>
            <div className="flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${r.statusColor === "text-[#004225]" ? "bg-[#004225]" : r.statusColor === "text-orange-500" ? "bg-orange-400" : "bg-[#74695B]"}`} />
              <span className={`text-[8px] font-bold ${r.statusColor}`}>{r.status}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Consulting — Project board + milestones                              */
/* ------------------------------------------------------------------ */
function ConsultingPreview() {
  return (
    <motion.div key="consulting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="space-y-3">
      <div className="flex items-center gap-2 mb-1">
        <div className="h-5 w-5 rounded-md bg-[#004225] flex items-center justify-center">
          <Briefcase className="h-3 w-3 text-white" />
        </div>
        <span className="text-[9px] font-bold text-[#11100E]">Engagement Tracker</span>
        <span className="ml-auto text-[8px] font-bold text-[#004225]">18 Active</span>
      </div>
      {/* Kanban columns */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { title: "In Progress", count: 6, color: "bg-[#004225]/5 border-[#004225]/15", items: ["Strategy — FinCorp", "Ops Review — MedGroup"] },
          { title: "Review", count: 4, color: "bg-orange-50 border-orange-200", items: ["Deliverable — RetailPro", "Q3 Plan — TechNova"] },
          { title: "Complete", count: 8, color: "bg-[#004225]/5 border-[#004225]/10", items: ["Audit — Holden Ltd", "Launch — Rivera Inc"] },
        ].map((col, i) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.1 }}
            className={`rounded-lg border p-2 ${col.color}`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[8px] font-bold text-[#11100E]">{col.title}</span>
              <span className="text-[8px] font-bold text-[#74695B]">{col.count}</span>
            </div>
            {col.items.map((item, j) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 + j * 0.05 }}
                className="rounded-md bg-white border border-black/[0.06] p-1.5 mb-1.5 last:mb-0"
              >
                <p className="text-[8px] font-medium text-[#11100E] leading-tight">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Accounting — Deadline calendar + documents                           */
/* ------------------------------------------------------------------ */
function AccountingPreview() {
  return (
    <motion.div key="accounting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="space-y-3">
      <div className="flex items-center gap-2 mb-1">
        <div className="h-5 w-5 rounded-md bg-[#004225] flex items-center justify-center">
          <Calculator className="h-3 w-3 text-white" />
        </div>
        <span className="text-[9px] font-bold text-[#11100E]">FirmOS</span>
        <span className="ml-auto text-[8px] text-[#74695B]">August 2026</span>
      </div>
      {/* Deadline timeline */}
      <div className="rounded-xl border border-black/[0.06] bg-white p-3">
        <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B] mb-2">Upcoming Deadlines</p>
        {[
          { client: "Holden Ltd", task: "Corporate Tax Filing", date: "Aug 15", urgent: true },
          { client: "Rivera Inc", task: "Quarterly Audit", date: "Aug 22", urgent: false },
          { client: "Chen Partners", task: "VAT Return", date: "Aug 28", urgent: false },
        ].map((d, i) => (
          <motion.div
            key={d.client}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.08 }}
            className={`flex items-center gap-3 py-2 border-b border-black/[0.03] last:border-0 ${d.urgent ? "border-l-2 border-l-orange-400 pl-2 -ml-2" : ""}`}
          >
            <div className="flex flex-col items-center shrink-0 w-10">
              <span className={`text-[8px] font-bold ${d.urgent ? "text-orange-600" : "text-[#74695B]"}`}>{d.date.split(" ")[1]}</span>
              <span className="text-[7px] text-[#74695B]">{d.date.split(" ")[0]}</span>
            </div>
            <div>
              <p className="text-[9px] font-bold text-[#11100E]">{d.client}</p>
              <p className="text-[8px] text-[#74695B]">{d.task}</p>
            </div>
            {d.urgent && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="ml-auto flex items-center gap-1 text-[8px] font-bold text-orange-600"
              >
                <AlertCircle className="h-2.5 w-2.5" /> Due soon
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>
      {/* Document checklist */}
      <div className="rounded-xl border border-black/[0.06] bg-white p-3">
        <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B] mb-2">Documents Ready</p>
        <div className="grid grid-cols-2 gap-2">
          {["Tax Returns", "Audit Reports", "VAT Filings", "Payroll"].map((doc, i) => (
            <motion.div
              key={doc}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.06 }}
              className="flex items-center gap-1.5 rounded-md bg-[#F8F6EF] px-2 py-1.5"
            >
              <CheckCircle2 className="h-3 w-3 text-[#004225]" />
              <span className="text-[8px] font-medium text-[#11100E]">{doc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Construction — Site overview + budget                                */
/* ------------------------------------------------------------------ */
function ConstructionPreview() {
  return (
    <motion.div key="construction" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="space-y-3">
      <div className="flex items-center gap-2 mb-1">
        <div className="h-5 w-5 rounded-md bg-[#004225] flex items-center justify-center">
          <Building2 className="h-3 w-3 text-white" />
        </div>
        <span className="text-[9px] font-bold text-[#11100E]">Site Command</span>
        <span className="ml-auto text-[8px] font-bold text-[#004225]">7 Active</span>
      </div>
      {/* Phase progress */}
      <div className="rounded-xl border border-black/[0.06] bg-white p-3">
        <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B] mb-2">Site Alpha — Phase Progress</p>
        {[
          { name: "Foundation", pct: 100 },
          { name: "Framing", pct: 85 },
          { name: "Electrical", pct: 60 },
          { name: "Interior", pct: 25 },
        ].map((phase, i) => (
          <motion.div key={phase.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 + i * 0.06 }} className="flex items-center gap-2 py-1.5">
            <span className="text-[8px] font-bold text-[#11100E] w-16 shrink-0">{phase.name}</span>
            <div className="flex-1 h-1.5 rounded-full bg-black/5 overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: `${phase.pct}%` }} transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }} className={`h-full rounded-full ${phase.pct === 100 ? "bg-[#004225]" : "bg-[#004225]"}`} />
            </div>
            <span className={`text-[8px] font-bold w-8 text-right ${phase.pct === 100 ? "text-[#004225]" : "text-[#74695B]"}`}>{phase.pct}%</span>
          </motion.div>
        ))}
      </div>
      {/* Budget vs Actual */}
      <div className="grid grid-cols-2 gap-2">
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="rounded-xl border border-black/[0.06] bg-white p-3">
          <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B]">Budget</p>
          <p className="text-lg font-bold text-[#11100E] mt-1">$2.8M</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#004225]" />
            <span className="text-[8px] font-bold text-[#004225]">On track</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="rounded-xl border border-black/[0.06] bg-white p-3">
          <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B]">Contractors</p>
          <p className="text-lg font-bold text-[#11100E] mt-1">42</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#004225]" />
            <span className="text-[8px] font-bold text-[#004225]">All compliant</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const INDUSTRIES = [
  { id: "marketing" as const, label: "Marketing Agency", icon: BarChart3, preview: MarketingPreview },
  { id: "consulting" as const, label: "Consulting Firm", icon: Briefcase, preview: ConsultingPreview },
  { id: "accounting" as const, label: "Accounting Firm", icon: Calculator, preview: AccountingPreview },
  { id: "construction" as const, label: "Construction", icon: Building2, preview: ConstructionPreview },
];

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export function BuiltForSection() {
  const [selected, setSelected] = useState<string>("marketing");
  const active = INDUSTRIES.find((i) => i.id === selected) || INDUSTRIES[0];
  const ActivePreview = active.preview;

  return (
    <section className="border-t border-black/10 bg-[#F8F6EF] px-4 py-16 text-[#11100E] sm:px-6 sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">
            Built For
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Built around how you operate
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-[#74695B]">
            Select your industry and see how VantLaunch adapts to your workflows.
          </p>
        </motion.div>

        {/* Selector pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {INDUSTRIES.map((ind) => {
            const isActive = selected === ind.id;
            return (
              <motion.button
                key={ind.id}
                onClick={() => setSelected(ind.id)}
                whileTap={{ scale: 0.96 }}
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-[#004225] text-white shadow-sm"
                    : "text-[#74695B] bg-white border border-black/10 hover:border-[#004225]/30 hover:text-[#11100E]"
                }`}
              >
                <ind.icon className="h-3.5 w-3.5" />
                {ind.label}
              </motion.button>
            );
          })}
        </div>

        {/* Morphing preview card */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-mid"
        >
          <div className="p-5 sm:p-6">
            <AnimatePresence mode="wait">
              <ActivePreview />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
