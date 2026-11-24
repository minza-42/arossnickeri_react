import logo from "../assets/logo/aros-snickeri.webp";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Aros Snickeri" />
        </Link>

        <nav className="header__nav">
          <Link to="/om-oss">Om oss</Link>
          <Link to="/#tjanster">Vad vi gör</Link>
          <Link to="/galleri">Galleri</Link>
          <Link to="/kontakt" className="header__contact-button">
            Kontakta oss
          </Link>
        </nav>

        <div className="header__contact">
          <a href="tel:018100180">
            <strong>018-100 180</strong>
          </a>

          <a href="mailto:info@arossnickeri.se">
            <strong>info@arossnickeri.se</strong>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
