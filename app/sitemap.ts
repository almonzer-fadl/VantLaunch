import type { MetadataRoute } from "next";
import { ARTICLES } from "@/app/lib/articles";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL?.startsWith("http")
  ? process.env.NEXT_PUBLIC_SITE_URL
  : "https://vantlaunch.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "", priority: 1.0, changeFreq: "weekly" as const },
    { path: "/blog", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/solutions", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/work", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/book", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/operations-audit", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/gallery", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/industries", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/resources", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/templates", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/tools/roi-calculator", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/tools/operations-score", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/roadmap", priority: 0.6, changeFreq: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/faq", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFreq: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFreq: "yearly" as const },
    { path: "/industries/marketing-agencies", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/industries/consulting", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/industries/accounting", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/solutions/executive-dashboards", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/solutions/client-portals", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/solutions/workflow-automation", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/solutions/internal-crm", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/solutions/reporting-systems", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/solutions/approval-systems", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/solutions/business-os", priority: 0.7, changeFreq: "monthly" as const },
  ];

  const blogArticles = Object.keys(ARTICLES).map((slug) => ({
    path: `/blog/${slug}`,
    priority: 0.7,
    changeFreq: "monthly" as const,
  }));

  return [...staticPages, ...blogArticles].map(({ path, priority, changeFreq }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
  }));
}
