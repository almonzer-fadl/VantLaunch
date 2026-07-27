import type { Metadata } from "next";
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
  title: "VantLaunch — Custom Dashboards, Portals & Mobile Apps",
  description:
    "We build custom dashboards, client portals, and mobile apps for businesses. Fixed-price projects starting at $1,500. Portfolio of 8 shipped products.",
  icons: {
    icon: "/vantlaunch-logo.png",
    apple: "/vantlaunch-logo.png",
  },
  openGraph: {
    title: "VantLaunch — Custom Dashboards, Portals & Mobile Apps",
    description:
      "Custom dashboards, client portals, and mobile apps — built for your business. Fixed prices, clear process, real portfolio.",
    images: [
      {
        url: "/vantlaunch-logo.jpeg",
        width: 500,
        height: 500,
        alt: "VantLaunch logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "VantLaunch — Custom Dashboards, Portals & Mobile Apps",
    description:
      "We build custom software for businesses — dashboards, portals, and mobile apps. Starting at $1,500.",
    images: ["/vantlaunch-logo.jpeg"],
  },
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
      <body className="flex min-h-full flex-col bg-canvas">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
