import type { Locale } from "@/lib/i18n/config";
import { siteContent as siteContentEn } from "@/content/site.en";
import { siteContentFr } from "@/content/site.fr";

export type SiteContent = typeof siteContentEn;

export function getSiteContent(locale: Locale): SiteContent {
  return (locale === "fr" ? siteContentFr : siteContentEn) as SiteContent;
}

/** @deprecated Use getSiteContent(locale) */
export const siteContent = siteContentEn;
