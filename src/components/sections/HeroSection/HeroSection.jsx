import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import Button from "../../common/Button/Button";
import { SECTION_IDS } from "../../../config/navigation";
import { HERO_HIGHLIGHTS } from "../../../data/landingContent";
import heroImage from "../../../assets/images/hero-wristband.jpg";
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

          <figure className="hero__photo">
            <img
              src={heroImage}
              alt="Persona revisando la hora en una pulsera inteligente"
              width="550"
              height="978"
              fetchPriority="high"
            />
            <figcaption className="hero__credit">Foto: Lloyd Dirks / Unsplash</figcaption>
          </figure>

          <div className="hero__status" aria-hidden="true">
            <span className="hero__status-icon">
              <Check size={16} />
            </span>
            <span>
              <strong>Todo en orden</strong>
              <small>Sin alertas pendientes</small>
            </span>
          </div>

          <div className="hero__card" role="img" aria-label="Vista de la app: Elena está bien, ritmo cardíaco 72 lpm, oxígeno 98 %, en su zona segura">
            <div className="hero__card-header">
              <span className="hero__avatar">E</span>
              <span>
                <strong>Elena está bien</strong>
                <small>Actualizado ahora</small>
              </span>
              <span className="hero__live-dot" />
            </div>

            <div className="hero__metrics">
              <div className="hero__metric">
                <small>Ritmo cardíaco</small>
                <span className="hero__metric-value">
                  72 <span className="hero__metric-unit">lpm</span>
                </span>
              </div>
              <div className="hero__metric">
                <small>Oxígeno</small>
                <span className="hero__metric-value">
                  98<span className="hero__metric-unit">%</span>
                </span>
              </div>
            </div>

            <p className="hero__safe-zone">
              <ShieldCheck size={16} />
              En su zona segura
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
