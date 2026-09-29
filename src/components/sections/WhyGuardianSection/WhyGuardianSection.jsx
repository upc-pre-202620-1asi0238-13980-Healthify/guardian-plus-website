import { Check, Heart } from "lucide-react";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import { SECTION_IDS } from "../../../config/navigation";
import { DIFFERENTIATORS, TESTIMONIAL } from "../../../data/landingContent";
import "./WhyGuardianSection.css";

function WhyGuardianSection() {
  return (
    <section className="section why-guardian" id={SECTION_IDS.whyGuardian} aria-labelledby="why-guardian-title">
      <span className="why-guardian__ring" aria-hidden="true" />

      <div className="container why-guardian__inner">
        <div className="why-guardian__content">
          <SectionHeading
            id="why-guardian-title"
            align="start"
            tone="dark"
            eyebrow="Más que un dispositivo"
            title="Un reloj mide. Guardian+ cuida."
            description="Los relojes fitness muestran números. Los botones SOS esperan una emergencia. Guardian+ entiende el contexto, previene y conecta a las personas que forman parte del cuidado."
          />

          <ul className="why-guardian__list">
            {DIFFERENTIATORS.map((differentiator) => (
              <li key={differentiator.title} className="why-guardian__item">
                <span className="why-guardian__check" aria-hidden="true">
                  <Check size={14} />
                </span>
                <div>
                  <h3 className="why-guardian__item-title">{differentiator.title}</h3>
                  <p className="why-guardian__item-description">{differentiator.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <figure className="testimonial">
          <Heart className="testimonial__icon" size={30} aria-hidden="true" />
          <blockquote className="testimonial__quote">
            <p>“{TESTIMONIAL.quote}”</p>
          </blockquote>
          <figcaption className="testimonial__author">
            <span className="testimonial__avatar" aria-hidden="true">
              {TESTIMONIAL.initials}
            </span>
            <span>
              <strong>{TESTIMONIAL.author}</strong>
              <small>{TESTIMONIAL.role}</small>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default WhyGuardianSection;
