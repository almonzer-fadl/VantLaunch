"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const CASE_STUDIES = [
  {
    name: "TeraMotors",
    tagline: "Workshop management operating system",
    before: "Paper job cards, manual invoicing, spreadsheets for tracking customers and parts. WhatsApp messages scattered across phones. No visibility into workshop operations.",
    system: "Customer and vehicle records, job cards, estimates, invoicing, appointment scheduling, parts inventory, team workflows — all in one place.",
    replaced: "Paper job cards, manual invoicing, Excel spreadsheets, WhatsApp tracking, disconnected billing, no digital service history.",
    value: "Auto repair shops start from a working system we set up, brand, configure, customize, deploy, and support.",
    image: "/media/teramotors-dashboard.webp",
    logo: "/logos/tera logo.png",
    accent: "#004225",
    externalHref: "https://app.teramotor.cc/register",
  },
  {
    name: "SpeakBill",
    tagline: "Voice-to-invoice in under 60 seconds",
    before: "Freelancers typing invoices manually, copying client details across tools, spending hours on billing instead of billable work.",
    system: "Voice-to-invoice — speak your bill and get a professional, EU-compliant PDF in under a minute. Client records and compliance handled automatically.",
    replaced: "Manual invoice typing, template-switching, client data re-entry, PDF generation tools.",
    value: "Multi-currency, EU-compliant PDFs. Reduced admin from hours to seconds. Freelancers bill faster and get paid sooner.",
    image: "/media/speakbill-dashboard.png",
    logo: "/logos/speakbill-logo.png",
    accent: "#6366f1",
    externalHref: "https://speakbill.vantlaunch.com",
  },
  {
    name: "Gari",
    tagline: "Driver-to-workshop marketplace",
    before: "Drivers calling around for workshop availability and pricing. No digital service history. Cash payments with no record.",
    system: "A mobile marketplace for workshop discovery, booking, digital payments, and service history — replacing phone calls, paper records, and cash.",
    replaced: "Phone calls for pricing, paper service records, cash payments, no vehicle history tracking.",
    value: "Drivers find, book, pay, and track in one app. Workshops get a digital storefront. 100% digital service history.",
    image: "/media/gari-home.webp",
    logo: "/logos/logo_gari_full.png",
    accent: "#10b981",
    externalHref: "/work/gari",
  },
];

export function CaseStudiesSection() {
  const { shouldReduceMotion } = useMobileMotion();

  return (
    <section className="border-t border-black/10 bg-[#F8F6EF] px-6 py-16 text-[#11100E] sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">
            Case Studies
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Systems we have built
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#74695B] sm:text-lg">
            Real products that replaced manual operations with owned software. Here is what happens when a business stops running on spreadsheets.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {CASE_STUDIES.map((study, i) => (
            <motion.div
              key={study.name}
              initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, delay: shouldReduceMotion ? 0 : i * 0.1 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-mid transition-all hover:-translate-y-0.5"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-black/10 bg-[#efe2c7]">
                {study.image ? (
                  <Image
                    src={study.image}
                    alt={study.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-contain p-3"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#F8F6EF]" />
                )}
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
                    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#74695B]">Before</span>
                    <p className="mt-1 text-[13px] leading-relaxed text-[#74695B]">{study.before}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#004225]">After VantLaunch</span>
                    <p className="mt-1 text-[13px] font-medium leading-relaxed text-[#11100E]">{study.value}</p>
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <div className="rounded-lg border border-black/[0.06] bg-[#F8F6EF] p-3">
                    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#74695B]">Replaced</span>
                    <p className="mt-1 text-[12px] font-medium leading-relaxed text-[#11100E]">{study.replaced}</p>
                  </div>

                  <Link
                    href={study.externalHref}
                    target={study.externalHref.startsWith("http") ? "_blank" : undefined}
                    rel={study.externalHref.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#11100E] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#004225]"
                  >
                    See {study.name}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
