"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Layout, MessageSquare, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const PROJECTS = [
  {
    slug: "teramotors",
    name: "TeraMotors",
    tagline: "Workshop Operating System",
    before: "Paper job cards, manual invoicing, spreadsheets for tracking customers and parts. No visibility into workshop operations.",
    system: "A complete workshop OS with job cards, invoicing, customer records, parts inventory, team workflows, and a real-time dashboard.",
    replaced: "Paper job cards, manual invoicing, Excel spreadsheets, WhatsApp customer tracking, disconnected billing.",
    value: "Workshop owner sees every job, part, and invoice in one dashboard. Customers get digital service records. Billing is automatic.",
    image: "/media/teramotors-dashboard.webp",
    accent: "#3b82f6",
    icon: Layout,
    featured: true,
  },
  {
    slug: "speakbill",
    name: "SpeakBill",
    tagline: "Voice-Powered Invoicing",
    before: "Freelancers typing invoices manually, copying client details across tools, spending hours on billing instead of billable work.",
    system: "A voice-to-invoice system using AI to turn natural speech into professional, EU-compliant invoices in seconds.",
    replaced: "Manual invoice typing, template-switching, client data re-entry, PDF generation tools.",
    value: "Invoice created in under 60 seconds by speaking. Client records, PDF generation, and compliance handled automatically.",
    image: "/media/speakbill-dashboard.png",
    accent: "#6366f1",
    icon: MessageSquare,
    featured: true,
  },
  {
    slug: "gari",
    name: "Gari",
    tagline: "Customer Service Portal & Marketplace",
    before: "Drivers calling around for workshop availability and pricing. No digital service history. Cash payments with no record.",
    system: "A mobile-first customer portal and marketplace — vehicle garage, service discovery, digital payments, and service history.",
    replaced: "Phone calls for pricing, paper service records, cash payments, no vehicle history tracking.",
    value: "Customers find services, book, pay, and track their vehicle history in one app. Workshops get a digital storefront.",
    image: "/media/gari-home.webp",
    accent: "#10b981",
    icon: ShieldCheck,
    featured: true,
  },
  {
    slug: "teravisions",
    name: "Teravisions",
    tagline: "BI & Analytics Dashboard",
    before: "Enterprise data scattered across databases and spreadsheets. Executives making decisions from gut feel, not real data.",
    system: "Custom BI dashboards turning complex operational data into clear executive decisions — real-time, visual, drillable.",
    replaced: "Static spreadsheets, disconnected databases, monthly manual reports, gut-feel decisions.",
    value: "Operations data shaped into executive visibility — decisions backed by live numbers instead of last month's spreadsheet.",
    accent: "#8b5cf6",
    featured: false,
  },
  {
    slug: "takkah",
    name: "Takkah",
    tagline: "WhatsApp Business Automation",
    before: "Retail teams managing customer conversations manually in WhatsApp — no templates, no automation, no collaboration.",
    system: "AI-powered WhatsApp chatbot platform with workflow automation, message templates, and team collaboration for retail.",
    replaced: "Manual WhatsApp messaging, no customer history, no team coordination, lost conversations.",
    value: "Customer messaging turned into repeatable support workflows — faster replies, team visibility, and automated follow-ups.",
    accent: "#22c55e",
    featured: false,
  },
  {
    slug: "takaful",
    name: "Takaful",
    tagline: "Digital Insurance Portal",
    before: "Islamic insurance managed through paper policies, phone calls for claims, and no customer self-service.",
    system: "A digital portal for policy tracking, claims management, and transparent customer access — modernizing Takaful operations.",
    replaced: "Paper policies, phone-based claims, manual status updates, no customer visibility.",
    value: "Policy records and claims moved into a customer portal — self-service access, transparent status tracking, digital claims flow.",
    accent: "#06b6d4",
    featured: false,
  },
  {
    slug: "araba",
    name: "Araba",
    tagline: "Vehicle Lifecycle Management",
    before: "Buying and selling vehicles with no centralized history. Service records lost between owners. No trust in vehicle condition.",
    system: "A centralized platform for buying, selling, and tracking the complete service history of vehicles across owners.",
    replaced: "Fragmented listings, lost service records, no vehicle history transparency, manual ownership transfers.",
    value: "Complete vehicle history organized from listing to ownership — buyers trust the record, sellers prove the condition.",
    accent: "#ef4444",
    featured: false,
  },
];

export function PortfolioSection({ onOpenProject }: { onOpenProject: (slug: string) => void }) {
  const { shouldReduceMotion } = useMobileMotion();

  return (
    <section id="portfolio" className="border-t border-black/10 bg-[#fff9ed] px-6 py-16 text-[#17140d] sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#8a7657]">Proof</span>
          <h2 className="text-3xl font-bold tracking-tight text-[#17140d] sm:text-4xl md:text-5xl">We&apos;ve done this before. Here&apos;s the proof.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#695b45] sm:text-lg">
            Each project shows the messy process it replaced, the system we built,
            and the business value it unlocked — so you know exactly what you&apos;re buying.
          </p>
        </motion.div>

        <div className="grid gap-10">
          {/* Featured Projects */}
          <div className="grid gap-10 lg:grid-cols-3">
            {PROJECTS.filter(p => p.featured).map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: shouldReduceMotion ? 10 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0.32 : 0.6, delay: shouldReduceMotion ? 0 : i * 0.1 }}
                onClick={() => onOpenProject(project.slug)}
                className="group relative cursor-pointer flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_55px_-42px_rgba(23,20,13,0.35)] transition-all hover:bg-black/[0.03]"
              >
                <div className="relative aspect-video w-full overflow-hidden border-b border-black/10 bg-[#efe2c7]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-black/[0.03] to-black/[0.01]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent transition-opacity group-hover:opacity-20" />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-white/95 text-[#17140d] shadow-xl sm:bg-white/85 sm:backdrop-blur-md">
                      {project.icon && <project.icon className="h-6 w-6" />}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-1 flex-col p-5 sm:p-8">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-2xl font-bold tracking-tight text-[#17140d]">{project.name}</h3>
                    <ArrowUpRight className="h-5 w-5 text-[#8a7657] transition-colors group-hover:text-[#17140d]" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#8a7657]">{project.tagline}</p>

                  <div className="mt-5 space-y-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8a7657]">Before</span>
                      <p className="mt-1 text-sm leading-relaxed text-[#695b45]">{project.before}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8a7657]">System Built</span>
                      <p className="mt-1 text-sm leading-relaxed text-[#695b45]">{project.system}</p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl border border-black/[0.06] bg-[#fbf4e2] p-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8a7657]">Replaced</span>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-[#17140d]">{project.replaced}</p>
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-xs font-bold text-[#17140d] transition-colors">
                    View Case Study
                    <div className="h-px flex-1 bg-black/10 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Secondary Projects */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
            {PROJECTS.filter(p => !p.featured).map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0.28 : 0.4, delay: shouldReduceMotion ? 0 : i * 0.06 }}
                className="group flex flex-col rounded-2xl border border-black/10 bg-white p-5 transition-all hover:bg-black/[0.03] sm:p-6"
              >
                <div className="mb-3 flex items-center justify-between">
                   <h3 className="text-base font-bold tracking-tight text-[#17140d]">{project.name}</h3>
                   <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: project.accent }} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#8a7657]">{project.tagline}</p>
                <p className="mt-3 text-xs font-bold leading-snug text-[#17140d]">{project.value}</p>
                <div className="mt-4 flex-1 rounded-lg border border-black/[0.04] bg-[#fbf4e2] p-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a7657]">Replaced</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#695b45]">{project.replaced}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
