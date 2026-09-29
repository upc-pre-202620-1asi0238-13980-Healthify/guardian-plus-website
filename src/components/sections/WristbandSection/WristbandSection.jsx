import SectionHeading from "../../common/SectionHeading/SectionHeading";
import WristbandIllustration from "../../common/WristbandIllustration/WristbandIllustration";
import { WRISTBAND_FEATURES } from "../../../data/landingContent";
import "./WristbandSection.css";

const HALF = Math.ceil(WRISTBAND_FEATURES.length / 2);

function FeatureList({ features, side }) {
  return (
    <ul className={`wristband-section__features wristband-section__features--${side}`}>
      {features.map((feature) => (
        <li key={feature.id} className="wristband-section__feature">
          <span className="wristband-section__marker" aria-hidden="true" />
          <h3 className="wristband-section__feature-title">{feature.title}</h3>
          <p className="wristband-section__feature-description">{feature.description}</p>
        </li>
      ))}
    </ul>
  );
}

function WristbandSection() {
  return (
    <section className="section wristband-section" aria-labelledby="wristband-title">
      <div className="container">
        <SectionHeading
          id="wristband-title"
          tone="dark"
          eyebrow="La pulsera Guardian+"
          title="Pensada para quien la lleva puesta."
          description="Ligera, sin menús y con lo esencial a un toque. La persona bajo cuidado la usa todo el día sin tener que aprender nada nuevo."
        />

        <div className="wristband-section__stage">
          <FeatureList features={WRISTBAND_FEATURES.slice(0, HALF)} side="start" />

          <div className="wristband-section__product">
            <span className="wristband-section__halo" aria-hidden="true" />
            <WristbandIllustration className="wristband-section__device" />
            <p className="wristband-section__badge">Prototipo conceptual</p>
          </div>

          <FeatureList features={WRISTBAND_FEATURES.slice(HALF)} side="end" />
        </div>
      </div>
    </section>
  );
}

export default WristbandSection;
