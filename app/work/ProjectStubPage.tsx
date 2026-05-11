"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
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
import type { WorkStubConfig } from "../components/stub-projects";

export function ProjectStubPage({ config }: { config: WorkStubConfig }) {
  const mailto = `mailto:build@vantlaunch.com?subject=${config.emailSubject}`;
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

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zinc text-slate-50 selection:bg-white/10">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.14]" />
        <div className="absolute left-1/2 top-[-20%] h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-[140px]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-zinc/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link href="/#ventures" className="type-work-back-link">
            <ArrowLeft className="h-4 w-4" />
            Products
          </Link>
          <Link href="/" className="type-brand-xl">
            VantLaunch
          </Link>
          <Link href={mailto} className="type-nav-accent">
            Contact
          </Link>
        </div>
      </header>

      <article className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-14 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
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
            <p className="type-prose-muted mt-6 max-w-3xl text-zinc-300">{config.detail}</p>
          ) : null}

          {config.capabilities.length > 0 ? (
            <ul className="mt-8 flex flex-wrap gap-2">
              {config.capabilities.map((cap) => (
                <li key={cap}>
                  <span className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-200">
                    {cap}
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="type-prose-muted mt-8 max-w-2xl space-y-3"
        >
          {config.bullets.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-white/40" />
              {item}
            </li>
          ))}
        </motion.ul>

        <motion.figure
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-12 overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-zinc-surface shadow-[0_40px_100px_-40px_rgba(0,0,0,0.85)]"
        >
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
            {config.figureCaption}
          </figcaption>
        </motion.figure>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.02] px-8 py-10"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="type-intro-wide mx-auto max-w-2xl text-zinc-200 md:mx-0">
                Want to discuss the product direction, release timing, or a possible automotive
                workflow fit?
              </p>
              <Link href={mailto} className="type-email-cta-solid mt-8 inline-flex">
                <Mail className="h-5 w-5" />
                Contact VantLaunch
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
                    <span className="text-[11px] font-semibold leading-tight text-zinc-200">{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </article>
    </div>
  );
}
