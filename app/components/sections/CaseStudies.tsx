"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, TrendingDown, TrendingUp, Clock } from "lucide-react";
import Link from "next/link";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const CASE_STUDIES = [
  {
    name: "TeraMotors",
    tagline: "Workshop management operating system",
    problem: "Auto repair shops running on paper job cards, manual invoicing, and WhatsApp. No digital service history. No visibility into workshop operations or revenue.",
    solution: "A complete workshop management platform with customer records, job cards, estimates, invoicing, appointment scheduling, and team workflows — all in one place.",
    outcome: "Shops moved from paper to digital in days. Full visibility into every job, customer, and revenue stream. Scalable operations without adding admin staff.",
    image: "/media/teramotors-dashboard.webp",
    logo: "/logos/tera logo.png",
    accent: "#004225",
    externalHref: "https://app.teramotor.cc/register",
    metric: { label: "Admin time saved", from: "15h/wk", to: "2h/wk", icon: Clock },
  },
  {
    name: "SpeakBill",
    tagline: "Voice-to-invoice in under 60 seconds",
    problem: "Freelancers spending hours typing invoices manually, copying client details across tools, and managing EU compliance requirements across disconnected platforms.",
    solution: "A voice-powered invoicing system that generates professional, EU-compliant PDF invoices in under a minute — with client records and compliance handled automatically.",
    outcome: "Admin time reduced from hours to seconds per invoice. Freelancers bill faster and get paid sooner. Multi-currency support with full compliance built in.",
    image: "/media/speakbill-dashboard.png",
    logo: "/logos/speakbill-logo.png",
    accent: "#6366f1",
    externalHref: "https://speakbill.vantlaunch.com",
    metric: { label: "Invoice time", from: "45 min", to: "60 sec", icon: TrendingDown },
  },
  {
    name: "Gari",
    tagline: "Driver-to-workshop marketplace",
    problem: "Drivers calling around for workshop availability and pricing. No digital service history. Cash payments with no record. Workshops invisible to new customers.",
    solution: "A mobile marketplace connecting drivers and workshops — with booking, digital payments, service history tracking, and workshop storefronts built in.",
    outcome: "Drivers find, book, pay, and track in one app. Workshops get a digital storefront generating new business. Complete digital service history for every vehicle.",
    image: "/media/gari-home.webp",
    logo: "/logos/logo_gari_full.png",
    accent: "#10b981",
    externalHref: "/work/gari",
    metric: { label: "Workshop visibility", from: "0", to: "100% digital", icon: TrendingUp },
  },
];

function AnimatedMetric({
  metric,
  visible,
}: {
  metric: (typeof CASE_STUDIES)[number]["metric"];
  visible: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-lg border border-black/[0.06] bg-[#F8F6EF] p-3"
    >
      <div className="flex items-center gap-2 mb-2">
        <metric.icon className="h-3.5 w-3.5 text-[#004225]" />
        <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#74695B]">{metric.label}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-[#74695B] line-through">{metric.from}</span>
        <span className="text-xs text-[#74695B]">→</span>
        <motion.span
          initial={{ scale: 0 }}
          animate={visible ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 300 }}
          className="text-sm font-bold text-[#004225]"
        >
          {metric.to}
        </motion.span>
      </div>
    </motion.div>
  );
}

export function CaseStudiesSection() {
  const { shouldReduceMotion } = useMobileMotion();

  return (
    <section className="border-t border-black/10 bg-[#F8F6EF] px-6 py-16 text-[#11100E] sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">
            Case Studies
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Real problems. Custom solutions. Measurable outcomes.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#74695B] sm:text-lg">
            Here is what happens when businesses stop running on disconnected tools and start operating from a system built around how they work.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {CASE_STUDIES.map((study, i) => (
            <motion.div
              key={study.name}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-mid transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-black/10 bg-[#efe2c7]">
                {study.image ? (
                  <motion.div
                    className="relative h-full w-full"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={study.image}
                      alt={study.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-contain p-3"
                    />
                  </motion.div>
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#F8F6EF]" />
                )}
                {/* Device mockup chrome */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-black/[0.03] flex items-center px-3 gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="relative h-9 w-24">
                    <Image
                      src={study.logo}
                      alt={`${study.name} logo`}
                      fill
                      sizes="96px"
                      className="object-contain object-left"
                    />
                  </div>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B]">{study.tagline}</p>

                <div className="mt-3 space-y-3">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#74695B]">Problem</span>
                    <p className="mt-1 text-[13px] leading-relaxed text-[#74695B]">{study.problem}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#74695B]">Solution</span>
                    <p className="mt-1 text-[13px] leading-relaxed text-[#11100E]">{study.solution}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#004225]">Outcome</span>
                    <p className="mt-1 text-[13px] font-medium leading-relaxed text-[#11100E]">{study.outcome}</p>
                  </div>

                  <AnimatedMetric metric={study.metric} visible={true} />
                </div>

                <div className="mt-auto pt-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href={study.externalHref}
                      target={study.externalHref.startsWith("http") ? "_blank" : undefined}
                      rel={study.externalHref.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#11100E] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#004225]"
                    >
                      See {study.name}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
