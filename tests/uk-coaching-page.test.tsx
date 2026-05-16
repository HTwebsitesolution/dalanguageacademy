import { screen } from "@testing-library/react";

import { renderLocalePage } from "@/tests/render-locale-page";

describe("UKCoachingSessionsPage", () => {
  it("renders the coaching message, process steps, and CTA links", async () => {
    await renderLocalePage(() => import("@/app/[locale]/uk-coaching-sessions/page"));

    expect(
      screen.getByRole("heading", {
        name: /weekly online speaking sessions with uk-based coaches/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/experience english beyond the classroom/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/join online discussion with uk-based coaches/i),
    ).toBeInTheDocument();
    screen
      .getAllByRole("link", { name: /apply via whatsapp/i })
      .forEach((link) => {
        expect(link).toHaveAttribute("href");
      });
    screen
      .getAllByRole("link", { name: /explore programmes/i })
      .forEach((link) => {
        expect(link).toHaveAttribute("href", "/en/programmes");
      });
  });
});
