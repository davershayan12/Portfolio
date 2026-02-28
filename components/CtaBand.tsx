export default function CtaBand() {
  return (
    <section className="cta-section" id="contact" aria-label="Call to action">
      <div className="container">
        <div className="deco-dots" style={{ justifyContent: "center" }} aria-hidden="true">
          <span className="deco-dot deco-dot--muted" />
          <span className="deco-dot deco-dot--red" />
          <span className="deco-dot deco-dot--muted" />
        </div>
        <p className="cta-section__label">Let&apos;s Build</p>
        <h2 className="cta-section__title">
          Have an idea?
          <br />
          Let&apos;s build it together.
        </h2>
        <a href="mailto:davershayan13@gmail.com" className="cta-section__btn">
          Contact Me
        </a>
      </div>
    </section>
  );
}
