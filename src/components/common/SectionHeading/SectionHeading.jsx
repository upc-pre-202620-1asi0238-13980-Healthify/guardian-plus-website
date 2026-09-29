import "./SectionHeading.css";

function SectionHeading({ id, eyebrow, title, description, align = "center", tone = "light" }) {
  return (
    <header className={`section-heading section-heading--${align} section-heading--${tone}`}>
      {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
      <h2 className="section-heading__title" id={id}>
        {title}
      </h2>
      {description && <p className="section-heading__description">{description}</p>}
    </header>
  );
}

export default SectionHeading;
