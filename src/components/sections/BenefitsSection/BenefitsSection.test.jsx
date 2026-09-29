import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BenefitsSection from "./BenefitsSection";

describe("BenefitsSection", () => {
  test("shows the six product capabilities", () => {
    render(<BenefitsSection />);

    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(6);
    expect(screen.getByRole("heading", { name: "Detección de caídas + SOS" })).toBeInTheDocument();
  });

  test("expands complementary information when the visitor selects Saber más", () => {
    render(<BenefitsSection />);

    const toggle = screen.getByRole("button", { name: /saber más sobre ubicación y zonas seguras/i });
    const details = document.getElementById(toggle.getAttribute("aria-controls"));

    expect(details).not.toBeVisible();

    userEvent.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(details).toBeVisible();
    expect(toggle).toHaveTextContent("Ver menos");
  });
});
