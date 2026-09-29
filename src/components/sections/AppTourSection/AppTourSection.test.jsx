import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AppTourSection from "./AppTourSection";

describe("AppTourSection", () => {
  test("starts on the home screen", () => {
    render(<AppTourSection />);

    expect(screen.getByRole("tab", { name: /inicio/i })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("img", { name: /pantalla de inicio de la app/i })).toBeInTheDocument();
  });

  test("shows the selected screen inside the phone", () => {
    render(<AppTourSection />);

    userEvent.click(screen.getByRole("tab", { name: /videollamada/i }));

    expect(screen.getByRole("tab", { name: /videollamada/i })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("img", { name: /videollamada con elena/i })).toBeInTheDocument();
    expect(screen.queryByRole("img", { name: /pantalla de inicio de la app/i })).not.toBeInTheDocument();
  });

  test("supports arrow key navigation between tabs", () => {
    render(<AppTourSection />);

    const homeTab = screen.getByRole("tab", { name: /inicio/i });
    homeTab.focus();
    fireEvent.keyDown(homeTab, { key: "ArrowDown" });

    const alertsTab = screen.getByRole("tab", { name: /alertas/i });
    expect(alertsTab).toHaveAttribute("aria-selected", "true");
    expect(alertsTab).toHaveFocus();

    fireEvent.keyDown(alertsTab, { key: "End" });
    expect(screen.getByRole("tab", { name: /verificación/i })).toHaveAttribute("aria-selected", "true");
  });
});
