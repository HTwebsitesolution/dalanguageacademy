import { render, screen } from "@testing-library/react";

import { BrandLogo } from "@/components/brand/brand-logo";
import { brandAssets } from "@/lib/brand";

describe("BrandLogo", () => {
  it("renders compact, full, and footer variants with accessible alt text", () => {
    const { rerender } = render(<BrandLogo variant="full" />);
    expect(screen.getByAltText(brandAssets.altFull)).toHaveAttribute(
      "src",
      brandAssets.fullTransparent,
    );

    rerender(<BrandLogo variant="compact" />);
    expect(screen.getByAltText(brandAssets.altMark)).toHaveAttribute(
      "src",
      brandAssets.mark,
    );

    rerender(<BrandLogo variant="footer" />);
    expect(screen.getByAltText(brandAssets.altFull)).toHaveAttribute(
      "src",
      brandAssets.footer,
    );
  });
});
