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
  title: "VantLaunch | Custom Dashboards & Business Systems",
  description:
    "Custom dashboards and business systems for growing companies. Replace spreadsheets and disconnected software with software built around your business.",
  icons: {
    icon: "/brand/favicon.PNG",
    shortcut: "/brand/favicon.PNG",
    apple: "/brand/icon.PNG",
  },
  openGraph: {
    title: "VantLaunch | Custom Dashboards & Business Systems",
    description:
      "Custom dashboards and business systems for growing companies. Replace spreadsheets and disconnected software with software built around your business.",
    images: [
      {
        url: "/brand/vantlaunch-og.png",
        width: 1200,
        height: 630,
        alt: "VantLaunch logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "VantLaunch | Custom Dashboards & Business Systems",
    description:
      "Custom dashboards and business systems for growing companies. Replace spreadsheets and disconnected software with software built around your business.",
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
      </head>
      <body className="flex min-h-full flex-col bg-canvas">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
