import { render, screen } from "@testing-library/react";

describe("LearningApproachPage", () => {
  it("renders the language skills, methods, and CTA options", async () => {
    const pageModule = await import("@/app/learning-approach/page");
    const LearningApproachPage = pageModule.default;

    render(<LearningApproachPage />);

    expect(screen.getByRole("heading", { name: /^listening$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^grammar$/i })).toBeInTheDocument();
    expect(screen.getByText(/movies in english/i)).toBeInTheDocument();
    screen
      .getAllByRole("link", { name: /uk coaching sessions/i })
      .forEach((link) => {
        expect(link).toHaveAttribute("href", "/#uk-coaching");
      });
    screen
      .getAllByRole("link", { name: /contact \/ apply/i })
      .forEach((link) => {
        expect(link).toHaveAttribute("href", "/#apply");
      });
  });
});
