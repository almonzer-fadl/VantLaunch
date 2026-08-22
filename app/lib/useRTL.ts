"use client";

import { useIsRTL } from "@/app/lib/LocaleContext";

export function useRTL() {
  return useIsRTL();
}

export function rtlValue<T>(isRTL: boolean, ltr: T, rtl: T): T {
  return isRTL ? rtl : ltr;
}

export function rtlX(isRTL: boolean, ltrX: number): number {
  return isRTL ? -ltrX : ltrX;
}
