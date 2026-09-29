const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[\d\s()-]{7,20}$/;

export const EMPTY_CONTACT_FORM = {
  name: "",
  phone: "",
  email: "",
  careRecipient: "",
  message: "",
};

export function validateContactForm(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Ingresa tu nombre.";
  }

  if (values.phone.trim() && !PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = "Ingresa un teléfono válido, por ejemplo +51 999 999 999.";
  }

  if (!values.email.trim()) {
    errors.email = "Ingresa tu correo electrónico.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Revisa el formato del correo, por ejemplo tu@correo.com.";
  }

  if (!values.message.trim()) {
    errors.message = "Cuéntanos brevemente qué necesitas.";
  }

  return errors;
}
