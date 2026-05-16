import { metadata as rootMetadata } from "@/app/layout";
import { buildPageMetadata } from "@/lib/i18n/page-metadata";

describe("metadata", () => {
  it("uses the deployment-ready site title and core description in the root layout", () => {
    expect(rootMetadata.title).toEqual({
      default: "D.A Language Academy | English Training in Niamey",
      template: "%s | D.A Language Academy",
    });
    expect(rootMetadata.description).toBe(
      "Practical English language training in Niamey for students, professionals and organisations. CEFR-based 3-month programmes with weekly online discussion sessions with UK-based coaches.",
    );
  });

  it("adds Open Graph metadata for each page", () => {
    const pageKeys = [
      "home",
      "programmes",
      "learningApproach",
      "ukCoaching",
      "organisations",
      "about",
      "contact",
    ] as const;

    pageKeys.forEach((page) => {
      const metadata = buildPageMetadata("en", page);
      expect(metadata.openGraph).toBeDefined();
      expect(metadata.openGraph?.title).toBeTruthy();
      expect(metadata.openGraph?.description).toBeTruthy();
    });
  });

  it("localizes canonical paths per locale", () => {
    const english = buildPageMetadata("en", "about");
    const french = buildPageMetadata("fr", "about");

    expect(english.alternates?.canonical).toBe("/en/about");
    expect(french.alternates?.canonical).toBe("/fr/about");
  });
});
