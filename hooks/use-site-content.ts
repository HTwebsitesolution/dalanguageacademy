"use client";

import { getSiteContent } from "@/content";
import { useLocale } from "@/hooks/use-locale";

export function useSiteContent() {
  const locale = useLocale();
  return getSiteContent(locale);
}
