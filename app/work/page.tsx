"use client";

import { LocaleProvider, useLocaleFromCookie, useT } from "../lib/LocaleContext";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { OurWorkContent } from "./OurWorkContent";

export default function OurWorkPage() {
  const locale = useLocaleFromCookie();
  return (
    <LocaleProvider locale={locale}>
      <div className="flex min-h-screen flex-col bg-[#F8F6EF]">
        <Navbar />
        <main className="flex-1">
          <OurWorkContent />
        </main>
        <Footer />
      </div>
    </LocaleProvider>
  );
}
