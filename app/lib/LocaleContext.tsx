"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Locale } from "@/app/lib/locales";
import { LOCALE_DATA, isRTL as checkRTL } from "@/app/lib/locales";

const LocaleContext = createContext<Locale>("global");

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function useT() {
  const locale = useLocale();
  return LOCALE_DATA[locale];
}

export function useIsRTL() {
  const locale = useLocale();
  return checkRTL(locale);
}

export function useLocaleFromCookie(): Locale {
  const [locale, setLocale] = useState<Locale>("global");
  useEffect(() => {
    const match = document.cookie.match(/vl_locale=([^;]+)/);
    if (match && match[1]) {
      setLocale(match[1] as Locale);
    }
  }, []);
  return locale;
}
