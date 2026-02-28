export default function Navbar() {
  return (
    <header className="navbar" role="banner">
      <nav className="navbar__inner" aria-label="Main navigation">
        <ul className="navbar__links">
          <li>
            <a href="#about" className="navbar__link">
              About
            </a>
          </li>
          <li className="navbar__dot" aria-hidden="true" />
          <li>
            <a href="#work" className="navbar__link">
              Work
            </a>
          </li>
        </ul>

        <a href="#" className="navbar__logo" aria-label="Home">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="46" stroke="#ff2546" strokeWidth="3" />
            <text
              x="50"
              y="56"
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontSize="28"
              fontWeight="bold"
              fill="#cdd1e8"
            >
              MDS
            </text>
          </svg>
        </a>

        <ul className="navbar__links">
          <li>
            <a href="#tech" className="navbar__link">
              Tech
            </a>
          </li>
          <li className="navbar__dot" aria-hidden="true" />
          <li>
            <a href="#contact" className="navbar__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
