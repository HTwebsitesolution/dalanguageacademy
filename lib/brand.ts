/** Official logo assets — served from /public/images/logo/ */
export const brandAssets = {
  full: "/images/logo/da-logo-full.png",
  fullTransparent: "/images/logo/da-logo-transparent.png",
  mark: "/images/logo/da-logo-mark.png",
  footer: "/images/logo/da-logo-footer.png",
  altFull: "D.A Language Academy official crest logo",
  altMark: "D.A Language Academy crest mark",
} as const;

export type BrandLogoVariant = "compact" | "full" | "footer";

/** Intrinsic dimensions of exported PNGs (for Next.js Image and layout stability). */
export const brandLogoDimensions = {
  compact: { width: 634, height: 981 },
  full: { width: 991, height: 1140 },
  footer: { width: 991, height: 1140 },
} as const;

/** Display sizes on screen (object-contain within fixed boxes to avoid layout shift). */
export const brandLogoDisplay = {
  compact: { width: 72, height: 112 },
  full: { width: 260, height: 299 },
  footer: { width: 168, height: 193 },
} as const;
