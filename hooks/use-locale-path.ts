"use client";

import { usePathname } from "next/navigation";

import type { Locale } from "@/lib/i18n/config";
import { getLocaleFromPathname, switchLocalePath, withLocale } from "@/lib/i18n/routing";

export function useLocalePath() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  return {
    locale,
    href: (path: string, targetLocale: Locale = locale) => withLocale(path, targetLocale),
    switchPath: (targetLocale: Locale) => switchLocalePath(pathname, targetLocale),
  };
}
