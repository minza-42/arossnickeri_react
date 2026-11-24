import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/aros-snickeri.webp";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__inner">
        {/* LOGO */}
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <img src={logo} alt="Aros Snickeri" />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="header__menu-toggle"
          type="button"
          aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span>{menuOpen ? "×" : "☰"}</span>
        </button>

        {/* NAVIGATION */}
        <nav
          id="main-navigation"
          className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}
        >
          <Link to="/om-oss" onClick={closeMenu}>
            Om oss
          </Link>

          <Link to="/#tjanster" onClick={closeMenu}>
            Vad vi gör
          </Link>

          <Link to="/galleri" onClick={closeMenu}>
            Galleri
          </Link>

          <Link
            to="/kontakt"
            className="header__contact-button"
            onClick={closeMenu}
          >
            Kontakta oss
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
