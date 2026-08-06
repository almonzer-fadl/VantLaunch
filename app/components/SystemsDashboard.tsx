"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3, Users, Globe, Workflow, FileText, ShieldCheck, Smartphone, Zap,
  TrendingUp, DollarSign, Target,
  Bell, AlertCircle,
  GitBranch, Layers, Search,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Shared primitives                                                   */
/* ------------------------------------------------------------------ */
function KpiCard({ label, value, sub, icon: Icon, accent = "#004225" }: {
  label: string; value: string; sub: string; icon: React.ElementType; accent?: string;
}) {
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.02, y: -1 }}
      className="rounded-xl border border-black/[0.06] bg-white p-3 cursor-pointer hover:shadow-sm hover:border-black/15 transition-all"
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#74695B]">{label}</span>
        <Icon className="h-3 w-3" style={{ color: accent }} />
      </div>
      <p className="text-lg font-bold tracking-tight text-[#11100E]">{value}</p>
      <p className="text-[9px] text-[#74695B] mt-0.5">{sub}</p>
    </motion.div>
  );
}

function StatRow({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <motion.div layout className="flex items-center justify-between py-1.5">
      <span className="text-[10px] text-[#74695B]">{label}</span>
      <span className="text-[10px] font-bold text-[#11100E]" style={accent ? { color: accent } : undefined}>{value}</span>
    </motion.div>
  );
}

function MiniProgress({ pct, color = "#004225" }: { pct: number; color?: string }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-black/5 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

function Avatar({ letter, color = "#004225" }: { letter: string; color?: string }) {
  return (
    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[8px] font-bold text-white" style={{ backgroundColor: color }}>
      {letter}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  System views                                                       */
/* ------------------------------------------------------------------ */

function ExecutiveHub() {
  return (
    <motion.div key="executive" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }} className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B]">Executive Overview</span>
        <span className="text-[9px] text-[#74695B]">Updated 2m ago</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <KpiCard label="Revenue (MTD)" value="$847.2K" sub="+18.2% vs last month" icon={DollarSign} />
        <KpiCard label="Active Projects" value="32" sub="14 on track" icon={Target} />
        <KpiCard label="Team Utilization" value="87%" sub="+3% this week" icon={Users} />
        <KpiCard label="Forecast" value="$1.2M" sub="Q3 projection" icon={TrendingUp} accent="#0f766e" />
      </div>
      <div className="rounded-xl border border-black/[0.06] bg-white p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#74695B]">Revenue Trend</span>
          <span className="text-[9px] font-bold text-[#004225]">+18.2%</span>
        </div>
        <div className="flex items-end gap-1 h-16">
          {[42, 55, 48, 62, 58, 72, 65, 78, 70, 82, 75, 88].map((v, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${v}%` }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="flex-1 rounded-t-[2px] bg-[#004225]"
              style={{ opacity: 0.3 + (v / 100) * 0.7 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ClientPortal() {
  const msgs = [
    { client: "Acme Corp", msg: "Q3 budget approved — ready to proceed.", time: "2m", unread: true },
    { client: "TechVentures", msg: "Uploaded revised brand guidelines.", time: "18m", unread: false },
    { client: "GreenField", msg: "Can we move the deadline to Friday?", time: "1h", unread: true },
  ];
  return (
    <motion.div key="client" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }} className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B]">Client Portal</span>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#004225] text-[8px] font-bold text-white">3</span>
      </div>
      <div className="rounded-xl border border-black/[0.06] bg-white overflow-hidden">
        <div className="px-3 py-2 border-b border-black/[0.04] flex items-center gap-2">
          <Search className="h-3 w-3 text-[#74695B]" />
          <span className="text-[10px] text-[#74695B]">Search clients...</span>
        </div>
        {msgs.map((m, i) => (
          <motion.div
            key={m.client}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-2.5 px-3 py-2.5 border-b border-black/[0.03] last:border-0 cursor-pointer hover:bg-[#004225]/[0.02] transition-colors"
          >
            <Avatar letter={m.client[0]} color={i === 0 ? "#004225" : i === 1 ? "#0f766e" : "#6366f1"} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold text-[#11100E]">{m.client}</p>
                <span className="text-[8px] text-[#74695B]">{m.time}</span>
              </div>
              <p className={`text-[10px] mt-0.5 truncate ${m.unread ? "text-[#11100E] font-medium" : "text-[#74695B]"}`}>{m.msg}</p>
            </div>
            {m.unread && <div className="h-1.5 w-1.5 rounded-full bg-[#004225] mt-1.5 shrink-0" />}
          </motion.div>
        ))}
      </div>
      <div className="rounded-xl border border-black/[0.06] bg-white p-3">
        <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#74695B]">Pending Approvals</span>
        {[{ doc: "Q3 Marketing Budget", client: "Acme Corp", status: "Awaiting review" }].map((a, i) => (
          <div key={i} className="flex items-center justify-between mt-2">
            <div>
              <p className="text-[10px] font-bold text-[#11100E]">{a.doc}</p>
              <p className="text-[9px] text-[#74695B]">{a.client}</p>
            </div>
            <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[8px] font-bold text-orange-600">{a.status}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function InternalCRM() {
  const stages = [
    { name: "Lead", count: 24, pct: 100 },
    { name: "Qualified", count: 18, pct: 75 },
    { name: "Proposal", count: 12, pct: 60 },
    { name: "Negotiation", count: 7, pct: 40 },
    { name: "Closed", count: 15, pct: 30 },
  ];
  return (
    <motion.div key="crm" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }} className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B]">Pipeline</span>
        <span className="text-[9px] text-[#004225] font-bold">$2.4M total</span>
      </div>
      <div className="space-y-1.5">
        {stages.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            className="relative flex items-center justify-between rounded-lg border border-black/[0.04] bg-white px-3 py-2 cursor-pointer hover:border-[#004225]/15 transition-colors"
          >
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: `hsl(160, 100%, ${25 + i * 10}%)` }} />
              <span className="text-[10px] font-bold text-[#11100E]">{s.name}</span>
            </div>
            <span className="text-[10px] font-bold text-[#11100E]">{s.count}</span>
            <div className="absolute bottom-0 left-0 h-0.5 rounded-full" style={{ width: `${s.pct}%`, backgroundColor: `hsl(160, 100%, ${25 + i * 10}%)` }} />
          </motion.div>
        ))}
      </div>
      <div className="rounded-xl border border-black/[0.06] bg-white p-3">
        <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#74695B]">Recent Activity</span>
        {[
          { action: "New deal created", deal: "TechVentures — $120K", time: "5m" },
          { action: "Proposal sent", deal: "GreenField Co", time: "42m" },
          { action: "Meeting scheduled", deal: "NorthStar Inc", time: "2h" },
        ].map((a, i) => (
          <div key={i} className="flex items-center justify-between mt-2 py-1 border-b border-black/[0.03] last:border-0">
            <div>
              <p className="text-[10px] font-medium text-[#11100E]">{a.action}</p>
              <p className="text-[9px] text-[#74695B]">{a.deal}</p>
            </div>
            <span className="text-[8px] text-[#74695B]">{a.time}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function WorkflowAutomation() {
  return (
    <motion.div key="automation" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }} className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B]">Active Automations</span>
        <span className="flex items-center gap-1 text-[9px] font-bold text-[#004225]">
          <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-[#004225]" />
          Running
        </span>
      </div>
      {[
        { name: "Client Onboarding", trigger: "New deal closed", steps: "Send welcome email → Create project → Assign team", status: "Active", accent: "#004225" },
        { name: "Invoice Generation", trigger: "Milestone completed", steps: "Generate invoice → Send to client → Notify finance", status: "Active", accent: "#0f766e" },
        { name: "Weekly Report", trigger: "Every Monday 8 AM", steps: "Pull data → Build report → Email stakeholders", status: "Active", accent: "#6366f1" },
        { name: "Lead Scoring", trigger: "New form submission", steps: "Score lead → Assign rep → Create task", status: "Paused", accent: "#d97706" },
      ].map((a, i) => (
        <motion.div
          key={a.name}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.07 }}
          className="rounded-xl border border-black/[0.06] bg-white p-3 cursor-pointer hover:border-[#004225]/15 transition-colors"
        >
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <GitBranch className="h-3 w-3" style={{ color: a.accent }} />
              <span className="text-[10px] font-bold text-[#11100E]">{a.name}</span>
            </div>
            <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full ${a.status === "Active" ? "bg-[#004225]/10 text-[#004225]" : "bg-orange-50 text-orange-600"}`}>{a.status}</span>
          </div>
          <p className="text-[9px] text-[#74695B]"><span className="font-bold">Trigger:</span> {a.trigger}</p>
          <p className="text-[9px] text-[#74695B] mt-0.5"><span className="font-bold">Steps:</span> {a.steps}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function ReportingSystem() {
  return (
    <motion.div key="reporting" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }} className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B]">Reports</span>
        <span className="text-[9px] text-[#74695B]">Auto-generated</span>
      </div>
      <div className="rounded-xl border border-black/[0.06] bg-white p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#74695B]">Revenue by Channel</span>
          <span className="text-[9px] text-[#74695B]">Last 30 days</span>
        </div>
        <div className="space-y-2">
          {[
            { label: "Direct", pct: 42, color: "#004225" },
            { label: "Referral", pct: 28, color: "#0f766e" },
            { label: "Social", pct: 18, color: "#6366f1" },
            { label: "Email", pct: 12, color: "#1e40af" },
          ].map((ch, i) => (
            <div key={ch.label}>
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[10px] font-medium text-[#11100E]">{ch.label}</span>
                <span className="text-[9px] font-bold text-[#74695B]">{ch.pct}%</span>
              </div>
              <MiniProgress pct={ch.pct} color={ch.color} />
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-black/[0.06] bg-white p-3">
        <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#74695B]">Saved Reports</span>
        {[
          { name: "Monthly Executive Summary", updated: "2h ago" },
          { name: "Team Performance Q3", updated: "Yesterday" },
          { name: "Client Revenue Breakdown", updated: "Aug 3" },
        ].map((r, i) => (
          <div key={i} className="flex items-center justify-between mt-2 py-1.5 border-b border-black/[0.03] last:border-0 cursor-pointer hover:text-[#004225] transition-colors">
            <div className="flex items-center gap-2">
              <FileText className="h-3 w-3 text-[#74695B]" />
              <span className="text-[10px] font-medium text-[#11100E]">{r.name}</span>
            </div>
            <span className="text-[8px] text-[#74695B]">{r.updated}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function TeamManagement() {
  const members = [
    { name: "Jessica Davis", role: "Design Lead", tasks: 12, done: 9, color: "#004225" },
    { name: "Marcus Chen", role: "Senior Dev", tasks: 8, done: 6, color: "#0f766e" },
    { name: "Sarah Kim", role: "Project Manager", tasks: 15, done: 14, color: "#6366f1" },
    { name: "David Ortiz", role: "Developer", tasks: 10, done: 4, color: "#1e40af" },
  ];
  return (
    <motion.div key="team" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }} className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B]">Team</span>
        <span className="text-[9px] text-[#74695B]">18 members</span>
      </div>
      {members.map((m, i) => (
        <motion.div
          key={m.name}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.07 }}
          className="rounded-xl border border-black/[0.06] bg-white p-3 cursor-pointer hover:border-[#004225]/15 transition-colors"
        >
          <div className="flex items-center gap-2.5 mb-2">
            <Avatar letter={m.name.split(" ").map(n => n[0]).join("")} color={m.color} />
            <div className="flex-1">
              <p className="text-[10px] font-bold text-[#11100E]">{m.name}</p>
              <p className="text-[9px] text-[#74695B]">{m.role}</p>
            </div>
            <span className="text-[9px] font-bold text-[#11100E]">{m.done}/{m.tasks}</span>
          </div>
          <MiniProgress pct={Math.round((m.done / m.tasks) * 100)} color={m.color} />
        </motion.div>
      ))}
    </motion.div>
  );
}

function ApprovalSystem() {
  return (
    <motion.div key="approval" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }} className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B]">Pending Approvals</span>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-[8px] font-bold text-orange-600">5</span>
      </div>
      {[
        { title: "Q3 Marketing Budget", from: "Sarah Kim", amount: "$45,000", time: "2h ago", urgent: true },
        { title: "New Hire — Senior Dev", from: "Marcus Chen", amount: "$120K/yr", time: "5h ago", urgent: false },
        { title: "Client Proposal — Acme", from: "Jessica Davis", amount: "$85,000", time: "Yesterday", urgent: true },
        { title: "Software License Renewal", from: "David Ortiz", amount: "$2,400", time: "2d ago", urgent: false },
      ].map((a, i) => (
        <motion.div
          key={a.title}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.06 }}
          className={`rounded-xl border bg-white p-3 cursor-pointer hover:shadow-sm transition-all ${a.urgent ? "border-orange-200" : "border-black/[0.06]"}`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-2">
              {a.urgent && <AlertCircle className="h-3 w-3 text-orange-500 mt-0.5 shrink-0" />}
              <div>
                <p className="text-[10px] font-bold text-[#11100E]">{a.title}</p>
                <p className="text-[9px] text-[#74695B]">{a.from} · {a.amount}</p>
              </div>
            </div>
            <span className="text-[8px] text-[#74695B] shrink-0">{a.time}</span>
          </div>
          <div className="flex gap-2 mt-2">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex-1 rounded-lg bg-[#004225] py-1.5 text-[9px] font-bold text-white">Approve</motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex-1 rounded-lg border border-black/10 bg-white py-1.5 text-[9px] font-bold text-[#74695B]">Decline</motion.button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

function MobileExperience() {
  return (
    <motion.div key="mobile" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }} className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B]">Mobile Dashboard</span>
        <span className="text-[9px] text-[#74695B]">iOS · Android</span>
      </div>
      <div className="rounded-xl border border-black/[0.06] bg-white p-3">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[9px] font-bold">Today</span>
          <Bell className="h-3.5 w-3.5 text-[#74695B]" />
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="rounded-lg bg-[#004225]/5 p-2.5">
            <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B]">Revenue</p>
            <p className="text-sm font-bold text-[#11100E] mt-0.5">$28.4K</p>
            <p className="text-[8px] text-[#004225]">+8.2%</p>
          </div>
          <div className="rounded-lg bg-[#0f766e]/5 p-2.5">
            <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B]">Tasks</p>
            <p className="text-sm font-bold text-[#11100E] mt-0.5">12</p>
            <p className="text-[8px] text-[#0f766e]">4 due today</p>
          </div>
        </div>
        {[
          { title: "Budget approval needed", desc: "Q3 Marketing — $45K", time: "10m", urgent: true },
          { title: "New client onboarding", desc: "GreenField Co — kickoff call", time: "1h", urgent: false },
          { title: "Weekly report ready", desc: "Team performance summary", time: "3h", urgent: false },
        ].map((n, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07 }}
            className={`flex items-start gap-2 py-2 border-b border-black/[0.03] last:border-0 ${n.urgent ? "border-l-2 border-l-orange-400 pl-2 -ml-2" : ""}`}
          >
            <div className={`h-1.5 w-1.5 rounded-full mt-1.5 shrink-0 ${n.urgent ? "bg-orange-400" : "bg-[#004225]"}`} />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold text-[#11100E]">{n.title}</p>
              <p className="text-[9px] text-[#74695B]">{n.desc}</p>
            </div>
            <span className="text-[8px] text-[#74695B] shrink-0">{n.time}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Navigation                                                        */
/* ------------------------------------------------------------------ */

const NAV_ITEMS = [
  { id: "executive", label: "Executive Hub", icon: BarChart3 },
  { id: "client", label: "Client Portal", icon: Globe },
  { id: "crm", label: "Internal CRM", icon: Users },
  { id: "automation", label: "Automation", icon: Workflow },
  { id: "reporting", label: "Reporting", icon: FileText },
  { id: "team", label: "Team Mgmt", icon: Layers },
  { id: "approval", label: "Approvals", icon: ShieldCheck },
  { id: "mobile", label: "Mobile", icon: Smartphone },
] as const;

type SystemId = (typeof NAV_ITEMS)[number]["id"];

/* ------------------------------------------------------------------ */
/*  Main dashboard shell                                               */
/* ------------------------------------------------------------------ */

export function SystemsDashboard({ activeSystem, onSelect }: {
  activeSystem: SystemId;
  onSelect: (id: SystemId) => void;
}) {
  const views: Record<SystemId, React.ComponentType> = {
    executive: ExecutiveHub,
    client: ClientPortal,
    crm: InternalCRM,
    automation: WorkflowAutomation,
    reporting: ReportingSystem,
    team: TeamManagement,
    approval: ApprovalSystem,
    mobile: MobileExperience,
  };
  const ActiveView = views[activeSystem];

  return (
    <motion.div
      layout
      className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-mid"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-black/[0.06] bg-[#F8F6EF]/80">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#004225]">
            <Zap className="h-3 w-3 text-white" />
          </div>
          <span className="text-[10px] font-bold text-[#11100E]">VantLaunch OS</span>
        </div>
        <div className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-1 rounded-md border border-black/[0.06] bg-white px-2 py-0.5 cursor-pointer">
            <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-[#004225]" />
            <span className="text-[8px] font-bold text-[#74695B]">Live</span>
          </motion.div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/[0.04] text-[8px] font-bold text-[#74695B]">JD</div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar — desktop only */}
        <div className="hidden lg:flex flex-col w-40 shrink-0 border-r border-black/[0.06] bg-[#F8F6EF]/40 p-3 gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSystem === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => onSelect(item.id)}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${
                  isActive
                    ? "bg-[#004225] text-white shadow-sm"
                    : "text-[#74695B] hover:bg-black/[0.03] hover:text-[#11100E]"
                }`}
              >
                <item.icon className="h-3.5 w-3.5 shrink-0" />
                <span className="text-[10px] font-bold leading-tight">{item.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 min-h-[340px]">
          <AnimatePresence mode="wait">
            {ActiveView && (
              <motion.div
                key={activeSystem}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <ActiveView />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
