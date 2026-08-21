"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  BarChart3, Globe, Users, Workflow, FileText, Layers, ShieldCheck, Smartphone,
} from "lucide-react";
import { SystemsDashboard } from "@/app/components/SystemsDashboard";
import { useT } from "@/app/lib/LocaleContext";

const CATEGORIES = [
  { id: "executive" as const, label: "Executive Hub", icon: BarChart3 },
  { id: "client" as const, label: "Client Portal", icon: Globe },
  { id: "crm" as const, label: "Internal CRM", icon: Users },
  { id: "automation" as const, label: "Automation", icon: Workflow },
  { id: "reporting" as const, label: "Reporting", icon: FileText },
  { id: "team" as const, label: "Team Mgmt", icon: Layers },
  { id: "approval" as const, label: "Approvals", icon: ShieldCheck },
  { id: "mobile" as const, label: "Mobile", icon: Smartphone },
] as const;

type SystemId = (typeof CATEGORIES)[number]["id"];

const CYCLE_INTERVAL = 4000;
const RESUME_DELAY = 8000;

export function SolutionsSection() {
  const [activeSystem, setActiveSystem] = useState<SystemId>("executive");
  const t = useT().t;
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Track viewport visibility
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Auto-cycle when in view and not paused
  useEffect(() => {
    if (!inView || isPaused) return;
    const interval = setInterval(() => {
      setActiveSystem((prev) => {
        const idx = CATEGORIES.findIndex((c) => c.id === prev);
        return CATEGORIES[(idx + 1) % CATEGORIES.length].id;
      });
    }, CYCLE_INTERVAL);
    return () => clearInterval(interval);
  }, [inView, isPaused]);

  // When user clicks, pause cycling then resume after delay
  const handleSelect = useCallback((id: SystemId) => {
    setActiveSystem(id);
    setIsPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, RESUME_DELAY);
  }, []);

  // Cleanup pause timer
  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="systems"
      className="scroll-mt-20 border-t border-black/10 bg-[#F8F6EF] px-4 py-16 text-[#11100E] sm:px-6 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-center sm:mb-14"
        >
          <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">
            {t.systems.tag}
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t.systems.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#74695B] sm:text-lg">
            {t.systems.sub}
          </p>
        </motion.div>

        {/* Mobile: horizontal category selector */}
        <div className="lg:hidden mb-6 -mx-4 px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar snap-x snap-mandatory">
            {CATEGORIES.map((cat) => {
              const isActive = activeSystem === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => handleSelect(cat.id)}
                  whileTap={{ scale: 0.95 }}
                  className={`flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 snap-start transition-colors ${
                    isActive
                      ? "bg-[#004225] text-white shadow-sm"
                      : "bg-white border border-black/10 text-[#74695B] hover:border-[#004225]/30 hover:text-[#11100E]"
                  }`}
                >
                  <cat.icon className="h-3.5 w-3.5" />
                  <span className="text-[10px] font-bold whitespace-nowrap">{cat.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <SystemsDashboard activeSystem={activeSystem} onSelect={handleSelect} />

          {/* Auto-cycle progress indicator */}
          <div className="mt-3 flex items-center justify-center gap-2">
            {CATEGORIES.map((cat) => {
              const idx = CATEGORIES.findIndex((c) => c.id === activeSystem);
              const catIdx = CATEGORIES.findIndex((c) => c.id === cat.id);
              const isActive = catIdx === idx;
              const isNext = catIdx === (idx + 1) % CATEGORIES.length;
              return (
                <motion.button
                  key={cat.id}
                  onClick={() => handleSelect(cat.id)}
                  animate={{
                    width: isActive ? 24 : 6,
                    backgroundColor: isActive ? "#004225" : isNext && !isPaused ? "#004225" : "#D1CCC2",
                    opacity: isActive ? 1 : 0.45,
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="h-1.5 rounded-full cursor-pointer hover:opacity-80"
                  title={cat.label}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
