function PageHero({ eyebrow, title, description, image }) {
  return (
    <section
      className="page-hero"
      style={{
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(10, 10, 9, 0.72),
            rgba(10, 10, 9, 0.40)
          ),
          url("${image}")
        `,
      }}
    >
      <div className="container page-hero-inner">
        <span className="eyebrow eyebrow-light">{eyebrow}</span>

        <h1>{title}</h1>

        {description && <p>{description}</p>}
      </div>
    </section>
  );
}

export default PageHero;
