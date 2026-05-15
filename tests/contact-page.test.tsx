import { fireEvent, render, screen } from "@testing-library/react";

describe("ContactPage", () => {
  it("renders contact methods and shows the frontend-only submit message", async () => {
    const pageModule = await import("@/app/contact/page");
    const ContactPage = pageModule.default;

    render(<ContactPage />);

    expect(
      screen.getByRole("heading", { name: /contact \/ apply/i }),
    ).toBeInTheDocument();
    screen
      .getAllByRole("link", { name: /\+227 91 64 40 59/i })
      .forEach((link) => {
        expect(link).toHaveAttribute("href", "tel:+22791644059");
      });
    screen
      .getAllByRole("link", { name: /\+227 89 40 64 82/i })
      .forEach((link) => {
        expect(link).toHaveAttribute("href", "tel:+22789406482");
      });
    screen
      .getAllByRole("link", { name: /dalanguageacademy@gmail\.com/i })
      .forEach((link) => {
        expect(link).toHaveAttribute("href", "mailto:dalanguageacademy@gmail.com");
      });
    screen
      .getAllByRole("link", { name: /admin@dalanguageacademy\.com/i })
      .forEach((link) => {
        expect(link).toHaveAttribute("href", "mailto:admin@dalanguageacademy.com");
      });
    expect(screen.getAllByText(/bobiel première pompe, niamey/i).length).toBeGreaterThan(0);
    expect(
      screen.getByRole("form", { name: /contact and apply form/i }),
    ).not.toHaveAttribute("action");

    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: "Amina Ibrahim" },
    });
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: "91644059" },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: "amina@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/learner type/i), {
      target: { value: "Working Professional" },
    });
    fireEvent.change(screen.getByLabelText(/programme interest/i), {
      target: { value: "Professional English" },
    });
    fireEvent.change(screen.getByLabelText(/preferred contact method/i), {
      target: { value: "WhatsApp" },
    });
    fireEvent.change(screen.getByLabelText(/message \/ enquiry/i), {
      target: {
        value: "I would like to know which programme fits my current level.",
      },
    });

    fireEvent.click(screen.getByRole("button", { name: /send enquiry/i }));

    expect(
      screen.getByText(
        /thank you\. online form submission will be connected soon\. for now, please contact d\.a language academy directly by whatsapp, phone or email\./i,
      ),
    ).toBeInTheDocument();
  });
});
