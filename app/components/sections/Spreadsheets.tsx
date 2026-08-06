"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { InteractiveDashboard } from "@/app/components/InteractiveDashboard";
import { useT } from "@/app/lib/LocaleContext";

export function SpreadsheetsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const t = useT().t;

  const PROBLEMS = t.problem.items.map((text, i) => ({
    text,
    icon: String(i + 1).padStart(2, "0"),
    visual: "",
  }));

  // Detect mobile for switching interaction mode
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Mobile: scroll-based activation via IntersectionObserver
  useEffect(() => {
    if (!isMobile) return;

    const refs = itemRefs.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (intersecting.length > 0) {
          const idx = refs.indexOf(intersecting[0].target as HTMLDivElement);
          if (idx >= 0) setActiveIndex(idx);
        }
      },
      { threshold: [0.3, 0.6], rootMargin: "-5% 0px -5% 0px" }
    );

    refs.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [isMobile]);

  const handleProblemActivate = (i: number) => {
    if (!isMobile) setActiveIndex(i);
  };

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden border-t border-black/10 bg-[#F8F6EF] px-6 py-16 text-[#11100E] sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">
            {t.problem.tag}
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t.problem.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#74695B] sm:text-lg">
            {t.problem.sub}
          </p>
        </motion.div>

        {/* Dashboard on top for mobile, right column for desktop */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Dashboard: first in DOM → top on mobile, right on desktop via order */}
          <div className="lg:sticky lg:top-28 lg:order-last">
            <InteractiveDashboard activeIndex={activeIndex} />
          </div>

          {/* Problems: second in DOM → bottom on mobile, left on desktop via order */}
          <div className="relative lg:order-first">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-black/[0.06] hidden lg:block">
              <motion.div
                animate={{ top: `${(activeIndex / (PROBLEMS.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 w-px bg-[#004225]"
                style={{ height: `${100 / PROBLEMS.length}%` }}
              />
            </div>

            <div className="space-y-3 relative">
              {PROBLEMS.map((problem, i) => (
                <motion.div
                  key={i}
                  ref={(el) => { itemRefs.current[i] = el; }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => handleProblemActivate(i)}
                  className="group relative pl-14 lg:pl-12 cursor-pointer"
                >
                  {/* Connector dot */}
                  <div className="absolute left-[14px] lg:left-[11px] top-3.5 z-10">
                    <motion.div
                      animate={{
                        scale: activeIndex === i ? 1.3 : 1,
                        backgroundColor: activeIndex >= i ? "#004225" : "transparent",
                        borderColor: activeIndex >= i ? "#004225" : "rgba(0,0,0,0.15)",
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="h-3 w-3 rounded-full border-2 bg-white"
                    />
                  </div>

                  <motion.div
                    animate={{
                      backgroundColor: activeIndex === i ? "rgb(255,255,255)" : "rgba(255,255,255,0.5)",
                      borderColor: activeIndex === i ? "rgba(0,66,37,0.25)" : "rgba(0,0,0,0.05)",
                      boxShadow: activeIndex === i
                        ? "0 4px 24px rgba(0,0,0,0.06)"
                        : "0 1px 2px rgba(0,0,0,0.02)",
                    }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-xl border p-4 transition-all duration-300 group-hover:bg-white sm:p-5"
                  >
                    <div className="flex items-start gap-3">
                      <motion.span
                        animate={{
                          color: activeIndex >= i ? "#004225" : "#74695B",
                          opacity: activeIndex >= i ? 1 : 0.45,
                        }}
                        transition={{ duration: 0.4 }}
                        className="text-[10px] font-bold tracking-[0.12em] mt-0.5 shrink-0"
                      >
                        {problem.icon}
                      </motion.span>
                      <div>
                        <motion.p
                          animate={{
                            color: activeIndex === i ? "#11100E" : "#74695B",
                            fontWeight: activeIndex === i ? 600 : 500,
                          }}
                          transition={{ duration: 0.4 }}
                          className="text-sm leading-relaxed select-none"
                        >
                          {problem.text}
                        </motion.p>
                        <motion.div
                          animate={{
                            opacity: activeIndex === i ? 1 : 0,
                            height: activeIndex === i ? "auto" : 0,
                            marginTop: activeIndex === i ? 4 : 0,
                          }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-[11px] text-[#74695B]">{problem.visual}</p>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="relative pl-14 lg:pl-12 pt-2"
              >
                <div className="rounded-2xl border border-[#004225]/20 bg-gradient-to-br from-[#004225]/[0.03] to-[#004225]/[0.01] p-5 text-center sm:p-6">
                  <p className="text-base font-bold tracking-tight text-[#004225] sm:text-lg">
                    {t.problem.tagline}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
