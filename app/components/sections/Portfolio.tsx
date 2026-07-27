"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Layout, MessageSquare, ShieldCheck } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
  {
    slug: "teramotors",
    name: "TeraMotors",
    tagline: "Workshop Management System",
    description: "Built to replace paper job cards and messy spreadsheets. Real-time tracking of jobs, parts, and invoices for automotive repair shops.",
    outcome: "Paper workflows turned into a live workshop SaaS",
    metric: "Dashboard · Job cards · Billing",
    image: "/media/teramotors-dashboard.webp",
    stack: "Next.js · PostgreSQL · Vercel",
    color: "from-black/[0.03] to-black/[0.01]",
    accent: "#3b82f6",
    icon: Layout,
    featured: true,
  },
  {
    slug: "speakbill",
    name: "SpeakBill",
    tagline: "Voice-to-Invoice SaaS",
    description: "Using AI to turn natural voice commands into professional, EU-compliant invoices. Zero typing required for freelancers.",
    outcome: "Voice input converted into invoice creation flows",
    metric: "AI · PDF invoices · Client records",
    image: "/media/speakbill-dashboard.png",
    stack: "Next.js · OpenAI · MongoDB",
    color: "from-black/[0.03] to-black/[0.01]",
    accent: "#6366f1",
    icon: MessageSquare,
    featured: true,
  },
  {
    slug: "gari",
    name: "Gari",
    tagline: "Auto-Service Marketplace",
    description: "Connecting drivers with verified workshops. Transparent pricing, digital service records, and seamless payments in one app.",
    outcome: "Service discovery, payments, and vehicle records in one mobile journey",
    metric: "Mobile app · Marketplace · Payments",
    image: "/media/gari-home.webp",
    stack: "React Native · Node.js · MongoDB",
    color: "from-black/[0.03] to-black/[0.01]",
    accent: "#10b981",
    icon: ShieldCheck,
    featured: true,
  },
  {
    slug: "teravisions",
    name: "Teravisions",
    tagline: "BI & Analytics Dashboard",
    description: "Custom dashboards and data visualization for enterprise clients — turning complex operational data into clear decisions.",
    outcome: "Operations data shaped into executive visibility",
    metric: "BI · Reports · Decisions",
    stack: "React · Python · PostgreSQL",
    color: "from-black/[0.03] to-black/[0.01]",
    accent: "#8b5cf6",
    featured: false,
  },
  {
    slug: "takkah",
    name: "Takkah",
    tagline: "WhatsApp Business Automation",
    description: "AI-powered WhatsApp chatbot platform with workflow automation, templates, and team collaboration for retail.",
    outcome: "Customer messaging turned into repeatable support workflows",
    metric: "WhatsApp · Templates · Automation",
    stack: "Laravel · Vue.js · WhatsApp API",
    color: "from-black/[0.03] to-black/[0.01]",
    accent: "#22c55e",
    featured: false,
  },
  {
    slug: "takaful",
    name: "Takaful",
    tagline: "Digital Insurance Portal",
    description: "Modernizing Islamic insurance with digital policy tracking, claims management, and a transparent customer portal.",
    outcome: "Policy records and claims moved into a customer portal",
    metric: "Portal · Claims · Policy tracking",
    stack: "Next.js · Node.js · PostgreSQL",
    color: "from-black/[0.03] to-black/[0.01]",
    accent: "#06b6d4",
    featured: false,
  },
  {
    slug: "araba",
    name: "Araba",
    tagline: "Vehicle Lifecycle Management",
    description: "A centralized platform for buying, selling, and tracking the complete service history of vehicles.",
    outcome: "Vehicle history organized from listing to ownership",
    metric: "Listings · Records · Lifecycle",
    stack: "React · Node.js · MongoDB",
    color: "from-black/[0.03] to-black/[0.01]",
    accent: "#ef4444",
    featured: false,
  },
];

export function PortfolioSection({ onOpenProject }: { onOpenProject: (slug: string) => void }) {
  return (
    <section id="portfolio" className="border-t border-black/10 bg-[#fffaf0] px-6 py-24 text-[#11100e] md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#74695b]">Case studies</span>
          <h2 className="text-3xl font-bold tracking-tight text-[#11100e] sm:text-4xl md:text-5xl">Shipped product work, not portfolio theater.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5f5548] sm:text-lg">
            Each build is framed around the business workflow it replaces, the product surface
            delivered, and the proof a buyer needs before starting a project.
          </p>
        </motion.div>

        <div className="grid gap-10">
          {/* Featured Projects */}
          <div className="grid gap-10 lg:grid-cols-3">
            {PROJECTS.filter(p => p.featured).map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onClick={() => onOpenProject(project.slug)}
                className="group relative cursor-pointer flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_55px_-42px_rgba(17,16,14,0.35)] transition-all hover:bg-black/[0.03]"
              >
                <div className="relative aspect-video w-full overflow-hidden border-b border-black/10 bg-[#eef2f8]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className={`h-full w-full bg-gradient-to-br ${project.color}`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent transition-opacity group-hover:opacity-20" />
                  
                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-white/85 text-[#11100e] shadow-xl backdrop-blur-md">
                      {project.icon && <project.icon className="h-6 w-6" />}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-black/10 bg-[#f8f6ef] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#74695b]">
                      {project.metric}
                    </span>
                  </div>
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-2xl font-bold tracking-tight text-[#11100e]">{project.name}</h3>
                    <ArrowUpRight className="h-5 w-5 text-[#74695b] transition-colors group-hover:text-[#11100e]" />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#74695b]">{project.tagline}</p>
                  <p className="mt-4 text-base font-bold leading-snug text-[#11100e]">
                    {project.outcome}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-[#5f5548]">
                    {project.description}
                  </p>
                  
                  <div className="mt-8 flex items-center gap-2 text-xs font-bold text-[#11100e] transition-colors">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group flex flex-col rounded-2xl border border-black/10 bg-white p-8 transition-all hover:bg-black/[0.03]"
              >
                <div className="mb-4 flex items-center justify-between">
                   <h3 className="text-lg font-bold tracking-tight text-[#11100e]">{project.name}</h3>
                   <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: project.accent }} />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#74695b]">{project.tagline}</p>
                <p className="mt-4 text-sm font-bold leading-snug text-[#11100e]">{project.outcome}</p>
                <p className="mt-4 flex-1 text-xs leading-relaxed text-[#5f5548]">
                  {project.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                   <p className="font-mono text-[10px] uppercase tracking-tighter text-[#74695b]">{project.metric}</p>
                   <ArrowUpRight className="h-4 w-4 text-[#74695b] transition-colors group-hover:text-[#11100e]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
