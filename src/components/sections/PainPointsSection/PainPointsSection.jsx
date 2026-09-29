import SectionHeading from "../../common/SectionHeading/SectionHeading";
import { PAIN_POINTS } from "../../../data/landingContent";
import "./PainPointsSection.css";

function PainPointsSection() {
  return (
    <section className="section pain-points" aria-labelledby="pain-points-title">
      <div className="container">
        <SectionHeading
          id="pain-points-title"
          eyebrow="La tranquilidad que tu familia necesita"
          title="Estar pendiente no debería significar vivir preocupado."
          description="Cuando alguien que amas pasa tiempo solo, cada llamada sin responder pesa. Guardian+ convierte esa incertidumbre en información clara y ayuda a tiempo."
        />

        <ul className="pain-points__list">
          {PAIN_POINTS.map((painPoint) => (
            <li key={painPoint.number} className="pain-points__card">
              <span className="pain-points__number" aria-hidden="true">
                {painPoint.number}
              </span>
              <div>
                <h3 className="pain-points__question">{painPoint.question}</h3>
                <p className="pain-points__answer">{painPoint.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PainPointsSection;
