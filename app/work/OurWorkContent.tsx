"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Play, TrendingUp, Clock, Shield, BarChart3, Zap } from "lucide-react";
import { VideoModal } from "../components/VideoModal";

const METRICS = [
  { value: "8+", label: "Businesses running our systems", icon: Zap },
  { value: "18 hrs", label: "Admin time saved weekly — TeraMotors", icon: Clock },
  { value: "100%", label: "Source ownership — no lock-in", icon: Shield },
  { value: "3–8 wks", label: "From kickoff to live deployment", icon: TrendingUp },
];

const CLIENTS = [
  { src: "/logos/tera logo.png", alt: "TeraMotors", href: "/work/teramotors" },
  { src: "/logos/speakbill-logo.png", alt: "SpeakBill", href: "/work/speakbill" },
  { src: "/logos/logo_gari_full.png", alt: "Gari", href: "/work/gari" },
  { src: "/logos/logo-salasel2.png", alt: "Salasel", href: "#" },
  { src: "/logos/amana-logo-Bo-ciKV0.png", alt: "Amana", href: "#" },
  { src: "/logos/arslan logo.png", alt: "Arslan", href: "#" },
];

const CASE_STUDIES = [
  {
    name: "TeraMotors",
    subtitle: "Workshop Operating System",
    outcome: "Paper to platform in 5 weeks",
    metrics: [
      { value: "18 hrs", label: "Saved weekly vs manual job cards" },
      { value: "100%", label: "Digital invoicing — zero lost bills" },
      { value: "1", label: "Dashboard replaces 4 tools" },
    ],
    description:
      "A complete workshop OS replacing paper job cards, manual invoicing, Excel spreadsheets, and WhatsApp tracking. The owner now sees every job, part, and invoice in one real-time dashboard.",
    image: "/media/teramotors-dashboard.webp",
    href: "/work/teramotors",
    demoVideo: "/media/teramotors-demo.mp4",
    demoPoster: "/media/teramotors-demo-poster.jpg",
  },
  {
    name: "SpeakBill",
    subtitle: "Voice-Powered Invoicing",
    outcome: "Invoice in under 60 seconds",
    metrics: [
      { value: "<60s", label: "From voice to invoice" },
      { value: "100%", label: "EU-compliant PDFs, auto-generated" },
      { value: "3", label: "Currencies supported" },
    ],
    description:
      "Voice-to-invoice system that turns natural speech into professional invoices. Freelancers went from hours of manual typing to seconds of speaking. Client records, PDFs, and compliance handled automatically.",
    image: "/media/speakbill-dashboard.png",
    href: "/work/speakbill",
    demoVideo: "/media/6F57B964-0E1C-4DA3-9B6B-D76E46A30FA0.MP4",
  },
  {
    name: "Gari",
    subtitle: "Customer Service Marketplace",
    outcome: "Real-time workshop discovery",
    metrics: [
      { value: "24/7", label: "Workshop availability visible" },
      { value: "100%", label: "Digital service history" },
      { value: "1 app", label: "Replaces phone calls + cash" },
    ],
    description:
      "Mobile-first customer portal for auto service — workshop discovery, vehicle garage, active job tracking, digital payments, and service history. Drivers find, book, pay, and track in one app.",
    image: "/media/gari-home.webp",
    href: "/work/gari",
  },
];

export function OurWorkContent() {
  const [activeVideo, setActiveVideo] = useState<{ src: string; poster?: string; title: string } | null>(null);

  return (
    <div className="relative min-h-screen bg-[#F8F6EF] text-[#11100E] selection:bg-[#004225]/15">
      {/* Ambient bg */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.04]" />
        <div className="absolute left-1/2 top-[-10%] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#004225]/[0.04] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-16 sm:pt-20 md:pt-28">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">
            Our work
          </span>
          <h1 className="font-display mt-5 text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl">
            18 hrs saved. 60-second invoicing. Full ownership.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#74695B] sm:text-lg">
            Three businesses. Three operating systems. Zero subscriptions to juggle.
            Each one replaced scattered tools with a single platform they own.
          </p>
        </motion.div>

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-black/10 bg-white p-5 shadow-mid sm:p-6"
            >
              <m.icon className="h-6 w-6 text-[#004225]" />
              <p className="font-display mt-4 text-3xl font-bold tracking-tight">{m.value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#74695B]">
                {m.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-16"
        >
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#74695B]">
            Trusted by
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {CLIENTS.map((client) => (
              <Link
                key={client.alt}
                href={client.href}
                className="group flex items-center"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={120}
                  height={44}
                  className="h-8 w-auto object-contain opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Case studies */}
        <div className="mt-20 space-y-12">
          {CASE_STUDIES.map((study, i) => (
            <motion.section
              key={study.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-mid"
            >
              <div className="grid md:grid-cols-[1.2fr_1fr]">
                {/* Screenshot */}
                <Link
                  href={study.href}
                  className="group relative block aspect-[16/10] bg-[#efe2c7] md:aspect-auto"
                >
                  <Image
                    src={study.image}
                    alt={`${study.name} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {study.demoVideo && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveVideo({ src: study.demoVideo!, poster: study.demoPoster, title: study.name });
                      }}
                      className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-xs font-bold text-white backdrop-blur-sm transition-colors hover:bg-black/85"
                    >
                      <Play className="h-3.5 w-3.5" />
                      Watch demo
                    </button>
                  )}
                </Link>

                {/* Details */}
                <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#004225]">
                    {study.subtitle}
                  </span>
                  <h2 className="font-display mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    {study.name}
                  </h2>
                  <p className="mt-1 text-base font-semibold text-[#74695B]">
                    {study.outcome}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#74695B]">
                    {study.description}
                  </p>

                  {/* Outcome metrics */}
                  <div className="mt-6 grid gap-2">
                    {study.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="flex items-center gap-3 rounded-lg bg-[#F8F6EF] px-4 py-2.5"
                      >
                        <span className="font-display text-lg font-bold tracking-tight text-[#004225]">
                          {m.value}
                        </span>
                        <span className="text-xs font-medium text-[#74695B]">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={study.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#004225] transition-colors hover:text-[#11100E]"
                  >
                    Read full case study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.section>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-20 rounded-2xl border border-[#004225]/20 bg-[#004225] px-8 py-12 text-center text-white shadow-mid sm:py-16"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to build yours?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/70">
            We&apos;re taking on 3 more founding clients at current rates.
            After that, standard pricing applies.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#004225] transition-colors hover:bg-[#F8F6EF]"
          >
            Start a project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.section>
      </div>

      {activeVideo && (
        <VideoModal
          open={!!activeVideo}
          onClose={() => setActiveVideo(null)}
          src={activeVideo.src}
          poster={activeVideo.poster}
          title={activeVideo.title}
        />
      )}
    </div>
  );
}
