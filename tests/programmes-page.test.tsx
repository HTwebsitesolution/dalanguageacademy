import { render, screen } from "@testing-library/react";

describe("ProgrammesPage", () => {
  it("renders the core programme facts and CTA", async () => {
    const pageModule = await import("@/app/programmes/page");
    const ProgrammesPage = pageModule.default;

    render(<ProgrammesPage />);

    expect(
      screen.getByRole("heading", { name: /^cefr a1 to c2 pathway$/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/50,000 CFA/i).length).toBeGreaterThan(0);
    expect(
      screen.getByText(/tests and certificates included/i),
    ).toBeInTheDocument();
    screen
      .getAllByRole("link", { name: /contact \/ apply/i })
      .forEach((link) => {
        expect(link).toHaveAttribute("href", "/contact");
      });
  });
});
