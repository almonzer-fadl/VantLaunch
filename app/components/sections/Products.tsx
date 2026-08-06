"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { fadeSlide, staggerSection } from "@/app/lib/motion-variants";

const APPS = [
  {
    name: "TeraMotors",
    stage: "Live",
    tagline: "Workshop management system",
    description: "Job cards, invoices, reports, and customer updates — built for repair shops ready to go digital.",
    price: "$99",
    priceLabel: "/mo per location",
    features: [
      "Digital job cards & work orders",
      "Automated invoicing & billing",
      "Customer & vehicle records",
      "Real-time reporting dashboard",
    ],
    href: "https://app.teramotor.cc/register",
    label: "Start free trial",
    image: "/media/teramotors-dashboard.webp",
    accent: "#004225",
    badgeColor: "bg-[#004225]/10 text-[#004225]",
  },
  {
    name: "SpeakBill",
    stage: "Live",
    tagline: "Voice-to-invoice in 60 seconds",
    description: "Speak your bill and get a professional, EU-compliant PDF invoice — no typing, no templates.",
    price: "Free",
    priceLabel: "core invoicing",
    features: [
      "Voice-to-invoice generation",
      "EU-compliant PDF output",
      "Multi-currency support",
      "Client records & history",
    ],
    href: "https://speakbill.vantlaunch.com",
    label: "Visit SpeakBill",
    image: "/media/speakbill-dashboard.png",
    accent: "#6366f1",
    badgeColor: "bg-[#6366f1]/10 text-[#6366f1]",
  },
  {
    name: "Gari",
    stage: "Coming soon",
    tagline: "Auto service marketplace",
    description: "Find workshops, book services, track jobs, and manage your vehicle — all in one app.",
    price: "—",
    priceLabel: "launching soon",
    features: [
      "Workshop discovery & booking",
      "Digital service history",
      "In-app payments",
      "Vehicle garage & tracking",
    ],
    href: "#ventures",
    label: "Preview Gari",
    image: "/media/gari-home.webp",
    accent: "#10b981",
    badgeColor: "bg-[#10b981]/10 text-[#10b981]",
  },
] as const;

export function ProductsSection() {
  return (
    <section id="products" className="border-t border-black/[0.06] bg-[#F8F6EF] px-6 py-20 text-[#11100E] md:py-28">
      <motion.div
        className="mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerSection}
      >
        <motion.div variants={fadeSlide} className="mb-14 text-center md:mb-20">
          <p className="type-meta-uppercase mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#F3F2ED] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#74695B]">
            Productized software
          </p>
          <h2 className="type-display-xl mb-5 text-balance">Three products. Fixed price. Full ownership.</h2>
          <p className="type-intro mx-auto max-w-2xl">
            Each product ships at a transparent price with the same engineering quality — no per-user fees,
            no hidden tiers, just working software you own.
          </p>
        </motion.div>

        <motion.div variants={staggerSection} className="grid gap-6 md:grid-cols-3">
          {APPS.map((app) => {
            const external = app.href.startsWith("http");
            return (
              <motion.article
                key={app.name}
                variants={fadeSlide}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-mid transition-shadow hover:shadow-high"
              >
                <div className="relative aspect-[16/10] w-full bg-[#efe2c7]">
                  <Image
                    src={app.image}
                    alt={`${app.name} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-contain object-center p-5 transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/[0.04] via-transparent to-transparent" />
                  <span
                    className="absolute left-4 top-4 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em]"
                    style={{
                      borderColor: app.accent,
                      backgroundColor: `${app.accent}10`,
                      color: app.accent,
                    }}
                  >
                    {app.stage}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-1">
                    <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#74695B]">{app.tagline}</p>
                    <h3 className="mt-1 text-2xl font-bold tracking-tight text-[#11100E]">{app.name}</h3>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-[#74695B]">{app.description}</p>

                  <ul className="mt-5 space-y-2.5">
                    {app.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-[#443825]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: app.accent }} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <div className="flex items-baseline gap-1.5 border-t border-black/[0.06] pt-5">
                      <span className="text-2xl font-bold tracking-tighter text-[#11100E]">{app.price}</span>
                      <span className="text-sm text-[#74695B]">{app.priceLabel}</span>
                    </div>

                    <Link
                      href={app.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white transition-colors hover:opacity-90"
                      style={{ backgroundColor: app.accent }}
                    >
                      {app.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
