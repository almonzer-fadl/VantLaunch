"use client";

import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "../lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#fffaf0] px-6 py-16 text-[#11100e] md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 md:flex-row">
        <div className="max-w-sm">
          <div className="mb-6 flex items-center gap-3">
            <Image
              src="/vantlaunch-logo.png"
              alt="VantLaunch logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg object-contain"
            />
            <span className="text-lg font-bold tracking-tight text-[#11100e]">
              VantLaunch
            </span>
          </div>
          <p className="text-sm leading-relaxed text-[#5f5548]">
            Custom dashboards, portals, and mobile apps — built for your business.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 md:w-auto md:gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#74695b]">Services</span>
            <FooterLink href="#services">Dashboards</FooterLink>
            <FooterLink href="#services">Portals</FooterLink>
            <FooterLink href="#services">Mobile apps</FooterLink>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#74695b]">Work</span>
            <FooterLink href="https://speakbill.vantlaunch.com">SpeakBill</FooterLink>
            <FooterLink href="https://app.teramotor.cc/register">TeraMotors</FooterLink>
            <FooterLink href="/work/gari">Gari</FooterLink>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#74695b]">Company</span>
            <FooterLink href="#contact">Contact</FooterLink>
            <FooterLink href={SOCIAL_LINKS.github}>GitHub</FooterLink>
            <FooterLink href={SOCIAL_LINKS.linkedin}>LinkedIn</FooterLink>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-black/10 pt-10 md:mt-24 md:flex-row">
        <p className="text-xs text-[#74695b]">
          © 2026 VantLaunch. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-xs text-[#74695b] transition-colors hover:text-blue-700">
            Privacy
          </Link>
          <Link href="/terms" className="text-xs text-[#74695b] transition-colors hover:text-blue-700">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="text-sm font-bold text-[#5f5548] transition-colors hover:text-blue-700"
    >
      {children}
    </Link>
  );
}
