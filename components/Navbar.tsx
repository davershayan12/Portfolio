export default function Navbar() {
  return (
    <header
      className="navbar"
      role="banner"
      style={{
        position: "fixed",
        top: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        width: "fit-content",
        padding: "0.75rem 2rem",
        background: "var(--glass-bg)",
        backdropFilter: "blur(15px)",
        border: "1px solid var(--glass-border)",
        borderRadius: "100px",
        zIndex: 100,
      }}
    >
      <nav
        className="navbar__inner"
        aria-label="Main navigation"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <ul className="navbar__links" style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}>
          <li>
            <a href="#about" className="navbar__link" style={{ fontFamily: "var(--font-label)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-light)" }}>
              About
            </a>
          </li>
          <li>
            <a href="#work" className="navbar__link" style={{ fontFamily: "var(--font-label)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-light)" }}>
              Projects
            </a>
          </li>
        </ul>

        <a href="#" className="navbar__logo" aria-label="Home" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center" }}>
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="46" stroke="var(--primary-red)" strokeWidth="3" />
            <text
              x="50"
              y="56"
              textAnchor="middle"
              fontFamily="var(--font-display)"
              fontSize="24"
              fontWeight="bold"
              fill="var(--text-light)"
            >
              DS
            </text>
          </svg>
        </a>

        <ul className="navbar__links" style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}>
          <li>
            <a href="#education" className="navbar__link" style={{ fontFamily: "var(--font-label)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-light)" }}>
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="navbar__link" style={{ fontFamily: "var(--font-label)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-light)" }}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
