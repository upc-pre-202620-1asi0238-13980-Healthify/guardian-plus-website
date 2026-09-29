import { Activity, ArrowRight, Check } from "lucide-react";
import Button from "../../common/Button/Button";
import PhoneMockup from "../../common/PhoneMockup/PhoneMockup";
import WristbandIllustration from "../../common/WristbandIllustration/WristbandIllustration";
import { SECTION_IDS } from "../../../config/navigation";
import { HERO_HIGHLIGHTS } from "../../../data/landingContent";
import { APP_SCREENS } from "../../../data/appScreens";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero" id={SECTION_IDS.top} aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            Cuidado conectado, tranquilidad real
          </p>

          <h1 className="hero__title" id="hero-title">
            Acompaña a quien amas, incluso cuando no estás cerca.
          </h1>

          <p className="hero__description">
            Guardian+ une una pulsera inteligente y una app para cuidar la salud, seguridad y bienestar de tu ser
            querido en tiempo real.
          </p>

          <div className="hero__actions">
            <Button href={`#${SECTION_IDS.pricing}`}>
              Conocer los planes
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href={`#${SECTION_IDS.howItWorks}`} variant="ghost">
              Ver cómo funciona
            </Button>
          </div>

          <ul className="hero__highlights">
            {HERO_HIGHLIGHTS.map((highlight) => (
              <li key={highlight} className="hero__highlight">
                <Check size={16} aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <span className="hero__glow" aria-hidden="true" />

          <PhoneMockup
            className="hero__phone"
            mode="auto"
            screen={APP_SCREENS.home.src}
            navOverlay={APP_SCREENS.home.navOverlay}
            screenRatio={APP_SCREENS.home.ratio}
            background={APP_SCREENS.home.background}
            alt={APP_SCREENS.home.alt}
          />

          <WristbandIllustration className="hero__wristband" />

          <div className="hero__chip hero__chip--status" aria-hidden="true">
            <span className="hero__chip-icon">
              <Check size={16} />
            </span>
            <span>
              <strong>Todo en orden</strong>
              <small>Sin alertas pendientes</small>
            </span>
          </div>

          <div className="hero__chip hero__chip--sync" aria-hidden="true">
            <span className="hero__chip-icon hero__chip-icon--live">
              <Activity size={16} />
            </span>
            <span>
              <strong>Pulsera sincronizada</strong>
              <small>Hace 2 min</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
