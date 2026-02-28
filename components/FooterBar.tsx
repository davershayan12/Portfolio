export default function FooterBar() {
  return (
    <footer className="footer" role="contentinfo" style={{ padding: "4rem 0", background: "var(--background)", borderTop: "1px solid var(--border-light)" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "2rem" }}>

        <div className="footer__left" style={{ flex: "1", minWidth: "250px" }}>
          <div className="footer__logo" style={{ width: "60px", marginBottom: "1.5rem" }}>
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="46" stroke="var(--primary-red)" strokeWidth="3" />
              <text x="50" y="56" textAnchor="middle" fontFamily="var(--font-display)" fontSize="24" fontWeight="bold" fill="var(--text-light)">DS</text>
            </svg>
          </div>
          <p style={{ fontSize: "0.9rem", color: "var(--text-dim)", lineHeight: 1.6, maxWidth: "300px" }}>
            Building the future of intelligent systems through software engineering and AI/ML excellence.
          </p>
        </div>

        <div className="footer__center" style={{ flex: "1", minWidth: "150px" }}>
          <h4 style={{ fontFamily: "var(--font-label)", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: "1.5rem" }}>Navigation</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "0.75rem" }}><a href="#about" style={{ color: "var(--text-muted)", fontSize: "0.9rem", transition: "color 0.3s ease" }}>About</a></li>
            <li style={{ marginBottom: "0.75rem" }}><a href="#education" style={{ color: "var(--text-muted)", fontSize: "0.9rem", transition: "color 0.3s ease" }}>Education</a></li>
            <li style={{ marginBottom: "0.75rem" }}><a href="#contact" style={{ color: "var(--text-muted)", fontSize: "0.9rem", transition: "color 0.3s ease" }}>Contact</a></li>
          </ul>
        </div>

        <div className="footer__right" style={{ flex: "1", minWidth: "200px" }}>
          <h4 style={{ fontFamily: "var(--font-label)", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: "1.5rem" }}>Connect</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <a href="mailto:davershayan13@gmail.com" style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text-muted)", fontSize: "0.9rem", transition: "color 0.3s ease" }}>
              <span style={{ color: "var(--primary-red)" }}>→</span> davershayan13@gmail.com
            </a>
            <a href="https://pk.linkedin.com/in/muhammad-daver-shayan-116b41317" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text-muted)", fontSize: "0.9rem", transition: "color 0.3s ease" }}>
              <span style={{ color: "var(--primary-red)" }}>→</span> LinkedIn
            </a>
          </div>
        </div>

      </div>

      <div className="container" style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border-light)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <span style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>© 2026 Muhammad Daver Shayan</span>
        <span style={{ fontSize: "0.8rem", color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>Built with Next.js & GSAP</span>
      </div>
    </footer>
  );
}
