"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Layout, MessageSquare, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useMobileMotion } from "@/app/hooks/use-mobile-motion";

const PROJECTS = [
  {
    slug: "propertyos",
    name: "PropertyOS",
    tagline: "A ready-to-deploy property management operating system.",
    before: "Maintenance requests, tenant updates, owner questions, lease records, contractor work, and documents spread across email, phone calls, spreadsheets, and portals that do not talk to each other.",
    system: "Tenant portal. Owner portal. Maintenance requests. Work orders. Property records. Customized to your workflow.",
    replaced: "Scattered tenant emails, manual maintenance tracking, owner update threads, document chasing, spreadsheet reporting, disconnected property tools.",
    value: "Property managers start from a working system, not a blank custom software project. We set it up, brand it, configure it, customize it, deploy it, and support it.",
    image: "/media/propertyos-dashboard.png",
    accent: "#004225",
    icon: Building2,
    featured: false,
    product: true,
    externalHref: "https://propertyos.vantlaunch.com",
    cta: "View PropertyOS",
  },
  {
    slug: "teramotors",
    name: "WorkshopOS",
    tagline: "A ready-to-deploy workshop management operating system.",
    before: "Paper job cards, manual invoicing, spreadsheets for tracking customers and parts. WhatsApp messages scattered across phones. No visibility into workshop operations.",
    system: "Customer and vehicle records. Job cards and work orders. Estimates and invoicing. Appointment scheduling. Parts inventory. Team workflows.",
    replaced: "Paper job cards, manual invoicing, Excel spreadsheets, WhatsApp customer tracking, disconnected billing, no digital service history.",
    value: "Auto repair shops start from a working system, not a blank custom software project. We set it up, brand it, configure it, customize it, deploy it, and support it.",
    image: "/media/teramotors-dashboard.webp",
    accent: "#3b82f6",
    icon: Layout,
    featured: false,
    product: true,
    externalHref: "https://app.teramotor.cc",
    cta: "View WorkshopOS",
  },
  {
    slug: "speakbill",
    name: "SpeakBill",
    tagline: "Professional invoices generated in under 60 seconds.",
    before: "Freelancers typing invoices manually, copying client details across tools, spending hours on billing instead of billable work.",
    system: "Voice-to-invoice — speak your bill and get a professional, EU-compliant PDF in under a minute. Client records and compliance handled automatically.",
    replaced: "Manual invoice typing, template-switching, client data re-entry, PDF generation tools.",
    value: "Invoice ready in under 60 seconds by speaking. Multi-currency, EU-compliant PDFs. Reduced admin from hours to seconds.",
    image: "/media/speakbill-dashboard.png",
    accent: "#6366f1",
    icon: MessageSquare,
    featured: true,
  },
  {
    slug: "gari",
    name: "Gari",
    tagline: "Drivers can find, book, and track workshop services in one app.",
    before: "Drivers calling around for workshop availability and pricing. No digital service history. Cash payments with no record.",
    system: "A mobile marketplace for workshop discovery, booking, digital payments, and service history — replacing phone calls, paper records, and cash.",
    replaced: "Phone calls for pricing, paper service records, cash payments, no vehicle history tracking.",
    value: "Drivers find, book, pay, and track in one app. Workshops get a digital storefront. 100% digital service history.",
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
    <section id="portfolio" className="border-t border-black/10 bg-[#F8F6EF] px-4 py-12 text-[#11100E] sm:px-6 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: shouldReduceMotion ? 0.3 : 0.5 }}
          className="mb-10 text-center sm:mb-16"
        >
          <span className="mb-3 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#74695B] sm:mb-4 sm:text-xs sm:tracking-[0.16em]">Ready-to-deploy systems</span>
          <h2 className="text-2xl font-bold tracking-tight text-[#11100E] sm:text-3xl md:text-4xl lg:text-5xl">Start from a working system. Customize what matters.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#74695B] sm:mt-4 sm:text-base sm:leading-relaxed lg:text-lg">
            PropertyOS and WorkshopOS are ready systems you can see before committing.
            SpeakBill and Gari show how we turn scattered workflows into one owned platform.
            Every system replaced scattered tools with one owned platform.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-10">
          {PROJECTS.filter((p) => p.product).map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: shouldReduceMotion ? 10 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0.32 : 0.6, delay: shouldReduceMotion ? 0 : i * 0.08 }}
              className="overflow-hidden rounded-xl border border-[#004225]/20 bg-white shadow-mid sm:rounded-2xl"
            >
              <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-black/10 bg-[#efe2c7] sm:aspect-[16/10] lg:border-b-0 lg:border-r">
                  <Image
                    src={project.image!}
                    alt={project.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 54vw"
                    className="object-contain p-3 sm:p-6"
                  />
                </div>

                <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-10">
                  <span className="mb-3 inline-flex w-fit rounded-full border border-[#004225]/20 bg-[#004225]/5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#004225] sm:mb-4 sm:px-3 sm:py-1.5 sm:text-[10px] sm:tracking-[0.16em]">
                    Ready-to-deploy system
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-[#11100E] sm:text-2xl lg:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-1.5 text-[11px] font-bold uppercase tracking-widest text-[#74695B] sm:mt-2 sm:text-sm">
                    {project.tagline}
                  </p>
                  <p className="mt-4 text-[13px] leading-relaxed text-[#74695B] sm:mt-5 sm:text-sm sm:leading-relaxed lg:text-base">
                    {project.system}
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-[#74695B] sm:text-sm sm:leading-relaxed lg:text-base">
                    {project.value}
                  </p>

                  <div className="mt-5 rounded-lg border border-black/[0.06] bg-[#F8F6EF] p-3 sm:mt-6 sm:rounded-xl sm:p-4">
                    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#74695B] sm:text-[10px] sm:tracking-[0.14em]">Replaces</span>
                    <p className="mt-1 text-[13px] font-medium leading-relaxed text-[#11100E] sm:text-sm">{project.replaced}</p>
                  </div>

                  <div className="mt-5 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:gap-3">
                    <a
                      href={project.externalHref ?? "#portfolio"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#004225] px-4 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-[#11100E] sm:w-fit sm:px-5 sm:py-3 sm:text-sm"
                    >
                      Watch Demo
                      <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </a>
                    <a
                      href={project.externalHref ?? "#portfolio"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-black/10 bg-transparent px-4 py-2.5 text-[13px] font-bold text-[#11100E] transition-colors hover:bg-black/[0.03] sm:w-fit sm:px-5 sm:py-3 sm:text-sm"
                    >
                      {project.cta ?? "View System"}
                      <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Featured Projects */}
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
            {PROJECTS.filter(p => p.featured).map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: shouldReduceMotion ? 10 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0.32 : 0.6, delay: shouldReduceMotion ? 0 : i * 0.1 }}
                onClick={() => {
                  if (project.externalHref) {
                    window.open(project.externalHref, "_blank", "noreferrer");
                    return;
                  }
                  onOpenProject(project.slug);
                }}
                className="group relative cursor-pointer flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-mid transition-all hover:bg-black/[0.03] sm:rounded-2xl"
              >
                <div className="relative aspect-video w-full overflow-hidden border-b border-black/10 bg-[#efe2c7]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                      className="object-contain p-4 transition-transform duration-700 group-hover:scale-105 sm:p-6"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[#F8F6EF] p-6">
                      <div className="w-full max-w-[260px] rounded-2xl border border-black/10 bg-white p-4 shadow-mid">
                        <div className="mb-4 flex items-center justify-between">
                          <div>
                            <div className="h-2 w-20 rounded-full bg-[#004225]/80" />
                            <div className="mt-2 h-2 w-28 rounded-full bg-black/10" />
                          </div>
                          <div className="h-9 w-9 rounded-xl bg-[#004225]/10" />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {["Tenants", "Owners", "Tickets", "Reports"].map((label) => (
                            <div key={label} className="rounded-xl border border-black/[0.06] bg-[#F8F6EF] p-3">
                              <div className="h-2 w-10 rounded-full bg-black/15" />
                              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[#74695B]">{label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent transition-opacity group-hover:opacity-20" />
                  
                  <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/95 text-[#11100E] shadow-mid sm:h-12 sm:w-12 sm:rounded-2xl sm:bg-white/85 sm:backdrop-blur-md">
                      {project.icon && <project.icon className="h-5 w-5 sm:h-6 sm:w-6" />}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-1 flex-col p-4 sm:p-6 lg:p-8">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-bold tracking-tight text-[#11100E] sm:text-2xl">{project.name}</h3>
                    <ArrowUpRight className="h-4 w-4 text-[#74695B] transition-colors group-hover:text-[#11100E] sm:h-5 sm:w-5" />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#74695B] sm:text-sm">{project.tagline}</p>

                  <div className="mt-4 space-y-3 sm:mt-5">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#74695B] sm:text-[10px] sm:tracking-[0.14em]">Before</span>
                      <p className="mt-1 text-[13px] leading-relaxed text-[#74695B] sm:text-sm">{project.before}</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#74695B] sm:text-[10px] sm:tracking-[0.14em]">System Built</span>
                      <p className="mt-1 text-[13px] leading-relaxed text-[#74695B] sm:text-sm">{project.system}</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-lg border border-black/[0.06] bg-[#F8F6EF] p-3 sm:mt-5 sm:rounded-xl sm:p-4">
                    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#74695B] sm:text-[10px] sm:tracking-[0.14em]">Replaced</span>
                    <p className="mt-1 text-[13px] font-medium leading-relaxed text-[#11100E] sm:text-sm">{project.replaced}</p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-[11px] font-bold text-[#11100E] transition-colors sm:mt-8 sm:text-xs">
                    {project.cta ?? "View Case Study"}
                    <div className="h-px flex-1 bg-black/10 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Secondary Projects */}
          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {PROJECTS.filter(p => !p.featured && !p.product).map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: shouldReduceMotion ? 8 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0.28 : 0.4, delay: shouldReduceMotion ? 0 : i * 0.06 }}
                className="group flex flex-col rounded-xl border border-black/10 bg-white p-4 transition-all hover:bg-black/[0.03] sm:rounded-2xl sm:p-5 lg:p-6"
              >
                <div className="mb-2 flex items-center justify-between sm:mb-3">
                   <h3 className="text-sm font-bold tracking-tight text-[#11100E] sm:text-base">{project.name}</h3>
                   <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: project.accent }} />
                </div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-[#74695B] sm:text-[10px]">{project.tagline}</p>
                <p className="mt-2 text-[11px] font-bold leading-snug text-[#11100E] sm:mt-3 sm:text-xs">{project.value}</p>
                <div className="mt-3 flex-1 rounded-lg border border-black/[0.04] bg-[#F8F6EF] p-2.5 sm:mt-4 sm:p-3">
                  <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#74695B] sm:text-[10px]">Replaced</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-[#74695B] sm:text-xs">{project.replaced}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
