import "@testing-library/jest-dom/vitest";
import { createElement } from "react";
import { vi } from "vitest";

vi.mock("next/font/google", () => ({
  Inter: () => ({ variable: "font-inter" }),
  Cormorant_Garamond: () => ({ variable: "font-cormorant" }),
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

vi.mock("next/image", () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean }) => {
    const { src, alt, priority: _priority, fill: _fill, ...rest } = props;
    return createElement("img", {
      src: typeof src === "string" ? src : "",
      alt: alt ?? "",
      ...rest,
    });
  },
}));

class MockIntersectionObserver implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = "0px";
  readonly scrollMargin = "0px";
  readonly thresholds = [0];

  disconnect() {}

  observe() {}

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }

  unobserve() {}
}

vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
