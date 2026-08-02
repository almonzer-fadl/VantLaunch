"use client";

import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "../lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#F8F6EF] px-6 py-12 text-[#11100E] sm:py-16 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 md:flex-row">
        <div className="max-w-sm">
          <Link href="/" className="mb-6 flex items-center gap-0">
            <Image
              src="/brand/icon.PNG"
              alt="VantLaunch logo"
              width={49}
              height={49}
              className="h-10 w-10 rounded-lg object-contain sm:h-14 sm:w-14"
            />
            <span className="text-lg font-bold tracking-tight text-[#11100E]">
              VantLaunch
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-[#74695B]">
            One owned operating system — built around how your company actually works.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 md:w-auto md:gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#74695B]">Services</span>
            <FooterLink href="/#services">Foundation</FooterLink>
            <FooterLink href="/#services">Portal</FooterLink>
            <FooterLink href="/#services">Command</FooterLink>
            <FooterLink href="/#services">OS</FooterLink>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#74695B]">Work</span>
            <FooterLink href="https://speakbill.vantlaunch.com">SpeakBill</FooterLink>
            <FooterLink href="https://app.teramotor.cc/register">TeraMotors</FooterLink>
            <FooterLink href="/work/gari">Gari</FooterLink>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#74695B]">Company</span>
            <FooterLink href="/#contact">Contact</FooterLink>
            <FooterLink href={SOCIAL_LINKS.github}>GitHub</FooterLink>
            <FooterLink href={SOCIAL_LINKS.linkedin}>LinkedIn</FooterLink>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-black/10 pt-10 md:mt-24 md:flex-row">
        <p className="text-xs text-[#74695B]">
          © 2026 VantLaunch. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-xs text-[#74695B] transition-colors hover:text-[#004225]">
            Privacy
          </Link>
          <Link href="/terms" className="text-xs text-[#74695B] transition-colors hover:text-[#004225]">
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
      className="text-sm font-bold text-[#74695B] transition-colors hover:text-[#004225]"
    >
      {children}
    </Link>
  );
}
