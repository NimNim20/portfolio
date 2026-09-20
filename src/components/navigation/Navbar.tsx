import { useEffect, useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.body.style.overflow = menuOpen ? "hidden" : "";

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="navbar__container">
        <a className="navbar__brand" href="#home" onClick={closeMenu}>
          BENJAMIN<span>.DEV</span>
        </a>

        <ul className="navbar__links">
          <li>
            <a href="#work">Work</a>
          </li>

          <li>
            <a href="#stack">Stack</a>
          </li>

          <li>
            <a href="#journey">Journey</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="navbar__status">
          <span className="navbar__status-dot" />
          Available
        </div>

        <button
          className={`navbar__menu-button ${
            menuOpen ? "navbar__menu-button--open" : ""
          }`}
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
      >
        <nav className="mobile-menu__container">
          <ul className="mobile-menu__links">
            <li>
              <a href="#projects" onClick={closeMenu}>
                <span>01</span>
                Work
              </a>
            </li>

            <li>
              <a href="#stack" onClick={closeMenu}>
                <span>02</span>
                Stack
              </a>
            </li>

            <li>
              <a href="#journey" onClick={closeMenu}>
                <span>03</span>
                Journey
              </a>
            </li>

            <li>
              <a href="#about" onClick={closeMenu}>
                <span>04</span>
                About
              </a>
            </li>

            <li>
              <a href="#contact" onClick={closeMenu}>
                <span>05</span>
                Contact
              </a>
            </li>
          </ul>

          <div className="mobile-menu__footer">
            <div className="mobile-menu__status">
              <span className="navbar__status-dot" />
              Available
            </div>

            <span>Benjamin.dev / 2026</span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
