import SectionHeading from "../../common/SectionHeading/SectionHeading";
import { SECTION_IDS } from "../../../config/navigation";
import { CARE_STEPS } from "../../../data/landingContent";
import "./HowItWorksSection.css";

function HowItWorksSection() {
  return (
    <section className="section how-it-works" id={SECTION_IDS.howItWorks} aria-labelledby="how-it-works-title">
      <div className="container">
        <div className="how-it-works__intro">
          <SectionHeading
            id="how-it-works-title"
            align="start"
            eyebrow="Un lazo de cuidado en 3 pasos"
            title="Simple para quien lo usa. Poderoso para quien cuida."
          />
          <p className="how-it-works__lead">
            Sin menús complicados ni tecnología invasiva. Solo compañía, prevención y respuesta cuando más importa.
          </p>
        </div>

        <ol className="how-it-works__steps">
          {CARE_STEPS.map(({ icon: Icon, title, description }, index) => (
            <li key={title} className="how-it-works__step">
              <span className="how-it-works__step-number" aria-hidden="true">
                {index + 1}
              </span>
              <span className="how-it-works__icon" aria-hidden="true">
                <Icon size={22} />
              </span>
              <h3 className="how-it-works__step-title">
                <span className="visually-hidden">Paso {index + 1}: </span>
                {title}
              </h3>
              <p className="how-it-works__step-description">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default HowItWorksSection;
