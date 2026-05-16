import { render, screen } from "@testing-library/react";

import { Navbar } from "@/components/layout/navbar";

describe("Navbar", () => {
  it("uses locale-prefixed route links and shows the language switcher", () => {
    render(<Navbar />);

    expect(screen.getAllByText("DA").length).toBeGreaterThan(0);
    expect(screen.queryByAltText(/official crest logo/i)).not.toBeInTheDocument();
    expect(screen.getAllByRole("group", { name: /language/i }).length).toBeGreaterThan(0);

    screen.getAllByRole("link", { name: "Programmes" }).forEach((link) => {
      expect(link).toHaveAttribute("href", "/en/programmes");
    });
    screen
      .getAllByRole("link", { name: "Learning Approach" })
      .forEach((link) => {
        expect(link).toHaveAttribute("href", "/en/learning-approach");
      });
    screen.getAllByRole("link", { name: "UK Coaching Sessions" }).forEach((link) => {
      expect(link).toHaveAttribute("href", "/en/uk-coaching-sessions");
    });
    screen.getAllByRole("link", { name: "Organisations" }).forEach((link) => {
      expect(link).toHaveAttribute("href", "/en/organisations");
    });
    screen.getAllByRole("link", { name: "About" }).forEach((link) => {
      expect(link).toHaveAttribute("href", "/en/about");
    });
    screen
      .getAllByRole("link", { name: "Contact / Apply" })
      .forEach((link) => {
        expect(link).toHaveAttribute("href", "/en/contact");
      });
    screen
      .getAllByRole("link", { name: "Apply via WhatsApp" })
      .forEach((link) => {
        expect(link.getAttribute("href")).toContain("wa.me/");
      });
  });
});
