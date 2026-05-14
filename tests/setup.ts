import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("next/font/google", () => ({
  Inter: () => ({ variable: "font-inter" }),
  Cormorant_Garamond: () => ({ variable: "font-cormorant" }),
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
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
