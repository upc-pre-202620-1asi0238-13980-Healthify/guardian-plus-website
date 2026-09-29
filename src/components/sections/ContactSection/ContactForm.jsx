import { useRef, useState } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";
import Button from "../../common/Button/Button";
import { CARE_RECIPIENT_OPTIONS } from "../../../data/landingContent";
import { submitContactRequest } from "../../../services/contactService";
import { EMPTY_CONTACT_FORM, validateContactForm } from "../../../utils/validateContactForm";

const FIELD_ORDER = ["name", "phone", "email", "careRecipient", "message"];

function ContactForm() {
  const [values, setValues] = useState(EMPTY_CONTACT_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [submittedName, setSubmittedName] = useState("");
  const formRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((currentValues) => ({ ...currentValues, [name]: value }));

    if (errors[name]) {
      setErrors((currentErrors) => {
        const { [name]: _removed, ...remainingErrors } = currentErrors;
        return remainingErrors;
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    const firstInvalidField = FIELD_ORDER.find((field) => validationErrors[field]);
    if (firstInvalidField) {
      formRef.current?.elements[firstInvalidField]?.focus();
      return;
    }

    setStatus("submitting");

    try {
      await submitContactRequest({
        name: values.name.trim(),
        phone: values.phone.trim(),
        email: values.email.trim(),
        careRecipient: values.careRecipient,
        message: values.message.trim(),
      });
      setSubmittedName(values.name.trim());
      setValues(EMPTY_CONTACT_FORM);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="contact-form contact-form--success" role="status">
        <CircleCheck className="contact-form__success-icon" size={40} aria-hidden="true" />
        <h3 className="contact-form__success-title">Gracias, {submittedName}. Recibimos tu solicitud.</h3>
        <p className="contact-form__success-text">
          Una persona de nuestro equipo te escribirá a tu correo o te llamará dentro del horario de atención.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
  });

  const renderError = (name) =>
    errors[name] && (
      <p className="contact-form__error" id={`contact-${name}-error`}>
        {errors[name]}
      </p>
    );

  return (
    <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="contact-name">
            Nombre
          </label>
          <input className="contact-form__input" type="text" autoComplete="name" placeholder="Tu nombre" required {...fieldProps("name")} />
          {renderError("name")}
        </div>

        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="contact-phone">
            Teléfono <span className="contact-form__optional">(opcional)</span>
          </label>
          <input className="contact-form__input" type="tel" autoComplete="tel" placeholder="+51 999 999 999" {...fieldProps("phone")} />
          {renderError("phone")}
        </div>
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-email">
          Correo electrónico
        </label>
        <input className="contact-form__input" type="email" autoComplete="email" placeholder="tu@correo.com" required {...fieldProps("email")} />
        {renderError("email")}
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-careRecipient">
          ¿A quién deseas cuidar?
        </label>
        <select className="contact-form__input contact-form__select" {...fieldProps("careRecipient")}>
          <option value="">Selecciona una opción</option>
          {CARE_RECIPIENT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-message">
          Cuéntanos qué necesitas
        </label>
        <textarea
          className="contact-form__input contact-form__textarea"
          rows="4"
          placeholder="Por ejemplo: busco apoyo para mi mamá que vive sola..."
          required
          {...fieldProps("message")}
        />
        {renderError("message")}
      </div>

      {status === "error" && (
        <p className="contact-form__alert" role="alert">
          No pudimos enviar tu solicitud. Inténtalo nuevamente o llámanos directamente.
        </p>
      )}

      <Button type="submit" block disabled={status === "submitting"}>
        {status === "submitting" ? "Enviando..." : "Quiero más información"}
        <ArrowRight size={18} aria-hidden="true" />
      </Button>

      <p className="contact-form__disclaimer">
        Al enviar aceptas que te contactemos sobre Guardian+. No compartimos tus datos.
      </p>
    </form>
  );
}

export default ContactForm;
