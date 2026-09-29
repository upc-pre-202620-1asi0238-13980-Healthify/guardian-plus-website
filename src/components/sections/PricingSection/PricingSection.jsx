import { Check, CreditCard } from "lucide-react";
import Button from "../../common/Button/Button";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import { SECTION_IDS } from "../../../config/navigation";
import { buildPlanSignupUrl } from "../../../config/links";
import { PLANS } from "../../../data/landingContent";
import "./PricingSection.css";

function PricingSection() {
  return (
    <section className="section pricing" id={SECTION_IDS.pricing} aria-labelledby="pricing-title">
      <div className="container">
        <SectionHeading
          id="pricing-title"
          eyebrow="Planes pensados para cada familia"
          title="Empieza a cuidar con más tranquilidad."
          description="Elige el nivel de acompañamiento que necesitan. Puedes cambiar o cancelar cuando quieras."
        />

        <ul className="pricing__plans">
          {PLANS.map((plan) => (
            <li key={plan.id} className={`plan-card${plan.isFeatured ? " plan-card--featured" : ""}`}>
              {plan.isFeatured && <p className="plan-card__badge">Más elegido</p>}

              <h3 className="plan-card__name">{plan.name}</h3>
              <p className="plan-card__tagline">{plan.tagline}</p>

              <p className="plan-card__price">
                <span className="plan-card__amount">${plan.price}</span>
                {plan.price > 0 && <span className="plan-card__currency">USD</span>}
                <span className="visually-hidden">{plan.price > 0 ? " al mes" : " gratis"}</span>
              </p>

              <ul className="plan-card__features">
                {plan.features.map((feature) => (
                  <li key={feature} className="plan-card__feature">
                    <Check size={16} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className="plan-card__cta"
                href={buildPlanSignupUrl(plan.id)}
                variant={plan.isFeatured ? "primary" : "outline"}
                block
                aria-label={`${plan.ctaLabel}: plan ${plan.name}`}
              >
                {plan.ctaLabel}
              </Button>
            </li>
          ))}
        </ul>

        <div className="pricing__notes">
          <p>La pulsera Guardian+ está incluida en planes de pago. Envío e instalación sin costo durante el lanzamiento.</p>
          <p className="pricing__payment">
            <CreditCard size={16} aria-hidden="true" />
            Pago mensual con tarjeta de crédito o débito Visa, Mastercard o American Express.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
