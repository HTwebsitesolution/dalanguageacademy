import { screen } from "@testing-library/react";

import { renderLocalePage } from "@/tests/render-locale-page";

describe("AboutPage", () => {
  it("renders the academy story, mission, values, and CTA links", async () => {
    await renderLocalePage(() => import("@/app/[locale]/about/page"));

    expect(
      screen.getByRole("heading", { name: /about d\.a language academy/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/established in 2022/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/based in niamey, niger/i).length).toBeGreaterThan(0);
    expect(
      screen.getByText(
        /help learners communicate more confidently in english for academic, professional and international contexts/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(/d\.a language academy official crest logo/i),
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
        expect(link).toHaveAttribute("href", "/en/programmes");
      });
  });
});
