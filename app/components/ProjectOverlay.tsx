"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Mail, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { WORK_STUBS } from "./stub-projects";
import { TeraMotorsContent } from "../work/teramotors/TeraMotorsContent";
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
  useEffect(() => {
    if (activeSlug) {
      document.body.style.overflow = "hidden";
    } else {
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
    { label: "Better Auth", icon: siBetterauth },
  ] as const;

  function renderContent(slug: string) {
    if (slug === "teramotors") return <TeraMotorsContent onClose={onClose} />;
    
    const config = WORK_STUBS[slug as keyof typeof WORK_STUBS];
    if (!config) return null;

    return (
      <div className="space-y-16">
        <section>
          <div className="mb-8 flex flex-wrap gap-2">
            {config.badges.map((b) => (
              <span key={b} className="type-chip">
                {b}
              </span>
            ))}
          </div>

          <h1 className="type-case-h1">{config.title}</h1>
          <p className="type-case-lede max-w-3xl">{config.lede}</p>
          
          {config.detail && (
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">{config.detail}</p>
          )}

          {config.capabilities.length > 0 && (
            <ul className="mt-10 flex flex-wrap gap-2">
              {config.capabilities.map((cap) => (
                <li key={cap}>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300">
                    {cap}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <figure className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-surface shadow-2xl">
          <div className="relative mx-auto aspect-[10/16] w-full max-w-sm sm:max-w-md md:aspect-[16/10] md:max-h-[min(70vh,640px)] md:max-w-none">
            <Image
              src={config.imageSrc}
              alt={config.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover object-top md:object-center"
            />
          </div>
        </figure>

        <ul className="max-w-3xl space-y-4">
          {config.bullets.map((item) => (
            <li key={item} className="flex gap-4 text-lg text-zinc-400">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
              {item}
            </li>
          ))}
        </ul>

        <section className="rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-10 md:p-14">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-center">
            <div>
              <h3 className="text-2xl font-bold text-white">Interested in the technical build?</h3>
              <p className="mt-4 text-lg text-zinc-400">
                We&apos;re happy to share the architecture, stack decisions, and outcomes of this project in detail.
              </p>
              <button 
                onClick={() => {
                  onClose();
                  window.location.hash = "contact";
                }}
                className="type-email-cta-solid mt-10"
              >
                <Mail className="h-5 w-5" />
                Start an Inquiry
                <ArrowUpRight className="h-5 w-5 opacity-50" />
              </button>
            </div>

            <div className="rounded-3xl border border-white/5 bg-black/40 p-6">
              <p className="type-meta-uppercase mb-5">Primary stack</p>
              <div className="grid grid-cols-2 gap-3">
                {STACK_TECH.map((tech) => (
                  <div key={tech.label} className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 p-2.5">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-black/50">
                      <svg role="img" viewBox="0 0 24 24" className="h-4 w-4" fill="white">
                        <path d={tech.icon.path} />
                      </svg>
                    </span>
                    <span className="text-[10px] font-bold text-zinc-300">{tech.label}</span>
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="relative h-full w-full max-w-6xl overflow-hidden rounded-[3rem] border border-white/10 bg-zinc shadow-2xl"
          >
            <div className="absolute right-8 top-8 z-50">
              <button
                onClick={onClose}
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 backdrop-blur-md transition-all hover:bg-white/10 hover:text-white"
                aria-label="Close overlay"
              >
                <X className="h-6 w-6 transition-transform group-hover:rotate-90" />
              </button>
            </div>

            <div className="h-full overflow-y-auto scroll-smooth px-8 py-16 md:px-20 md:py-24">
              <div className="relative z-10 mx-auto max-w-4xl">
                {renderContent(activeSlug)}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
