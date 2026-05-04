"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Mail, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { WORK_STUBS, type WorkStubConfig } from "./stub-projects";
import { TeraMotorsContent } from "./teramotors/TeraMotorsContent";
import { SalaselContent } from "./salasel/SalaselContent";
import {
  siBetterauth,
  siMongodb,
  siNextdotjs,
  siResend,
  siShadcnui,
  siTailwindcss,
  siTypescript,
  siVercel,
} from "simple-icons";

type ProjectOverlayProps = {
  activeSlug: string | null;
  onClose: () => void;
};

export function ProjectOverlay({ activeSlug, onClose }: ProjectOverlayProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (activeSlug) {
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => {
        setIsVisible(false);
      }, 100);
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeSlug]);

  const STACK_TECH = [
    { label: "Next.js", icon: siNextdotjs },
    { label: "TypeScript", icon: siTypescript },
    { label: "Tailwind", icon: siTailwindcss },
    { label: "shadcn/ui", icon: siShadcnui },
    { label: "MongoDB", icon: siMongodb },
    { label: "Vercel", icon: siVercel },
    { label: "Resend", icon: siResend },
    { label: "Better Auth / NextAuth", icon: siBetterauth },
  ] as const;

  function renderContent(slug: string) {
    if (slug === "teramotors") return <TeraMotorsContent />;
    if (slug === "salasel") return <SalaselContent />;
    
    const config = WORK_STUBS[slug as keyof typeof WORK_STUBS];
    if (!config) return null;

    const mailto = `mailto:build@vantlaunch.com?subject=${config.emailSubject}`;

    return (
      <div className="space-y-12">
        <section>
          <div className="mb-8 flex flex-wrap gap-2">
            {config.badges.map((b) => (
              <span key={b} className="type-chip">
                {b}
              </span>
            ))}
          </div>

          <h1 className="type-case-h1 text-balance">{config.title}</h1>
          <p className="type-case-lede max-w-3xl">{config.lede}</p>
          {config.detail ? (
            <p className="type-prose-muted mt-6 max-w-3xl text-slate-400">{config.detail}</p>
          ) : null}

          {config.capabilities.length > 0 ? (
            <ul className="mt-8 flex flex-wrap gap-2">
              {config.capabilities.map((cap) => (
                <li key={cap}>
                  <span className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
                    {cap}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
        </section>

        <ul className="type-prose-muted max-w-2xl space-y-3">
          {config.bullets.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent-blue" />
              {item}
            </li>
          ))}
        </ul>

        <figure className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-zinc-surface shadow-[0_40px_100px_-40px_rgba(0,0,0,0.85)]">
          <div className="relative mx-auto aspect-[10/16] w-full max-w-sm sm:max-w-md md:aspect-[16/10] md:max-h-[min(70vh,640px)] md:max-w-none">
            <Image
              src={config.imageSrc}
              alt={config.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover object-top md:object-center"
            />
          </div>
          <figcaption className="type-figure-caption border-t border-white/[0.06] bg-zinc-surface/95 px-5 py-4">
            {config.figureCaption} Full write-up, stack notes, and outcomes will land here soon.
          </figcaption>
        </figure>

        <section className="overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.02] px-8 py-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="type-intro-wide mx-auto max-w-2xl text-slate-300 md:mx-0">
                We&apos;re drafting the long-form case study for this product. Want the technical or GTM
                story first?
              </p>
              <Link href={mailto} className="type-email-cta-solid mt-8 inline-flex">
                <Mail className="h-5 w-5" />
                Email VantLaunch
                <ArrowUpRight className="h-5 w-5 opacity-70" />
              </Link>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-black/25 p-5 md:w-[320px]">
              <p className="type-meta-uppercase mb-3 text-white/60">Typical stack</p>
              <div className="grid grid-cols-2 gap-2">
                {STACK_TECH.map((tech) => (
                  <div key={tech.label} className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-zinc/55 px-3 py-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-zinc/70">
                      <svg role="img" viewBox="0 0 24 24" className="h-4 w-4" aria-label={tech.icon.title} fill={`#${tech.icon.hex}`}>
                        <path d={tech.icon.path} />
                      </svg>
                    </span>
                    <span className="text-[11px] font-semibold leading-tight text-slate-200">{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <AnimatePresence>
      {activeSlug && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc/80 backdrop-blur-2xl"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="relative h-full w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-zinc shadow-2xl"
          >
            <div className="absolute right-6 top-6 z-50">
              <button
                onClick={onClose}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                aria-label="Close overlay"
              >
                <X className="h-6 w-6 transition-transform group-hover:rotate-90" />
              </button>
            </div>

            <div className="h-full overflow-y-auto overflow-x-hidden scroll-smooth px-6 py-12 md:px-12 md:py-16">
              <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute inset-0 bg-dot-grid opacity-[0.08]" />
                <div className="absolute left-1/2 top-[-10%] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent-blue/[0.03] blur-[120px]" />
              </div>

              <div className="relative z-10">
                {renderContent(activeSlug)}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
