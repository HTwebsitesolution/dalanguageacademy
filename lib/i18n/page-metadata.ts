import type { Metadata } from "next";

import { getSiteContent, type SiteContent } from "@/content";
import { createPageMetadata } from "@/lib/metadata";
import { resolveLocale } from "@/lib/i18n/resolve-locale";
import type { Locale } from "@/lib/i18n/config";

export type SeoPageKey = keyof SiteContent["seo"];

export function buildPageMetadata(locale: Locale, page: SeoPageKey): Metadata {
  const content = getSiteContent(locale);
  const { title, description, path } = content.seo[page];

  return createPageMetadata({
    title,
    description,
    path,
    locale,
  });
}

export async function generateLocaleMetadata(
  params: Promise<{ locale: string }>,
  page: SeoPageKey,
): Promise<Metadata> {
  const { locale: localeParam } = await params;
  return buildPageMetadata(resolveLocale(localeParam), page);
}
