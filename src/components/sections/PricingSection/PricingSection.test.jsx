import { render, screen, within } from "@testing-library/react";
import PricingSection from "./PricingSection";

describe("PricingSection", () => {
  test("compares the three subscription plans with their prices", () => {
    render(<PricingSection />);

    const plans = screen.getAllByRole("heading", { level: 3 }).map((heading) => heading.textContent);
    expect(plans).toEqual(["Esencial", "Guardian+", "Cuidado Pro"]);

    expect(screen.getByText("$0")).toBeInTheDocument();
    expect(screen.getByText("$19")).toBeInTheDocument();
    expect(screen.getByText("$39")).toBeInTheDocument();
  });

  test("highlights the recommended plan and shows accepted payment methods", () => {
    render(<PricingSection />);

    const featuredPlan = screen.getByText("Más elegido").closest("li");
    expect(within(featuredPlan).getByRole("heading", { name: "Guardian+" })).toBeInTheDocument();
    expect(screen.getByText(/visa, mastercard o american express/i)).toBeInTheDocument();
  });

  test("every plan has a call to action", () => {
    render(<PricingSection />);

    expect(screen.getByRole("link", { name: "Comenzar gratis: plan Esencial" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Elegir este plan: plan Guardian+" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Elegir este plan: plan Cuidado Pro" })).toBeInTheDocument();
  });
});
