import { EMPTY_CONTACT_FORM, validateContactForm } from "./validateContactForm";

const VALID_FORM = {
  ...EMPTY_CONTACT_FORM,
  name: "Lucía",
  email: "lucia@correo.com",
  message: "Busco apoyo para mi papá.",
};

describe("validateContactForm", () => {
  test("accepts a complete form without phone", () => {
    expect(validateContactForm(VALID_FORM)).toEqual({});
  });

  test("requires name, email and message", () => {
    expect(Object.keys(validateContactForm(EMPTY_CONTACT_FORM))).toEqual(["name", "email", "message"]);
  });

  test("ignores fields that only contain spaces", () => {
    expect(validateContactForm({ ...VALID_FORM, name: "   " })).toHaveProperty("name");
  });

  test.each(["lucia", "lucia@", "lucia@correo", "lucia correo@mail.com"])("rejects the email %s", (email) => {
    expect(validateContactForm({ ...VALID_FORM, email })).toHaveProperty("email");
  });

  test("validates the phone only when it is provided", () => {
    expect(validateContactForm({ ...VALID_FORM, phone: "+51 999 999 999" })).toEqual({});
    expect(validateContactForm({ ...VALID_FORM, phone: "abc" })).toHaveProperty("phone");
  });
});
