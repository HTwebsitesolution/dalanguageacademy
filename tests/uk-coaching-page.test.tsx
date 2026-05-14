import { render, screen } from "@testing-library/react";

describe("UKCoachingSessionsPage", () => {
  it("renders the coaching message, process steps, and CTA links", async () => {
    const pageModule = await import("@/app/uk-coaching-sessions/page");
    const UKCoachingSessionsPage = pageModule.default;

    render(<UKCoachingSessionsPage />);

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
      .getAllByRole("link", { name: /view programmes/i })
      .forEach((link) => {
        expect(link).toHaveAttribute("href", "/programmes");
      });
  });
});
