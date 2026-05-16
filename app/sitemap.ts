import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n/config";
import { withLocale } from "@/lib/i18n/routing";
import { siteMetadata } from "@/lib/metadata";

const routes = [
  "",
  "/programmes",
  "/learning-approach",
  "/uk-coaching-sessions",
  "/organisations",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteMetadata.siteUrl}${withLocale(route, locale)}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
    })),
  );
}
