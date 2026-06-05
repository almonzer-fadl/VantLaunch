import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL?.startsWith("http")
  ? process.env.NEXT_PUBLIC_SITE_URL
  : "https://vantlaunch.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1.0, changeFreq: "weekly" as const },
    { path: "/work", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/work/teramotors", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/work/speakbill", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/work/gari", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFreq: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFreq: "yearly" as const },
  ];

  return pages.map(({ path, priority, changeFreq }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
  }));
}
