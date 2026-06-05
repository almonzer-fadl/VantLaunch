import type { Metadata } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { OurWorkContent } from "./OurWorkContent";

export const metadata: Metadata = {
  title: "Our Work — 8+ Systems Shipped | VantLaunch",
  description:
    "Custom dashboards, portals, and mobile apps built for auto repair shops, freelancers, and service businesses. Real systems, real outcomes.",
  openGraph: {
    title: "Our Work — 8+ Systems Shipped | VantLaunch",
    description:
      "Real operating systems shipped for real businesses. See dashboards, portals, and mobile apps with measurable outcomes.",
  },
};

export default function OurWorkPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F6EF]">
      <Navbar />
      <main className="flex-1">
        <OurWorkContent />
      </main>
      <Footer />
    </div>
  );
}
