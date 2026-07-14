import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import type { WorkStubConfig } from "./stub-projects";

export function ProjectStubPage({ config }: { config: WorkStubConfig }) {
  const mailto = `mailto:build@vantlaunch.com?subject=${config.emailSubject}`;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-obsidian text-slate-50 selection:bg-accent-indigo/30">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 noise" />
        <div className="absolute inset-0 bg-dot-grid opacity-[0.14]" />
        <div className="absolute left-1/2 top-[-20%] h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-accent-indigo/[0.07] blur-[140px]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-obsidian/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link href="/#ventures" className="type-work-back-link">
            <ArrowLeft className="h-4 w-4" />
            Our work
          </Link>
          <Link href="/" className="type-brand-xl">
            VantLaunch
          </Link>
          <Link href={mailto} className="type-nav-accent">
            Ask about this build
          </Link>
        </div>
      </header>

      <article className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-14 md:pt-20">
        <div className="mb-8 flex flex-wrap gap-2">
          {config.badges.map((b) => (
            <span key={b} className="type-chip">
              {b}
            </span>
          ))}
          <span className="rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-200/90">
            Case study in progress
          </span>
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

        <ul className="type-prose-muted mt-8 max-w-2xl space-y-3">
          {config.bullets.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent-indigo" />
              {item}
            </li>
          ))}
        </ul>

        <figure className="relative mt-12 overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-obsidian-surface shadow-[0_40px_100px_-40px_rgba(0,0,0,0.85)]">
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
          <figcaption className="type-figure-caption border-t border-white/[0.06] bg-obsidian-surface/95 px-5 py-4">
            {config.figureCaption} Full write-up, stack notes, and outcomes will land here soon.
          </figcaption>
        </figure>

        <section className="mt-16 rounded-[1.75rem] border border-white/[0.08] bg-white/[0.02] px-8 py-10 text-center">
          <p className="type-intro-wide mx-auto max-w-2xl text-slate-300">
            We&apos;re drafting the long-form case study for this product. Want the technical or GTM
            story first?
          </p>
          <Link href={mailto} className="type-email-cta-solid mt-8">
            <Mail className="h-5 w-5" />
            Email VantLaunch
            <ArrowUpRight className="h-5 w-5 opacity-70" />
          </Link>
        </section>
      </article>
    </div>
  );
}
