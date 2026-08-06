"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp, Users, CheckCircle2,
  Bell, Activity, Zap, DollarSign, Target, ArrowUpRight, ArrowDownRight, Layers,
} from "lucide-react";
import { useIsRTL } from "@/app/lib/LocaleContext";

interface Props {
  activeIndex: number;
}

/* --- Shared micro-interaction wrapper --- */
function HoverCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* --- SVG Sparkline --- */
function Sparkline({ data, color, height = 40 }: { data: number[]; color: string; height?: number }) {
  const pad = 4;
  const innerH = height - pad * 2;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = pad + innerH - ((v - min) / range) * innerH;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  const uid = color.replace("#", "");
  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 100 ${height}`}
        preserveAspectRatio="none"
        className="w-full"
        style={{ height }}
      >
        <defs>
          <linearGradient id={`fill-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.25" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.polyline
          fill="none"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <polygon
          fill={`url(#fill-${uid})`}
          points={`0,${height} ${points} 100,${height}`}
        />
      </svg>
    </div>
  );
}

/* --- Bar chart --- */
function BarChartMini({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data) || 1;
  return (
    <div className="flex items-end gap-[3px] h-10 w-full">
      {data.map((v, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${(v / max) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.04 * i, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ opacity: 1 }}
          className="flex-1 rounded-t-[2px] transition-opacity cursor-pointer"
          style={{ backgroundColor: color, opacity: 0.35 + (v / max) * 0.65 }}
        />
      ))}
    </div>
  );
}

/* --- State 0: Scattered Apps --- */
function ScatteredState() {
  const isRTL = useIsRTL();
  const apps = [
    { label: "Slack", x: isRTL ? 88 : 12, y: 8, color: "#4A154B" },
    { label: "Sheets", x: isRTL ? 50 : 50, y: 5, color: "#34A853" },
    { label: "CRM", x: isRTL ? 20 : 80, y: 18, color: "#4285F4" },
    { label: "Email", x: isRTL ? 95 : 5, y: 35, color: "#EA4335" },
    { label: "Stripe", x: isRTL ? 58 : 42, y: 38, color: "#635BFF" },
    { label: "Analytics", x: isRTL ? 30 : 70, y: 42, color: "#E37400" },
    { label: "Notion", x: isRTL ? 82 : 18, y: 60, color: "#000000" },
    { label: "Calendar", x: isRTL ? 45 : 55, y: 62, color: "#1a73e8" },
  ];
  return (
    <div className="relative h-56 w-full">
      {apps.map((app, i) => (
        <motion.div
          key={app.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ scale: 1.25, zIndex: 10 }}
          className="absolute flex flex-col items-center gap-1 cursor-pointer"
          style={{ left: `${app.x}%`, top: `${app.y}%`, transform: "translate(-50%, -50%)" }}
        >
          <motion.div
            animate={{ rotate: [0, 0.5, -0.5, 0] }}
            transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm text-[10px] font-bold transition-shadow hover:shadow-md"
            style={{ color: app.color }}
          >
            {app.label.slice(0, 2).toUpperCase()}
          </motion.div>
          <span className="text-[9px] font-medium text-[#74695B]">{app.label}</span>
        </motion.div>
      ))}
      <motion.div
        animate={{ opacity: [0.04, 0.1, 0.04] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span className="text-[10px] font-bold text-[#74695B]/50 uppercase tracking-[0.2em]">Disconnected</span>
      </motion.div>
    </div>
  );
}

/* --- State 1: Connecting & Automation --- */
function ConnectingState() {
  const tasks = [
    { label: "Pull ad spend data", done: true },
    { label: "Update client report", done: true },
    { label: "Sync CRM contacts", done: true },
    { label: "Reconcile Stripe payments", done: true },
    { label: "Generate weekly KPI summary", done: false },
    { label: "Send Slack notifications", done: false },
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B]">Automation Running</span>
        <motion.span
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex items-center gap-1 text-[9px] font-bold text-[#004225]"
        >
          <Activity className="h-3 w-3" /> Live
        </motion.span>
      </div>
      {tasks.map((task, i) => (
        <HoverCard key={task.label}>
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 * i, duration: 0.35 }}
            className="flex items-center gap-2.5 rounded-lg border border-black/[0.06] bg-white px-3 py-2 cursor-pointer hover:border-[#004225]/20 hover:bg-[#004225]/[0.02] transition-colors"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15 * i, type: "spring", stiffness: 400 }}
            >
              {task.done ? (
                <CheckCircle2 className="h-3.5 w-3.5 text-[#004225]" />
              ) : (
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="flex"
                >
                  <Activity className="h-3.5 w-3.5 text-[#004225]/50" />
                </motion.span>
              )}
            </motion.span>
            <span className={`text-[11px] font-medium ${task.done ? "text-[#11100E]" : "text-[#74695B]"}`}>
              {task.label}
            </span>
            {task.done && <span className="ml-auto text-[9px] text-[#74695B]">Done</span>}
          </motion.div>
        </HoverCard>
      ))}
    </div>
  );
}

/* --- State 2: Reports & Charts --- */
function ReportsState() {
  const revenueData = [4200, 4800, 5100, 4700, 5500, 6200, 5800];
  const kpis = [
    { label: "Monthly Revenue", value: "$62,400", change: "+12.3%", up: true, icon: TrendingUp },
    { label: "Active Clients", value: "47", change: "+4", up: true, icon: Users },
    { label: "Avg. Project Value", value: "$8,900", change: "-2.1%", up: false, icon: Target },
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B]">Revenue Trend</span>
        <span className="text-[9px] text-[#74695B]">Last 7 days</span>
      </div>
      <HoverCard>
        <div className="rounded-xl border border-black/[0.06] bg-white p-3 cursor-pointer hover:border-[#004225]/20 transition-colors">
          <Sparkline data={revenueData} color="#004225" height={36} />
        </div>
      </HoverCard>
      <div className="grid grid-cols-3 gap-2">
        {kpis.map((kpi, i) => (
          <HoverCard key={kpi.label}>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              className="rounded-lg border border-black/[0.06] bg-white p-2.5 text-center cursor-pointer hover:border-[#004225]/20 hover:shadow-sm transition-all"
            >
              <kpi.icon className="h-3 w-3 mx-auto mb-1 text-[#004225]/50" />
              <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B]">{kpi.label}</p>
              <p className="mt-0.5 text-sm font-bold text-[#11100E]">{kpi.value}</p>
              <p className={`text-[9px] font-bold ${kpi.up ? "text-[#004225]" : "text-red-500"}`}>
                {kpi.up ? <ArrowUpRight className="inline h-2.5 w-2.5" /> : <ArrowDownRight className="inline h-2.5 w-2.5" />}
                {kpi.change}
              </p>
            </motion.div>
          </HoverCard>
        ))}
      </div>
    </div>
  );
}

/* --- State 3: Client Portal --- */
function ClientPortalState() {
  const items = [
    { client: "Acme Corp", action: "Submitted Q3 budget approval", time: "2m ago", type: "approval" as const },
    { client: "TechVentures", action: "Uploaded new brand assets", time: "18m ago", type: "update" as const },
    { client: "GreenField Co", action: "Requested project timeline update", time: "1h ago", type: "request" as const },
    { client: "NorthStar Inc", action: "Approved milestone #4", time: "3h ago", type: "approval" as const },
  ];
  const typeStyles: Record<string, string> = {
    approval: "bg-[#004225]/10 text-[#004225]",
    update: "bg-blue-50 text-blue-600",
    request: "bg-orange-50 text-orange-600",
  };
  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B]">Client Activity</span>
        <motion.span
          whileHover={{ scale: 1.15 }}
          className="flex h-5 w-5 items-center justify-center rounded-full bg-[#004225] text-[8px] font-bold text-white cursor-pointer"
        >
          4
        </motion.span>
      </div>
      {items.map((item, i) => (
        <HoverCard key={item.client}>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 * i, duration: 0.35 }}
            className="flex items-start gap-2.5 rounded-lg border border-black/[0.06] bg-white p-2.5 cursor-pointer hover:border-[#004225]/15 hover:bg-[#004225]/[0.01] transition-colors"
          >
            <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[8px] font-bold ${typeStyles[item.type]}`}>
              {item.client[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold text-[#11100E]">{item.client}</p>
              <p className="text-[9px] text-[#74695B] truncate">{item.action}</p>
            </div>
            <span className="text-[8px] text-[#74695B] shrink-0">{item.time}</span>
          </motion.div>
        </HoverCard>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.01 }}
        className="rounded-lg bg-[#004225]/5 border border-[#004225]/15 px-3 py-2.5 flex items-center gap-2 cursor-pointer hover:bg-[#004225]/10 transition-colors"
      >
        <Bell className="h-3 w-3 text-[#004225]" />
        <span className="text-[10px] font-medium text-[#004225]">All client updates automatically synced</span>
      </motion.div>
    </div>
  );
}

/* --- State 4: Executive KPI Dashboard --- */
function ExecutiveState() {
  const mainKpis = [
    { label: "Total Revenue", value: "$847,200", icon: DollarSign, sub: "+18.2% vs last year" },
    { label: "Active Projects", value: "32", icon: Target, sub: "14 on track" },
    { label: "Team Members", value: "18", icon: Users, sub: "92% utilization" },
    { label: "Client NPS", value: "84", icon: TrendingUp, sub: "+6 pts" },
  ];
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        {mainKpis.map((kpi, i) => (
          <HoverCard key={kpi.label}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.08 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl border border-black/[0.06] bg-white p-3 cursor-pointer hover:border-[#004225]/20 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                <kpi.icon className="h-3 w-3 text-[#004225]/60" />
                <span className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B]">{kpi.label}</span>
              </div>
              <p className="text-lg font-bold tracking-tight text-[#11100E]">{kpi.value}</p>
              <p className="text-[9px] text-[#74695B] mt-0.5">{kpi.sub}</p>
            </motion.div>
          </HoverCard>
        ))}
      </div>
      <HoverCard>
        <div className="rounded-xl border border-black/[0.06] bg-white p-3 cursor-pointer hover:border-[#004225]/20 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#74695B]">Quarterly Revenue</span>
            <span className="text-[9px] font-bold text-[#004225]">+18.2%</span>
          </div>
          <BarChartMini data={[65, 72, 78, 85]} color="#004225" />
          <div className="flex justify-between mt-1.5">
            {["Q1", "Q2", "Q3", "Q4*"].map((q) => (
              <span key={q} className="text-[8px] text-[#74695B]">{q}</span>
            ))}
          </div>
        </div>
      </HoverCard>
    </div>
  );
}

/* --- State 5: Complete --- */
function CompleteState() {
  const widgets = [
    { label: "Revenue", value: "$847.2K", change: "+18%", icon: DollarSign, color: "#004225" },
    { label: "Projects", value: "32", change: "On track", icon: Layers, color: "#0f766e" },
    { label: "Team", value: "18", change: "92% utilized", icon: Users, color: "#6366f1" },
    { label: "Tasks", value: "47", change: "8 overdue", icon: CheckCircle2, color: "#1e40af" },
  ];
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        {widgets.map((w, i) => (
          <HoverCard key={w.label}>
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * i, duration: 0.35 }}
              className="rounded-xl border border-black/[0.06] bg-white p-2.5 cursor-pointer hover:border-[#004225]/20 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-1 mb-1">
                <w.icon className="h-3 w-3" style={{ color: w.color }} />
                <span className="text-[8px] font-bold uppercase tracking-[0.08em] text-[#74695B]">{w.label}</span>
              </div>
              <p className="text-base font-bold text-[#11100E]">{w.value}</p>
              <p className="text-[9px] text-[#74695B]">{w.change}</p>
            </motion.div>
          </HoverCard>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.02 }}
        className="relative overflow-hidden rounded-xl border border-[#004225]/20 bg-gradient-to-br from-[#004225]/5 to-[#004225]/10 p-5 text-center cursor-pointer transition-shadow hover:shadow-md"
      >
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-sm font-bold tracking-tight text-[#004225]">
            Everything. Connected.
          </p>
          <p className="mt-1 text-[10px] text-[#74695B]">
            One workspace. Complete visibility.
          </p>
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mx-auto mt-3 h-px w-12 bg-[#004225]/20"
          style={{ transformOrigin: "left" }}
        />
      </motion.div>
    </div>
  );
}

/* --- Top Bar --- */
function DashboardTopBar() {
  return (
    <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/[0.06]">
      <div className="flex items-center gap-2">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex h-6 w-6 items-center justify-center rounded-md bg-[#004225] cursor-pointer"
        >
          <Zap className="h-3 w-3 text-white" />
        </motion.div>
        <span className="text-[10px] font-bold text-[#11100E]">VantLaunch OS</span>
      </div>
      <div className="flex items-center gap-2">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-1 rounded-md border border-black/[0.06] bg-[#F8F6EF] px-2 py-1 cursor-pointer"
        >
          <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-[#004225]" />
          <span className="text-[8px] font-bold text-[#74695B]">Live</span>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex h-6 w-6 items-center justify-center rounded-full bg-black/[0.04] text-[9px] font-bold text-[#74695B] cursor-pointer hover:bg-black/[0.08] transition-colors"
        >
          JD
        </motion.div>
      </div>
    </div>
  );
}

/* --- Tab Bar --- */
function DashboardTabs() {
  const tabs = ["Overview", "Reports", "Clients", "Team", "Settings"];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex gap-3 mb-4 overflow-x-auto no-scrollbar">
      {tabs.map((tab, i) => (
        <motion.button
          key={tab}
          onClick={() => setActiveTab(i)}
          whileHover={{ color: "#11100E" }}
          className={`text-[10px] font-bold pb-1.5 shrink-0 transition-colors cursor-pointer ${
            activeTab === i
              ? "text-[#11100E] border-b-2 border-[#004225]"
              : "text-[#74695B] border-b-2 border-transparent hover:text-[#11100E]"
          }`}
        >
          {tab}
        </motion.button>
      ))}
    </div>
  );
}

/* --- Main Component --- */
export function InteractiveDashboard({ activeIndex }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const states = [ScatteredState, ConnectingState, ReportsState, ClientPortalState, ExecutiveState, CompleteState];

  return (
    <motion.div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-mid hover:shadow-lg transition-shadow duration-500"
    >
      <div className="p-4 sm:p-5">
        <DashboardTopBar />
        <DashboardTabs />

        <div className="relative min-h-[280px] sm:min-h-[340px]">
          <AnimatePresence mode="wait">
            {states.map((State, i) => (
              activeIndex === i && (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <State />
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="border-t border-black/[0.06] px-4 py-2 flex items-center justify-between bg-[#F8F6EF]/50">
        <div className="flex items-center gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: activeIndex === i ? 1 : 0.35,
                scale: activeIndex === i ? 1.2 : 1,
              }}
              transition={{ duration: 0.4 }}
              className="h-1.5 w-8 rounded-full transition-opacity"
              style={{ backgroundColor: activeIndex === i ? "#004225" : "#D1CCC2" }}
            />
          ))}
        </div>
        <span className="text-[8px] font-bold text-[#74695B] uppercase tracking-[0.1em]">
          Step {activeIndex + 1} / 6
        </span>
      </div>
    </motion.div>
  );
}
