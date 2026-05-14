import { metadata as aboutMetadata } from "@/app/about/page";
import { metadata as contactMetadata } from "@/app/contact/page";
import { metadata as homeMetadata } from "@/app/page";
import { metadata as learningApproachMetadata } from "@/app/learning-approach/page";
import { metadata as rootMetadata } from "@/app/layout";
import { metadata as organisationsMetadata } from "@/app/organisations/page";
import { metadata as programmesMetadata } from "@/app/programmes/page";
import { metadata as ukCoachingMetadata } from "@/app/uk-coaching-sessions/page";

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
    const pageMetadata = [
      homeMetadata,
      programmesMetadata,
      learningApproachMetadata,
      ukCoachingMetadata,
      organisationsMetadata,
      aboutMetadata,
      contactMetadata,
    ];

    pageMetadata.forEach((metadata) => {
      expect(metadata.openGraph).toBeDefined();
      expect(metadata.openGraph?.title).toBeTruthy();
      expect(metadata.openGraph?.description).toBeTruthy();
    });
  });
});
