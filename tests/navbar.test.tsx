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
    screen.getAllByRole("link", { name: "UK Coaching Sessions" }).forEach((link) => {
      expect(link).toHaveAttribute("href", "/uk-coaching-sessions");
    });
    screen.getAllByRole("link", { name: "Organisations" }).forEach((link) => {
      expect(link).toHaveAttribute("href", "/organisations");
    });
    screen.getAllByRole("link", { name: "About" }).forEach((link) => {
      expect(link).toHaveAttribute("href", "/about");
    });
    screen
      .getAllByRole("link", { name: "Contact / Apply" })
      .forEach((link) => {
        expect(link).toHaveAttribute("href", "/contact");
      });
    screen
      .getAllByRole("link", { name: "Apply via WhatsApp" })
      .forEach((link) => {
        expect(link.getAttribute("href")).toContain("wa.me/");
      });
  });
});
