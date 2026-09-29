import PhoneMockup from "../../common/PhoneMockup/PhoneMockup";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import { APP_SCREENS } from "../../../data/appScreens";
import { SAFE_ZONE_STEPS } from "../../../data/landingContent";
import "./SafeZonesSection.css";

function SafeZonesSection() {
  return (
    <section className="section safe-zones" aria-labelledby="safe-zones-title">
      <div className="container">
        <SectionHeading
          id="safe-zones-title"
          eyebrow="Ubicación y zonas seguras"
          title="Sabes dónde está, sin tener que preguntar."
          description="Guardian+ vigila los lugares que tú defines y te avisa solo cuando hace falta. Así funciona el monitoreo perimetral."
        />

        <ol className="safe-zones__steps">
          {SAFE_ZONE_STEPS.map((step, index) => {
            const screen = APP_SCREENS[step.screen];

            return (
              <li key={step.id} className={`safe-zones__step safe-zones__step--${step.id}`}>
                <PhoneMockup
                  className="safe-zones__phone"
                  screen={screen.src}
                  screenRatio={screen.ratio}
                  background={screen.background}
                  alt={screen.alt}
                />
                <div className="safe-zones__caption">
                  <span className="safe-zones__number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="safe-zones__title">{step.title}</h3>
                    <p className="safe-zones__description">{step.description}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default SafeZonesSection;
