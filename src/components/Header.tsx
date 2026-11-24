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
        </nav>

        <div className="header__contact">
          <Link to="/#kontakt" className="header__contact-link">
            Kontakta oss
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
