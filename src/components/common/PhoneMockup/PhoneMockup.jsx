import "./PhoneMockup.css";

/*
 * iPhone-style device frame that renders an exported app screen.
 * `screenRatio` is the height / width ratio of the screen image and sizes the
 * auto-scroll animation.
 */
function PhoneMockup({ screen, alt, screenRatio, navOverlay, background, mode = "static", className = "" }) {
  const classes = ["phone", `phone--${mode}`, navOverlay ? "phone--with-nav" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} style={{ "--screen-ratio": screenRatio, "--phone-screen-bg": background }}>
      <span className="phone__button phone__button--action" aria-hidden="true" />
      <span className="phone__button phone__button--volume-up" aria-hidden="true" />
      <span className="phone__button phone__button--volume-down" aria-hidden="true" />
      <span className="phone__button phone__button--power" aria-hidden="true" />

      <div className="phone__display">
        <div className="phone__status-bar" aria-hidden="true">
          <span className="phone__time">9:41</span>
          <span className="phone__island" />
          <span className="phone__indicators">
            <svg viewBox="0 0 18 12" className="phone__signal">
              <rect x="0" y="8" width="3" height="4" rx="1" />
              <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
              <rect x="10" y="3" width="3" height="9" rx="1" />
              <rect x="15" y="0" width="3" height="12" rx="1" />
            </svg>
            <svg viewBox="0 0 16 12" className="phone__wifi">
              <path d="M8 11.5 5.6 9a3.4 3.4 0 0 1 4.8 0L8 11.5Z" />
              <path d="M3.4 6.8a6.5 6.5 0 0 1 9.2 0l-1.4 1.4a4.5 4.5 0 0 0-6.4 0L3.4 6.8Z" />
              <path d="M1.1 4.5a9.7 9.7 0 0 1 13.8 0l-1.4 1.4a7.7 7.7 0 0 0-11 0L1.1 4.5Z" />
            </svg>
            <svg viewBox="0 0 27 13" className="phone__battery">
              <rect className="phone__battery-shell" x="0.5" y="0.5" width="23" height="12" rx="3.5" />
              <rect x="2.5" y="2.5" width="16" height="8" rx="2" />
              <path d="M25 4.5v4a2 2 0 0 0 0-4Z" />
            </svg>
          </span>
        </div>

        <div className="phone__viewport" tabIndex={mode === "scroll" ? 0 : undefined} aria-label={mode === "scroll" ? `${alt}. Desplázate para ver toda la pantalla.` : undefined}>
          <img className="phone__screen" src={screen} alt={alt} decoding="async" />
        </div>

        {navOverlay && <img className="phone__nav" src={navOverlay} alt="" aria-hidden="true" />}
        <span className="phone__home-indicator" aria-hidden="true" />
        <span className="phone__glare" aria-hidden="true" />
      </div>
    </div>
  );
}

export default PhoneMockup;
