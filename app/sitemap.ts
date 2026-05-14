import type { MetadataRoute } from "next";

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
  return routes.map((route) => ({
    url: `${siteMetadata.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
