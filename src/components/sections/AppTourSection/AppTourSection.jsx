import { useRef, useState } from "react";
import PhoneMockup from "../../common/PhoneMockup/PhoneMockup";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import { APP_SCREENS } from "../../../data/appScreens";
import { APP_TOUR } from "../../../data/landingContent";
import "./AppTourSection.css";

function AppTourSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const activeStop = APP_TOUR[activeIndex];
  const activeScreen = APP_SCREENS[activeStop.screen];

  const selectTab = (index) => {
    const nextIndex = (index + APP_TOUR.length) % APP_TOUR.length;
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  const handleKeyDown = (event) => {
    const keyActions = {
      ArrowDown: () => selectTab(activeIndex + 1),
      ArrowRight: () => selectTab(activeIndex + 1),
      ArrowUp: () => selectTab(activeIndex - 1),
      ArrowLeft: () => selectTab(activeIndex - 1),
      Home: () => selectTab(0),
      End: () => selectTab(APP_TOUR.length - 1),
    };

    if (keyActions[event.key]) {
      event.preventDefault();
      keyActions[event.key]();
    }
  };

  return (
    <section className="section app-tour" aria-labelledby="app-tour-title">
      <div className="container app-tour__inner">
        <div className="app-tour__content">
          <SectionHeading
            id="app-tour-title"
            align="start"
            eyebrow="La app por dentro"
            title="Todo lo que necesitas, en tu bolsillo."
            description="Así se ve Guardian+ en el teléfono de la familia. Explora las pantallas principales."
          />

          <div className="app-tour__tabs" role="tablist" aria-label="Pantallas de la app" aria-orientation="vertical">
            {APP_TOUR.map((stop, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={stop.id}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  className={`app-tour__tab${isActive ? " app-tour__tab--active" : ""}`}
                  type="button"
                  role="tab"
                  id={`app-tour-tab-${stop.id}`}
                  aria-selected={isActive}
                  aria-controls="app-tour-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={handleKeyDown}
                >
                  <span className="app-tour__tab-label">{stop.label}</span>
                  <span className="app-tour__tab-title">{stop.title}</span>
                  <span className="app-tour__tab-description">{stop.description}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          className="app-tour__device"
          id="app-tour-panel"
          role="tabpanel"
          aria-labelledby={`app-tour-tab-${activeStop.id}`}
        >
          <p className="app-tour__mobile-summary">
            <strong>{activeStop.title}</strong>
            <span>{activeStop.description}</span>
          </p>
          <PhoneMockup
            key={activeStop.id}
            className="app-tour__phone"
            mode="scroll"
            screen={activeScreen.src}
            navOverlay={activeScreen.navOverlay}
            screenRatio={activeScreen.ratio}
            background={activeScreen.background}
            alt={activeScreen.alt}
          />
          <p className="app-tour__hint">Desliza dentro del teléfono para ver toda la pantalla</p>
        </div>
      </div>
    </section>
  );
}

export default AppTourSection;
