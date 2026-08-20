import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.startsWith("http")
    ? process.env.NEXT_PUBLIC_SITE_URL
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "VantLaunch | Custom Internal Business Systems for Growing Service Businesses",
  description:
    "Stop losing hours to scattered tools, manual reporting, and disconnected workflows. We build custom internal business systems that give you operational clarity, save your team time, and grow with your business — delivered in weeks, not months.",
  icons: {
    icon: "/brand/favicon.PNG",
    shortcut: "/brand/favicon.PNG",
    apple: "/brand/icon.PNG",
  },
  openGraph: {
    title: "Your Business Has Outgrown Its Tools — VantLaunch",
    description:
      "Scattered platforms. Manual reporting. No visibility. We build custom internal business systems that replace the chaos with one connected workspace you own.",
    images: [
      {
        url: "/brand/vantlaunch-og.png",
        width: 1200,
        height: 630,
        alt: "VantLaunch — Custom Internal Business Systems",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Your Business Has Outgrown Its Tools — VantLaunch",
    description:
      "Scattered platforms. Manual reporting. No visibility. We build custom internal business systems that replace the chaos with one connected workspace you own.",
    images: ["/brand/vantlaunch-og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#004225",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="flex min-h-full flex-col bg-canvas">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
