import { NextResponse } from "next/server";
import { ARTICLES } from "@/app/lib/articles";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://vantlaunch.com";

export async function GET() {
  const items = Object.entries(ARTICLES).map(([slug, a]) => `
    <item>
      <title><![CDATA[${a.title}]]></title>
      <link>${SITE_URL}/blog/${slug}</link>
      <description><![CDATA[${a.description}]]></description>
      <pubDate>${new Date(a.publishDate).toUTCString()}</pubDate>
      <category>${a.category}</category>
    </item>`).join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>VantLaunch Blog — Custom Internal Business Systems</title>
    <link>${SITE_URL}/blog</link>
    <description>Practical guides on building internal systems, automating workflows, and scaling operations for growing service businesses.</description>
    <language>en</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new NextResponse(feed, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
