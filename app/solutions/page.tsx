"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Globe, Workflow, Users, FileText, ShieldCheck, Building2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

const solutions = [
  { icon: BarChart3, title: "Executive Dashboards", slug: "executive-dashboards", desc: "Complete visibility into revenue, KPIs, and business performance — all in one real-time view.", features: ["Real-time KPI tracking", "Multi-source data integration", "Automated report generation", "Role-based access control"] },
  { icon: Globe, title: "Client Portals", slug: "client-portals", desc: "Give clients visibility into projects, approvals, and communications — reducing status meetings.", features: ["Branded client interface", "Document sharing and approvals", "Project status tracking", "Secure role-based access"] },
  { icon: Workflow, title: "Workflow Automation", slug: "workflow-automation", desc: "Connect your tools and automate repetitive processes that consume hours every week.", features: ["Multi-step automation", "Cross-platform integration", "Trigger-based execution", "Error handling and logging"] },
  { icon: Users, title: "Internal CRM", slug: "internal-crm", desc: "Track clients, deals, and relationships in a system designed around your sales process.", features: ["Custom pipeline stages", "Contact and deal tracking", "Activity logging", "Sales reporting"] },
  { icon: FileText, title: "Reporting Systems", slug: "reporting-systems", desc: "Automated reports from every data source delivered to dashboards, inboxes, or Slack.", features: ["Scheduled report generation", "Multi-format export", "Custom dashboards", "Data visualization"] },
  { icon: ShieldCheck, title: "Approval Systems", slug: "approval-systems", desc: "Custom approval workflows matching how your business actually operates.", features: ["Multi-step approvals", "Conditional routing", "Audit trail", "Notification system"] },
  { icon: Building2, title: "Business OS", slug: "business-os", desc: "A complete internal platform unifying operations, clients, reporting, and automation.", features: ["Unified platform", "Custom architecture", "Full integration", "Source ownership"] },
];

export default function SolutionsHub() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6EF] text-[#11100E]">
      <Navbar />
      <main>
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="mb-4 inline-flex rounded-full border border-black/10 bg-[#F3F2ED] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#74695B]">Solutions</span>
              <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Custom systems for every part of your business</h1>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#74695B]">From executive dashboards to complete operating systems — explore what we build.</p>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-black/10 px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 sm:grid-cols-2">
              {solutions.map((s, i) => (
                <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} whileHover={{ y: -4 }}>
                  <Link href={`/solutions/${s.slug}`} className="block rounded-2xl border border-black/10 bg-white p-6 shadow-mid transition-all hover:shadow-lg hover:border-[#004225]/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#004225]/10"><s.icon className="h-5 w-5 text-[#004225]" /></div>
                      <h2 className="text-lg font-bold">{s.title}</h2>
                    </div>
                    <p className="text-sm text-[#74695B] mb-4">{s.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {s.features.map((f) => (
                        <div key={f} className="flex items-center gap-1.5 text-xs text-[#74695B]"><span className="h-1.5 w-1.5 rounded-full bg-[#004225]" />{f}</div>
                      ))}
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#004225]">Learn more <ArrowRight className="h-3 w-3" /></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
