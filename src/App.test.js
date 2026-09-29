import { render, screen, within } from "@testing-library/react";
import App from "./App";

describe("Landing page", () => {
  test("renders the main navigation in the same order as the sections", () => {
    render(<App />);

    const navigation = screen.getByRole("navigation", { name: "Navegación principal" });
    const links = within(navigation).getAllByRole("link");

    expect(links.map((link) => link.textContent)).toEqual([
      "Cómo funciona",
      "Beneficios",
      "Por qué Guardian+",
      "Precios",
      "Contacto",
    ]);
    expect(links.map((link) => link.getAttribute("href"))).toEqual([
      "#how-it-works",
      "#benefits",
      "#why-guardian",
      "#pricing",
      "#contact",
    ]);
  });

  test("every navigation link targets an existing section", () => {
    const { container } = render(<App />);

    ["how-it-works", "benefits", "why-guardian", "pricing", "contact"].forEach((sectionId) => {
      expect(container.querySelector(`#${sectionId}`)).toBeInTheDocument();
    });
  });

  test("hero calls to action lead to pricing and how it works", () => {
    render(<App />);

    expect(screen.getByRole("link", { name: /conocer los planes/i })).toHaveAttribute("href", "#pricing");
    expect(screen.getByRole("link", { name: /ver cómo funciona/i })).toHaveAttribute("href", "#how-it-works");
  });
});
