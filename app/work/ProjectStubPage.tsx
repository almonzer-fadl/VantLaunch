"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import type { WorkStubConfig } from "../components/stub-projects";
import { GariPhonePreview, GariScreenGallery } from "../components/GariPhonePreview";
import { CONTACT_EMAILS } from "@/app/lib/constants";

export function ProjectStubPage({ config }: { config: WorkStubConfig }) {
  const mailto = `mailto:${CONTACT_EMAILS.company}?subject=${config.emailSubject}`;

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
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/vantlaunch-logo.png"
              alt="VantLaunch logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg object-contain"
            />
            <span className="type-brand-xl">VantLaunch</span>
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

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          {config.slug === "gari" ? (
            <>
              <GariPhonePreview />
              <div className="mt-12">
                <GariScreenGallery />
              </div>
            </>
          ) : config.slug === "speakbill" ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { src: "/media/speakbill-dashboard.png", alt: "SpeakBill dashboard" },
                { src: "/media/speakbill-mic.png", alt: "SpeakBill voice input" },
                { src: "/media/speakbill-invoice-preview.png", alt: "SpeakBill invoice preview" },
                { src: "/media/speakbill-invoice-review.png", alt: "SpeakBill invoice review" },
              ].map((img) => (
                <figure key={img.src} className="overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-surface shadow-lg">
                  <div className="relative aspect-[16/10] w-full bg-[#0a0f1a]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-contain object-center"
                    />
                  </div>
                </figure>
              ))}
            </div>
          ) : (
            <figure className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-zinc-surface shadow-[0_40px_100px_-40px_rgba(0,0,0,0.85)]">
              <div className="relative mx-auto aspect-[780/2232] w-full max-w-sm bg-white sm:max-w-md">
                <Image
                  src={config.imageSrc}
                  alt={config.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-contain object-top"
                />
              </div>
              <figcaption className="type-figure-caption border-t border-white/[0.06] bg-zinc-surface/95 px-5 py-4">
                {config.figureCaption}
              </figcaption>
            </figure>
          )}
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.02] px-8 py-10"
        >
          {config.slug === "speakbill" ? (
            <div>
              <p className="type-intro-wide mx-auto max-w-2xl text-zinc-200 md:mx-0">
                Ready to try SpeakBill? Live now — start creating invoices by voice.
              </p>
              <a
                href="https://speakbill.vantlaunch.com"
                target="_blank"
                rel="noopener noreferrer"
                className="type-email-cta-solid mt-8 inline-flex"
              >
                Visit SpeakBill
                <ArrowUpRight className="h-5 w-5 opacity-70" />
              </a>
            </div>
          ) : (
            <div>
              <p className="type-intro-wide mx-auto max-w-2xl text-zinc-200 md:mx-0">
                Want updates on Gari or have an automotive workflow to discuss?
              </p>
              <Link href={mailto} className="type-email-cta-solid mt-8 inline-flex">
                <Mail className="h-5 w-5" />
                Contact VantLaunch
                <ArrowUpRight className="h-5 w-5 opacity-70" />
              </Link>
            </div>
          )}
        </motion.section>
      </article>
    </div>
  );
}
