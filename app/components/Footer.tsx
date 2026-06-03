"use client";

import Image from "next/image";
import Link from "next/link";
import { SOCIAL_LINKS } from "../lib/constants";

export function Footer() {
  return (
    <footer className="divider bg-surface/30 px-6 py-16 md:py-20">
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
            <span className="text-lg font-bold tracking-tight text-white">
              VantLaunch
            </span>
          </div>
          <p className="text-sm leading-relaxed text-stone-500">
            Custom dashboards, portals, and mobile apps — built for your business.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 md:w-auto md:gap-16">
          <div className="flex flex-col gap-4">
            <span className="type-label">Services</span>
            <FooterLink href="#services">Dashboards</FooterLink>
            <FooterLink href="#services">Portals</FooterLink>
            <FooterLink href="#services">Mobile apps</FooterLink>
          </div>
          <div className="flex flex-col gap-4">
            <span className="type-label">Work</span>
            <FooterLink href="https://speakbill.vantlaunch.com">SpeakBill</FooterLink>
            <FooterLink href="https://app.teramotor.cc/register">TeraMotors</FooterLink>
            <FooterLink href="/work/gari">Gari</FooterLink>
          </div>
          <div className="flex flex-col gap-4">
            <span className="type-label">Company</span>
            <FooterLink href="#contact">Contact</FooterLink>
            <FooterLink href={SOCIAL_LINKS.github}>GitHub</FooterLink>
            <FooterLink href={SOCIAL_LINKS.linkedin}>LinkedIn</FooterLink>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/[0.04] pt-10 md:mt-24 md:flex-row">
        <p className="text-xs text-stone-600">
          © 2026 VantLaunch. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-xs text-stone-600 hover:text-stone-400 transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="text-xs text-stone-600 hover:text-stone-400 transition-colors">
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
      className="text-sm font-medium text-stone-400 transition-colors hover:text-white"
    >
      {children}
    </Link>
  );
}
