"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, LayoutDashboard, Building2, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const SOLUTIONS = [
  {
    name: "Executive Dashboard",
    tagline: "One dashboard. All your data.",
    description:
      "Stop checking Meta Ads, Google Ads, Stripe, GA4, spreadsheets and CRMs separately. See everything in one place. Perfect for founders who want complete visibility.",
    features: [
      "KPI Dashboard",
      "Executive Reports",
      "Business Metrics",
      "Custom Integrations",
      "Setup & Training",
    ],
    standardPrice: "$999",
    foundingPrice: "$699",
    icon: BarChart3,
    accent: "#004225",
    image: "/media/banner-executive-dashboard.png",
    href: "https://whop.com/joined/almonzer-fadl/products/executive-dashboard/",
  },
  {
    name: "Business Dashboard Pro",
    tagline: "Dashboards for your entire team.",
    description:
      "Everything in Executive Dashboard plus multiple team dashboards, department reports, workflow automation, and advanced business insights.",
    features: [
      "Multiple Team Dashboards",
      "Department Reports",
      "Workflow Automation",
      "Advanced Integrations",
      "Business Insights",
    ],
    standardPrice: "$1,699",
    foundingPrice: "$999",
    icon: LayoutDashboard,
    accent: "#0f766e",
    image: "/media/banner-business-dashboard-pro.png",
    featured: true,
    href: "https://whop.com/joined/almonzer-fadl/products/business-dashboard-pro/",
  },
  {
    name: "Business Operating System",
    tagline: "A fully custom system for your company.",
    description:
      "A complete business operating system designed around your company. Includes executive dashboard, internal operations, workflow automation, custom software, and reporting.",
    features: [
      "Executive Dashboard",
      "Internal Operations",
      "Workflow Automation",
      "Custom Business Software",
      "Reporting & Development",
    ],
    standardPrice: "Starting at $2,499",
    foundingPrice: "Starting at $1,699",
    icon: Building2,
    accent: "#1e40af",
    image: "/media/banner-business-operating-system.png",
    href: "https://whop.com/joined/almonzer-fadl/products/business-operating-system-7f/",
  },
];

function FoundingBadge() {
  return (
    <div className="relative">
      <div className="flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-50 px-3 py-1.5">
        <span className="text-sm">🔥</span>
        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-orange-700">
          Founding Client Program
        </span>
      </div>
    </div>
  );
}

export function SolutionsSection() {
  const { shouldReduceMotion } = useMobileMotion();

  return (
    <section id="solutions" className="scroll-mt-20 border-t border-black/10 bg-[#F8F6EF] px-4 py-12 text-[#11100E] sm:px-6 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
          className="mb-10 text-center sm:mb-16"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#74695B] sm:mb-4 sm:text-xs sm:tracking-[0.16em]">
            Our Solutions
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-[#11100E] sm:text-3xl md:text-4xl lg:text-5xl">
            Three solutions. One mission: software built around your business.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#74695B] sm:mt-4 sm:text-base sm:leading-relaxed lg:text-lg">
            From a single executive dashboard to a complete business operating system. Pick the solution that fits where you are today.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {SOLUTIONS.map((solution, i) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, delay: shouldReduceMotion ? 0 : i * 0.1 }}
              className={`relative flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-mid transition-all hover:-translate-y-0.5 ${
                solution.featured ? "ring-1 ring-[#004225]/30" : ""
              }`}
            >
              {solution.featured && (
                <div className="absolute left-4 top-4 z-10">
                  <span className="inline-flex rounded-full bg-[#004225] px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white">
                    Most Popular
                  </span>
                </div>
              )}

              {solution.image && (
                <div className="relative aspect-[16/10] overflow-hidden border-b border-black/10">
                  <Image
                    src={solution.image}
                    alt={solution.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-low" style={{ backgroundColor: solution.accent }}>
                  <solution.icon className="h-6 w-6" />
                </div>

                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#74695B]">
                  {solution.tagline}
                </p>
                <h3 className="mt-1.5 text-xl font-bold tracking-tight text-[#11100E] sm:text-2xl">
                  {solution.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#74695B]">
                  {solution.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm font-medium text-[#443825]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#004225]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <div className="rounded-xl border border-black/[0.06] bg-[#F8F6EF] p-4">
                    <div className="flex items-baseline justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B]">Standard</span>
                      <span className="text-lg font-bold tracking-tight text-black/25 line-through">{solution.standardPrice}</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold tracking-tight text-[#11100E]">{solution.foundingPrice}</span>
                        <span className="text-xs font-medium text-[#74695B]">Founding Client</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <FoundingBadge />
                  </div>

                  <p className="mt-2 text-[11px] font-medium text-orange-700">
                    Only 2 spots available. Not a sale — early portfolio clients.
                  </p>

                  <Link
                    href={solution.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#004225] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#11100E]"
                  >
                    {i === 0 ? "Get Executive Dashboard" : i === 1 ? "Upgrade Your Business Dashboard" : "Build My Business System"}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 rounded-xl border border-[#004225]/20 bg-white p-5 text-left shadow-mid sm:mt-14 sm:rounded-2xl sm:p-7 lg:p-8"
        >
          <h3 className="text-base font-bold tracking-tight text-[#11100E] sm:text-lg">
            How it works
          </h3>
          <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-[#74695B] sm:text-sm">
            Choose your solution, purchase directly through Whop, and we start building. Every solution includes setup, training, and handover. Need something custom? We&apos;ll scope it before any work starts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
