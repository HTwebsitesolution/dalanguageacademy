import type { Metadata } from "next";

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
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const fullTitle =
    title === "Home" ? siteMetadata.siteTitle : `${title} | ${siteMetadata.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteMetadata.name,
      type: "website",
      locale: "en_US",
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
