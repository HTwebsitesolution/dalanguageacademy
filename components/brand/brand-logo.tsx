import Image from "next/image";

import {
  brandAssets,
  brandLogoDimensions,
  brandLogoDisplay,
  type BrandLogoVariant,
} from "@/lib/brand";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant?: BrandLogoVariant;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
};

const variantConfig = {
  compact: {
    src: brandAssets.mark,
    alt: brandAssets.altMark,
    intrinsic: brandLogoDimensions.compact,
    display: brandLogoDisplay.compact,
    sizes: "72px",
  },
  full: {
    src: brandAssets.fullTransparent,
    alt: brandAssets.altFull,
    intrinsic: brandLogoDimensions.full,
    display: brandLogoDisplay.full,
    sizes: "(max-width: 640px) 200px, 260px",
  },
  footer: {
    src: brandAssets.footer,
    alt: brandAssets.altFull,
    intrinsic: brandLogoDimensions.footer,
    display: brandLogoDisplay.footer,
    sizes: "168px",
  },
  contact: {
    src: brandAssets.footer,
    alt: brandAssets.altFull,
    intrinsic: brandLogoDimensions.footer,
    display: brandLogoDisplay.contact,
    sizes: "52px",
  },
} as const;

export function BrandLogo({
  variant = "full",
  className,
  wrapperClassName,
  priority = false,
}: BrandLogoProps) {
  const config = variantConfig[variant];
  const { display, intrinsic } = config;

  return (
    <div
      className={cn(
        "relative shrink-0",
        variant === "full" &&
          "rounded-[1.5rem] border border-[color:var(--color-border)] bg-white p-3 shadow-[0_12px_40px_rgba(15,23,42,0.06)] sm:p-4",
        variant === "full" && "border-l-4 border-l-[color:var(--color-crest-700)]",
        variant === "footer" && "max-w-[168px]",
        wrapperClassName,
      )}
      style={{
        width: display.width,
        height: display.height,
      }}
    >
      <Image
        src={config.src}
        alt={config.alt}
        width={intrinsic.width}
        height={intrinsic.height}
        sizes={config.sizes}
        priority={priority}
        className={cn("h-full w-full object-contain object-center", className)}
      />
    </div>
  );
}
