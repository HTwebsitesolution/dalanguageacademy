import { render, screen } from "@testing-library/react";

describe("AboutPage", () => {
  it("renders the academy story, mission, values, and CTA links", async () => {
    const pageModule = await import("@/app/about/page");
    const AboutPage = pageModule.default;

    render(<AboutPage />);

    expect(
      screen.getByRole("heading", { name: /about d\.a language academy/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/established in 2022/i)).toBeInTheDocument();
    expect(screen.getAllByText(/based in niamey, niger/i).length).toBeGreaterThan(0);
    expect(
      screen.getByText(
        /help learners communicate more confidently in english for academic, professional and international contexts/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(/^confidence$/i)).toBeInTheDocument();
    expect(screen.getByText(/^structure$/i)).toBeInTheDocument();
    screen
      .getAllByRole("link", { name: /apply via whatsapp/i })
      .forEach((link) => {
        expect(link).toHaveAttribute("href");
      });
    screen
      .getAllByRole("link", { name: /explore programmes/i })
      .forEach((link) => {
        expect(link).toHaveAttribute("href", "/programmes");
      });
  });
});
