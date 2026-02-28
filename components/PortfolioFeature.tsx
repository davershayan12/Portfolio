export default function PortfolioFeature() {
  return (
    <section className="portfolio-section" id="tech" aria-label="Featured project">
      <div className="container">
        <p className="portfolio-label" style={{ color: "var(--primary-red)", fontSize: "0.75rem", letterSpacing: "0.3em", marginBottom: "3rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "1rem" }}>+</span> PORTFOLIO
        </p>

        {/* Large feature image + hatched rectangle */}
        <div className="portfolio-feature__image portfolio-large" style={{ background: "var(--muted-bg)", border: "1px solid var(--border-light)", aspectRatio: "16/9", position: "relative", overflow: "hidden" }} aria-hidden="true">
          <svg className="portfolio-feature__image-hatch" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.2 }}>
            <rect width="100%" height="100%" fill="url(#hatchPattern)" />
          </svg>
        </div>

        {/* Article block */}
        <div className="portfolio-feature" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", marginTop: "4rem", alignItems: "center" }}>
          <div className="portfolio-feature__content">
            <div className="deco-dots" style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }} aria-hidden="true">
              <span className="deco-dot deco-dot--blue" style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--accent-blue)" }} />
              <span className="deco-dot deco-dot--red" style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--primary-red)" }} />
              <span className="deco-dot deco-dot--muted" style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--border-card)" }} />
            </div>
            <p className="portfolio-feature__author" style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>Muhammad Daver Shayan</p>
            <h2 className="portfolio-feature__title" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-light)", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Boundless Code: <span style={{ fontStyle: "italic", color: "var(--primary-red)" }}>Full-Stack Discovery</span>
            </h2>
            <p className="portfolio-feature__desc" style={{ fontSize: "1rem", color: "var(--text-dim)", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "480px" }}>
              Building intelligent systems that bridge the gap between cutting-edge AI
              research and production-ready applications. Specializing in LangChain,
              RAG pipelines, and LLM fine-tuning to create transformative digital
              experiences.
            </p>
            <a
              href="https://github.com/davershayan12"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-feature__cta"
              style={{
                display: "inline-block",
                padding: "1rem 2rem",
                border: "1px solid var(--border-card)",
                fontFamily: "var(--font-label)",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-light)",
                transition: "all 0.3s ease",
              }}
            >
              Learn More →
            </a>
          </div>

          <div className="portfolio-feature__image" style={{ background: "var(--muted-bg)", border: "1px solid var(--border-light)", aspectRatio: "1/1", position: "relative", overflow: "hidden" }} aria-hidden="true">
            <svg className="portfolio-feature__image-hatch" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.1 }}>
              <rect width="100%" height="100%" fill="url(#hatchPattern)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
