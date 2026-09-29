import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

describe("Header", () => {
  test("opens and closes the mobile menu", () => {
    render(<Header />);

    const toggle = screen.getByRole("button", { name: "Abrir menú" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    userEvent.click(toggle);
    expect(screen.getByRole("button", { name: "Cerrar menú" })).toHaveAttribute("aria-expanded", "true");

    userEvent.click(screen.getByRole("link", { name: "Precios" }));
    expect(screen.getByRole("button", { name: "Abrir menú" })).toHaveAttribute("aria-expanded", "false");
  });

  test("logo returns to the top of the page", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: /ir al inicio/i })).toHaveAttribute("href", "#top");
  });
});
