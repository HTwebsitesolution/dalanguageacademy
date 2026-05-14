import { render, screen } from "@testing-library/react";

import { Navbar } from "@/components/layout/navbar";

describe("Navbar", () => {
  it("uses real route links for the new Phase 2 pages", () => {
    render(<Navbar />);

    screen.getAllByRole("link", { name: "Programmes" }).forEach((link) => {
      expect(link).toHaveAttribute("href", "/programmes");
    });
    screen
      .getAllByRole("link", { name: "Learning Approach" })
      .forEach((link) => {
        expect(link).toHaveAttribute("href", "/learning-approach");
      });
    screen
      .getAllByRole("link", { name: "Contact / Apply" })
      .forEach((link) => {
        expect(link).toHaveAttribute("href", "/#apply");
      });
  });
});
