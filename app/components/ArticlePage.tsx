"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, BookOpen, Share2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SITE_URL = "https://vantlaunch.com";

function ArticleSchema({ data, slug }: { data: ArticleData; slug: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    datePublished: data.publishDate,
    author: { "@type": "Organization", name: "VantLaunch" },
    publisher: { "@type": "Organization", name: "VantLaunch", logo: { "@type": "ImageObject", url: `${SITE_URL}/brand/icon.PNG` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
  };
  const faq = data.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  } : null;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: data.title },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

export type ArticleData = {
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishDate: string;
  sections: { heading: string; content: string }[];
  faq: { q: string; a: string }[];
  related: { title: string; href: string }[];
  resources: { title: string; href: string }[];
  caseStudies: { title: string; href: string }[];
};

export function ArticlePage({ data }: { data: ArticleData }) {
  const pathname = usePathname();
  const slug = pathname.split("/").pop() || "";

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6EF] text-[#11100E]">
      <ArticleSchema data={data} slug={slug} />
      <Navbar />
      <main>
        {/* Breadcrumbs */}
        <div className="px-6 pt-6 sm:pt-8">
          <div className="mx-auto max-w-3xl flex items-center gap-1.5 text-xs text-[#74695B]">
            <Link href="/" className="hover:text-[#004225]">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/blog" className="hover:text-[#004225]">Blog</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href={`/blog?category=${data.category.toLowerCase()}`} className="hover:text-[#004225]">{data.category}</Link>
          </div>
        </div>

        {/* Hero */}
        <section className="px-6 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#004225]">{data.category}</span>
              <h1 className="font-display mt-3 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl">{data.title}</h1>
              <p className="mt-4 text-base leading-relaxed text-[#74695B] sm:text-lg">{data.description}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-[#74695B]">
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {data.readTime}</span>
                <span>{data.publishDate}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Table of Contents + Body */}
        <section className="border-t border-black/[0.06] px-6 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            {/* TOC */}
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-black/10 bg-white p-6 shadow-mid mb-10">
              <h2 className="text-sm font-bold flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#004225]" /> Table of Contents</h2>
              <ol className="mt-3 space-y-1.5">
                {data.sections.map((s, i) => (
                  <li key={i} className="text-sm text-[#74695B] hover:text-[#004225] cursor-pointer transition-colors">
                    {i + 1}. {s.heading}
                  </li>
                ))}
              </ol>
            </motion.div>

            {/* Article body */}
            {data.sections.map((section, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="mb-10">
                <h2 className="text-xl font-bold tracking-tight sm:text-2xl mb-4">{section.heading}</h2>
                <div className="prose prose-sm max-w-none text-[#74695B] leading-relaxed space-y-4">
                  {section.content.split("\n\n").map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* FAQ */}
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-mid mb-10">
              <h2 className="text-lg font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {data.faq.map((item, i) => (
                  <div key={i} className="border-b border-black/[0.04] last:border-0 pb-3">
                    <h3 className="text-sm font-bold text-[#11100E]">{item.q}</h3>
                    <p className="mt-1 text-sm text-[#74695B]">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="flex items-center gap-3 text-sm text-[#74695B] mb-10">
              <Share2 className="h-4 w-4" />
              <span className="font-bold">Share this article</span>
            </div>

            {/* Related */}
            <div className="grid gap-8 sm:grid-cols-2 mb-10">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-[#74695B] mb-3">Related Articles</h3>
                <div className="space-y-2">
                  {data.related.map((r, i) => (
                    <Link key={i} href={r.href} className="block text-sm font-medium text-[#004225] hover:text-[#11100E] transition-colors">{r.title}</Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-[#74695B] mb-3">Related Resources</h3>
                <div className="space-y-2">
                  {data.resources.map((r, i) => (
                    <Link key={i} href={r.href} className="block text-sm font-medium text-[#004225] hover:text-[#11100E] transition-colors">{r.title}</Link>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-[#004225]/20 bg-white p-8 text-center shadow-mid">
              <h2 className="text-xl font-bold">Ready to take the next step?</h2>
              <p className="mt-2 text-sm text-[#74695B]">Book a free discovery call and we will map your operations together.</p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#004225] px-6 py-3 text-sm font-bold text-white hover:bg-[#11100E] transition-colors">
                Book Discovery Call <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
