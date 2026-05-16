import { screen } from "@testing-library/react";

import { renderLocalePage } from "@/tests/render-locale-page";

describe("ProgrammesPage", () => {
  it("renders the core programme facts and CTA", async () => {
    await renderLocalePage(() => import("@/app/[locale]/programmes/page"));

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
        expect(link).toHaveAttribute("href", "/en/contact");
      });
  });
});
