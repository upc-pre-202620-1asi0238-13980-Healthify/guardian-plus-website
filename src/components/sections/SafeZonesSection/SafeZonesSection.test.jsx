import { render, screen } from "@testing-library/react";
import SafeZonesSection from "./SafeZonesSection";

describe("SafeZonesSection", () => {
  test("tells the perimeter monitoring story in three screens", () => {
    render(<SafeZonesSection />);

    expect(screen.getAllByRole("heading", { level: 3 }).map((heading) => heading.textContent)).toEqual([
      "Define sus lugares",
      "Te avisamos si sale",
      "Confirmamos su regreso",
    ]);
    expect(screen.getByRole("img", { name: /zonas seguras configuradas/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /alerta de perímetro/i })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /retorno a zona segura confirmado/i })).toBeInTheDocument();
  });
});
