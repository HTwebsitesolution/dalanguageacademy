import { render, screen } from "@testing-library/react";

describe("OrganisationsPage", () => {
  it("renders organisation-focused content, institution names, and CTA links", async () => {
    const pageModule = await import("@/app/organisations/page");
    const OrganisationsPage = pageModule.default;

    render(<OrganisationsPage />);

    expect(
      screen.getByText(
        /D\.A Language Academy has worked with learners and professionals connected to respected organisations and institutions, including international NGOs and higher education institutions\./i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("RESCUE")).toBeInTheDocument();
    expect(screen.getByText("Danish Refugee Council")).toBeInTheDocument();
    expect(screen.getByText("Save the Children")).toBeInTheDocument();
    expect(screen.getByText("IOM International")).toBeInTheDocument();
    expect(screen.getByText("ETEC")).toBeInTheDocument();
    expect(screen.getByText("ESPA")).toBeInTheDocument();
    expect(screen.getByText("EPI")).toBeInTheDocument();
    screen
      .getAllByRole("link", { name: /discuss organisation training/i })
      .forEach((link) => {
        expect(link).toHaveAttribute("href", "/#apply");
      });
    screen
      .getAllByRole("link", { name: /contact \/ apply/i })
      .forEach((link) => {
        expect(link).toHaveAttribute("href", "/#apply");
      });
  });
});
