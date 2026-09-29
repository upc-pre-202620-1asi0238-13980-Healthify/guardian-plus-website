import SectionHeading from "../../common/SectionHeading/SectionHeading";
import BenefitCard from "./BenefitCard";
import { SECTION_IDS } from "../../../config/navigation";
import { BENEFITS } from "../../../data/landingContent";
import "./BenefitsSection.css";

function BenefitsSection() {
  return (
    <section className="section benefits" id={SECTION_IDS.benefits} aria-labelledby="benefits-title">
      <div className="container">
        <SectionHeading
          id="benefits-title"
          eyebrow="Todo lo importante, en un solo lugar"
          title="Cuidado integral, no solo datos."
          description="Tecnología que trabaja en segundo plano para que ustedes puedan enfocarse en compartir el presente."
        />

        <ul className="benefits__grid">
          {BENEFITS.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BenefitsSection;
