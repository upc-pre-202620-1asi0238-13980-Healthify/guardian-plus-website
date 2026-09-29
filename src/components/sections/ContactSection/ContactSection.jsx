import { Phone, Users } from "lucide-react";
import ContactForm from "./ContactForm";
import { SECTION_IDS } from "../../../config/navigation";
import { SUPPORT_PHONE, SUPPORT_SCHEDULE } from "../../../config/links";
import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="section contact" id={SECTION_IDS.contact} aria-labelledby="contact-title">
      <div className="container contact__inner">
        <div className="contact__panel">
          <p className="contact__eyebrow">Hablemos</p>
          <h2 className="contact__title" id="contact-title">
            ¿No sabes qué plan necesita tu familia?
          </h2>
          <p className="contact__description">
            Cuéntanos un poco sobre su situación. Una persona de nuestro equipo te orientará con calma, sin presión y sin
            tecnicismos.
          </p>

          <ul className="contact__channels">
            <li className="contact__channel">
              <span className="contact__channel-icon" aria-hidden="true">
                <Phone size={20} />
              </span>
              <span>
                <small>También puedes llamarnos</small>
                <a href={SUPPORT_PHONE.href}>{SUPPORT_PHONE.display}</a>
              </span>
            </li>
            <li className="contact__channel">
              <span className="contact__channel-icon" aria-hidden="true">
                <Users size={20} />
              </span>
              <span>
                <small>Horario de atención</small>
                <strong>{SUPPORT_SCHEDULE}</strong>
              </span>
            </li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
