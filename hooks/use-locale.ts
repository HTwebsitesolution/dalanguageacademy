"use client";

import { usePathname } from "next/navigation";

import type { Locale } from "@/lib/i18n/config";
import { getLocaleFromPathname } from "@/lib/i18n/routing";

export function useLocale(): Locale {
  const pathname = usePathname();
  return getLocaleFromPathname(pathname);
}
