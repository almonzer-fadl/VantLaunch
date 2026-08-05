"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Users, Building2, Layers, Wrench } from "lucide-react";
import Link from "next/link";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const TIERS = [
  {
    name: "PropertyOS",
    subtitle: "Ready-to-Deploy Property Management OS",
    who: "Small property managers who want a working tenant, owner, maintenance, and property records system quickly.",
    buildPrice: "$1,500-$3,000",
    retainerPrice: "$200-$500/mo",
    description:
      "A productized PropertyOS setup: branding, configuration, deployment, training, and support. Live in weeks, not months.",
    features: [
      "Branding",
      "Tenant portal",
      "Owner portal",
      "Maintenance requests",
      "Work orders",
      "Property records",
      "Deployment and training",
      "Full details on PropertyOS",
    ],
    popular: false,
    icon: Building2,
    href: "https://propertyos.vantlaunch.com",
    cta: "View PropertyOS",
    external: true,
  },
  {
    name: "WorkshopOS",
    subtitle: "Ready-to-Deploy Auto Repair OS",
    who: "Auto repair shops who want a working customer, vehicle, job card, invoicing, and inventory system quickly.",
    buildPrice: "$1,500-$3,000",
    retainerPrice: "$200-$500/mo",
    description:
      "A productized WorkshopOS setup: branding, configuration, deployment, training, and support. Live in weeks, not months.",
    features: [
      "Branding",
      "Customer and vehicle records",
      "Job cards and work orders",
      "Estimates and invoicing",
      "Appointment scheduling",
      "Parts inventory",
      "Deployment and training",
      "Full details on WorkshopOS",
    ],
    popular: false,
    icon: Wrench,
    href: "https://app.teramotor.cc",
    cta: "View WorkshopOS",
    external: true,
  },
  {
    name: "Custom",
    subtitle: "Custom-Built Operating System",
    who: "Agencies, clinics, logistics teams, B2B service providers with unique workflows and processes.",
    buildPrice: "$5,000-$10,000",
    retainerPrice: "$400-$1,500/mo",
    description:
      "Client portals, internal dashboards, CRM, invoicing, reporting, permissions, and workflow automation — built around your operation.",
    features: [
      "Client login and portal",
      "Admin dashboard and CRM",
      "Staff roles and permissions",
      "Invoice and quote workflows",
      "Analytics and reporting",
      "Workflow automation",
      "Responsive on every device",
      "Built around your processes",
    ],
    popular: true,
    icon: Users,
  },
  {
    name: "OS",
    subtitle: "Complete Business Operating System",
    who: "Businesses ready to replace multiple SaaS subscriptions with one owned system.",
    buildPrice: "$10,000+",
    retainerPrice: "$1,500+/mo",
    description:
      "The full stack. Portal, CRM, invoicing, analytics, automations, admin tools, integrations, and custom workflows — all in one owned platform.",
    features: [
      "Everything in Custom",
      "Custom workflow design",
      "Priority support and SLA",
      "Ongoing product updates",
      "Advanced analytics and reporting",
      "Multi-staff and client roles",
      "Integrations as needed",
      "Dedicated maintenance roadmap",
    ],
    popular: false,
    icon: Layers,
  },
];

export function ServicesSection() {
  const { shouldReduceMotion } = useMobileMotion();

  return (
    <section id="services" className="border-t border-black/10 bg-[#F8F6EF] px-4 py-12 text-[#11100E] sm:px-6 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
          className="mb-10 text-center sm:mb-16"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#74695B] sm:mb-4 sm:text-xs sm:tracking-[0.16em]">
            Systems
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-[#11100E] sm:text-3xl md:text-4xl lg:text-5xl">
            Start from a working system. Customize what matters.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#74695B] sm:mt-4 sm:text-base sm:leading-relaxed lg:text-lg">
            PropertyOS and WorkshopOS are the lowest-risk way to start: setup, branding,
            configuration, deployment, and support around a system that already exists.
            Custom systems are still available when the workflow needs to be built from scratch.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, delay: shouldReduceMotion ? 0 : i * 0.08 }}
              className={`relative flex flex-col rounded-xl border border-black/10 bg-white p-4 shadow-mid transition-all hover:bg-black/[0.02] sm:rounded-2xl sm:p-5 lg:p-6 ${
                tier.popular ? "ring-1 ring-[#004225]/30" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 sm:-top-3">
                  <span className="inline-flex rounded-full bg-[#004225] px-3 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white sm:px-4 sm:py-1 sm:text-[10px]">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-4 sm:mb-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-black/[0.03] sm:mb-4 sm:h-10 sm:w-10 sm:rounded-xl">
                  <tier.icon className="h-4 w-4 text-[#11100E] sm:h-5 sm:w-5" />
                </div>
                <h3 className="text-base font-bold tracking-tight text-[#11100E] sm:text-lg">{tier.name}</h3>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.1em] text-[#74695B] sm:text-[11px] sm:tracking-[0.12em]">
                  {tier.subtitle}
                </p>
              </div>

              <div className="mb-4 space-y-1.5 sm:mb-5 sm:space-y-2">
                <div>
                  <span className="text-xl font-bold tracking-tighter text-[#11100E] sm:text-2xl">
                    {tier.buildPrice}
                  </span>
                  <span className="ml-1 text-[11px] font-medium text-[#74695B] sm:text-xs">setup</span>
                </div>
                <div>
                  <span className="text-sm font-bold tracking-tight text-[#004225] sm:text-base">
                    {tier.retainerPrice}
                  </span>
                  <span className="ml-1 text-[11px] font-medium text-[#74695B] sm:text-xs">retainer</span>
                </div>
              </div>

              <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#74695B] sm:mb-2 sm:text-[11px] sm:tracking-[0.1em]">
                Best for
              </p>
              <p className="mb-4 text-[11px] leading-relaxed text-[#74695B] sm:mb-5 sm:text-xs">{tier.who}</p>

              <ul className="mb-6 flex-1 space-y-2 border-t border-black/[0.06] pt-4 sm:mb-8 sm:space-y-2.5 sm:pt-5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[11px] font-medium text-[#443825] sm:text-xs">
                    <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#004225] sm:h-4 sm:w-4" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href ?? "#contact"}
                target={tier.external ? "_blank" : undefined}
                rel={tier.external ? "noreferrer" : undefined}
                className={
                  tier.popular
                    ? "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#004225] px-4 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-[#11100E] sm:px-5 sm:py-3 sm:text-sm"
                    : "inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-transparent px-4 py-2.5 text-[13px] font-bold text-[#11100E] transition-colors hover:bg-black/[0.03] sm:px-5 sm:py-3 sm:text-sm"
                }
              >
                {tier.cta ?? "Build my system"}
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Link>
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
            Founding-client pricing
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-[#74695B] max-w-2xl sm:text-sm">
            These rates are available while we build our first public case studies and refine
            the delivery process. Early clients receive reduced pricing in exchange for feedback
            and permission to showcase results. The goal is simple: launch useful systems, earn
            testimonials, and build proof with serious early clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
