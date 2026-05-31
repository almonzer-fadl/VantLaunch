import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
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
  title: "VantLaunch — Build. Ship. Scale.",
  description:
    "VantLaunch is a product studio that builds, ships, and scales focused SaaS products — starting with TeraMotors for automotive workshops and expanding into booking, invoicing, and operations tools.",
  icons: {
    icon: "/vantlaunch-logo.png",
    apple: "/vantlaunch-logo.png",
  },
  openGraph: {
    title: "VantLaunch — Build. Ship. Scale.",
    description:
      "A product studio that builds, ships, and scales focused SaaS products — TeraMotors for workshops, SpeakBill for invoicing, Gari for drivers.",
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
    title: "VantLaunch — Build. Ship. Scale.",
    description:
      "A product studio that builds, ships, and scales focused SaaS products for real businesses.",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-zinc">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
