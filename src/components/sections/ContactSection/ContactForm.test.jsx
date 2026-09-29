import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";
import { submitContactRequest } from "../../../services/contactService";

jest.mock("../../../services/contactService", () => ({
  submitContactRequest: jest.fn(),
}));

describe("ContactForm", () => {
  beforeEach(() => {
    submitContactRequest.mockReset();
  });

  test("marks missing fields and does not submit", () => {
    render(<ContactForm />);

    userEvent.click(screen.getByRole("button", { name: /quiero más información/i }));

    expect(screen.getByLabelText("Nombre")).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByLabelText("Correo electrónico")).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByLabelText("Cuéntanos qué necesitas")).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByLabelText("Nombre")).toHaveFocus();
    expect(submitContactRequest).not.toHaveBeenCalled();
  });

  test("rejects an invalid email and keeps the data already entered", () => {
    render(<ContactForm />);

    userEvent.type(screen.getByLabelText("Nombre"), "Lucía");
    userEvent.type(screen.getByLabelText("Correo electrónico"), "lucia@correo");
    userEvent.type(screen.getByLabelText("Cuéntanos qué necesitas"), "Busco apoyo para mi papá.");
    userEvent.click(screen.getByRole("button", { name: /quiero más información/i }));

    expect(screen.getByText(/revisa el formato del correo/i)).toBeInTheDocument();
    expect(screen.getByLabelText("Correo electrónico")).toHaveFocus();
    expect(screen.getByLabelText("Nombre")).toHaveValue("Lucía");
    expect(screen.getByLabelText("Cuéntanos qué necesitas")).toHaveValue("Busco apoyo para mi papá.");
    expect(submitContactRequest).not.toHaveBeenCalled();
  });

  test("sends a valid request and confirms it on screen", async () => {
    submitContactRequest.mockResolvedValue({ status: "received" });
    render(<ContactForm />);

    userEvent.type(screen.getByLabelText("Nombre"), "Lucía");
    userEvent.type(screen.getByLabelText("Correo electrónico"), "lucia@correo.com");
    userEvent.selectOptions(screen.getByLabelText("¿A quién deseas cuidar?"), "parent");
    userEvent.type(screen.getByLabelText("Cuéntanos qué necesitas"), "Busco apoyo para mi papá.");
    userEvent.click(screen.getByRole("button", { name: /quiero más información/i }));

    expect(await screen.findByRole("status")).toHaveTextContent("Gracias, Lucía. Recibimos tu solicitud.");
    expect(submitContactRequest).toHaveBeenCalledWith({
      name: "Lucía",
      phone: "",
      email: "lucia@correo.com",
      careRecipient: "parent",
      message: "Busco apoyo para mi papá.",
    });
  });

  test("keeps the data and shows an error when the request fails", async () => {
    submitContactRequest.mockRejectedValue(new Error("Network error"));
    render(<ContactForm />);

    userEvent.type(screen.getByLabelText("Nombre"), "Lucía");
    userEvent.type(screen.getByLabelText("Correo electrónico"), "lucia@correo.com");
    userEvent.type(screen.getByLabelText("Cuéntanos qué necesitas"), "Busco apoyo para mi papá.");
    userEvent.click(screen.getByRole("button", { name: /quiero más información/i }));

    await waitFor(() => expect(screen.getByRole("alert")).toHaveTextContent(/no pudimos enviar tu solicitud/i));
    expect(screen.getByLabelText("Nombre")).toHaveValue("Lucía");
  });
});
