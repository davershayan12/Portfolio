export default function ProjectSpotlight() {
  return (
    <section className="spotlight-section" aria-label="Project spotlight">
      <div className="container">
        <div className="spotlight">
          {/* Left — image card with red border */}
          <div className="spotlight__image spotlight-card-left" aria-hidden="true">
            <svg className="spotlight__image-hatch" preserveAspectRatio="none">
              <rect width="100%" height="100%" />
            </svg>
          </div>

          {/* Right — title block */}
          <div className="spotlight__content spotlight-card-right">
            <div className="spotlight__icon" aria-hidden="true" />
            <h2 className="spotlight__title">
              AI Agent
              <br />
              Pipeline
              <br />
              Builder
            </h2>
            <div className="spotlight__dot" aria-hidden="true" />
            <p className="spotlight__subtitle">Personal Project</p>
          </div>
        </div>
      </div>
    </section>
  );
}
