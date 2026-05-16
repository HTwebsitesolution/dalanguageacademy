import type { Metadata } from "next";

import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/routing";

export const siteMetadata = {
  name: "D.A Language Academy",
  siteTitle: "D.A Language Academy | English Training in Niamey",
  description:
    "Practical English language training in Niamey for students, professionals and organisations. CEFR-based 3-month programmes with weekly online discussion sessions with UK-based coaches.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
};

export function createPageMetadata({
  title,
  description,
  path,
  locale = "en",
}: PageMetadataInput): Metadata {
  const localizedPath = withLocale(path, locale);
  const canonical = `${siteMetadata.siteUrl}${localizedPath}`;
  const homeTitles = new Set(["Home", "Accueil"]);
  const fullTitle = homeTitles.has(title)
    ? siteMetadata.siteTitle
    : `${title} | ${siteMetadata.name}`;

  const languages = Object.fromEntries(
    locales.map((code) => [code, `${siteMetadata.siteUrl}${withLocale(path, code)}`]),
  );

  return {
    title,
    description,
    alternates: {
      canonical: localizedPath,
      languages,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteMetadata.name,
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
