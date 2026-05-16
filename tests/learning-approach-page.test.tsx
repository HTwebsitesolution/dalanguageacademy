import { screen } from "@testing-library/react";

import { renderLocalePage } from "@/tests/render-locale-page";

describe("LearningApproachPage", () => {
  it("renders the language skills, methods, and CTA options", async () => {
    await renderLocalePage(() => import("@/app/[locale]/learning-approach/page"));

    expect(screen.getByRole("heading", { name: /^listening$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^grammar$/i })).toBeInTheDocument();
    expect(screen.getByText(/movies in english/i)).toBeInTheDocument();
    screen
      .getAllByRole("link", { name: /uk coaching sessions/i })
      .forEach((link) => {
        expect(link).toHaveAttribute("href", "/en/uk-coaching-sessions");
      });
    screen
      .getAllByRole("link", { name: /contact \/ apply/i })
      .forEach((link) => {
        expect(link).toHaveAttribute("href", "/en/contact");
      });
  });
});
