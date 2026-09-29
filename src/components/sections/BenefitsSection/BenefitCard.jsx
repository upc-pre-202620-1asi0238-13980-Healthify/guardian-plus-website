import { useState } from "react";
import { ArrowRight } from "lucide-react";

function BenefitCard({ benefit }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { id, icon: Icon, tone, title, description, details } = benefit;
  const detailsId = `benefit-details-${id}`;

  return (
    <li className={`benefit-card${isExpanded ? " benefit-card--expanded" : ""}`}>
      <span className={`benefit-card__icon benefit-card__icon--${tone}`} aria-hidden="true">
        <Icon size={20} />
      </span>
      <h3 className="benefit-card__title">{title}</h3>
      <p className="benefit-card__description">{description}</p>

      <p className="benefit-card__details" id={detailsId} hidden={!isExpanded}>
        {details}
      </p>

      <button
        className="benefit-card__toggle"
        type="button"
        aria-expanded={isExpanded}
        aria-controls={detailsId}
        onClick={() => setIsExpanded((expanded) => !expanded)}
      >
        {isExpanded ? "Ver menos" : "Saber más"}
        <span className="visually-hidden"> sobre {title}</span>
        <ArrowRight size={14} aria-hidden="true" className="benefit-card__toggle-icon" />
      </button>
    </li>
  );
}

export default BenefitCard;
