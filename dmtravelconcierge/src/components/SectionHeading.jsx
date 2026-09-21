function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) {
  const classes = [
    "section-heading",
    `section-heading-${align}`,
    light && "section-heading-light",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}

export default SectionHeading;
