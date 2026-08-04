"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Users, Building2, Layers } from "lucide-react";
import Link from "next/link";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const TIERS = [
  {
    name: "PropertyOS",
    subtitle: "Ready Property Management System",
    who: "Property managers who want tenant, owner, maintenance, and manager workflows without starting from zero",
    buildPrice: "From $4,000",
    retainerPrice: "$500+/mo",
    description:
      "A ready operating system for property management teams — white-labeled first, then customized around your workflow.",
    features: [
      "Tenant and owner portal foundation",
      "Property manager dashboard",
      "Maintenance requests and work orders",
      "Lease and document records",
      "White-labeling and deployment",
      "Customization available as needed",
      "Integrations quoted separately",
      "Full details on PropertyOS",
    ],
    popular: false,
    icon: Building2,
    href: "https://propertyos.vantlaunch.com",
    cta: "View PropertyOS",
    external: true,
  },
  {
    name: "Portal",
    subtitle: "Client-Facing Operations System",
    who: "Agencies, clinics, repair businesses, B2B service providers",
    buildPrice: "$4,000–$7,000",
    retainerPrice: "$500–$800/mo",
    description:
      "A client-facing system with login, dashboards, request forms, file access, notifications, and admin tools.",
    features: [
      "Client login and authentication",
      "Client dashboard",
      "Request and intake forms",
      "File and document access",
      "Email and in-app notifications",
      "Admin area to manage clients",
      "Basic CRM records",
      "Responsive design — every device",
    ],
    popular: true,
    icon: Users,
  },
  {
    name: "Command",
    subtitle: "Internal Operations & Workflow System",
    who: "Workshops, logistics, real estate teams, businesses with messy admin",
    buildPrice: "$8,000–$12,000",
    retainerPrice: "$800–$1,200/mo",
    description:
      "Replace spreadsheets and manual tracking with a CRM, invoicing, reporting, permissions, and workflow automation.",
    features: [
      "Everything in Portal",
      "Admin dashboard",
      "CRM or custom database",
      "Staff roles and permissions",
      "Invoice and quote workflows",
      "Analytics and reporting",
      "Workflow automation",
      "Internal process tracking",
    ],
    popular: false,
    icon: Building2,
  },
  {
    name: "OS",
    subtitle: "Complete Business Operating System",
    who: "Businesses ready to replace multiple SaaS subscriptions with one owned system",
    buildPrice: "$15,000–$25,000",
    retainerPrice: "$1,500–$2,500/mo",
    description:
      "The full stack. Portal, CRM, invoicing, analytics, automations, admin tools, integrations, and custom workflows — all in one owned platform.",
    features: [
      "Everything in Command",
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
    <section id="services" className="border-t border-black/10 bg-[#F8F6EF] px-6 py-16 text-[#11100E] sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">
            Systems
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#11100E] sm:text-4xl md:text-5xl">
            Ready OS. Portal. Command. Full OS. You pick the scope.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#74695B] sm:text-lg">
            Some businesses start with a ready system like PropertyOS. Others need a custom portal,
            dashboard, or full operating system. Every tier includes build + monthly retainer for
            hosting, fixes, and improvements.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: shouldReduceMotion ? 0.3 : 0.5, delay: shouldReduceMotion ? 0 : i * 0.08 }}
              className={`relative flex flex-col rounded-2xl border border-black/10 bg-white p-5 shadow-mid transition-all hover:bg-black/[0.02] sm:p-6 ${
                tier.popular ? "ring-1 ring-[#004225]/30" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-[#004225] px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-black/[0.03]">
                  <tier.icon className="h-5 w-5 text-[#11100E]" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-[#11100E]">{tier.name}</h3>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#74695B]">
                  {tier.subtitle}
                </p>
              </div>

              <div className="mb-5 space-y-2">
                <div>
                  <span className="text-2xl font-bold tracking-tighter text-[#11100E]">
                    {tier.buildPrice}
                  </span>
                  <span className="ml-1 text-xs font-medium text-[#74695B]">build</span>
                </div>
                <div>
                  <span className="text-base font-bold tracking-tight text-[#004225]">
                    {tier.retainerPrice}
                  </span>
                  <span className="ml-1 text-xs font-medium text-[#74695B]">retainer</span>
                </div>
              </div>

              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#74695B]">
                Best for
              </p>
              <p className="mb-5 text-xs leading-relaxed text-[#74695B]">{tier.who}</p>

              <ul className="mb-8 flex-1 space-y-2.5 border-t border-black/[0.06] pt-5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs font-medium text-[#443825]">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#004225]" />
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
                    ? "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#004225] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#11100E]"
                    : "inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-transparent px-5 py-3 text-sm font-bold text-[#11100E] transition-colors hover:bg-black/[0.03]"
                }
              >
                {tier.cta ?? "Build my system"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-14 rounded-2xl border border-[#004225]/20 bg-white p-6 text-left shadow-mid sm:p-8"
        >
          <h3 className="text-lg font-bold tracking-tight text-[#11100E]">
            Founding-client pricing
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#74695B] max-w-2xl">
            These rates are available while we build our first public case studies and refine
            the delivery process. Early clients receive reduced pricing in exchange for feedback
            and permission to showcase results. Ready systems have their own detail pages for
            white-labeling, customization, and integration pricing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
