import { Link } from "react-router-dom";

import logo from "../assets/logo/aros-snickeri.webp";
import phoneIcon from "../assets/icons/phone.svg";
import mailIcon from "../assets/icons/mail.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* BRAND */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src={logo} alt="Aros Snickeri" />
          </Link>
        </div>

        {/* NAVIGATION */}
        <div className="footer__section">
          <h3>Snabblänkar</h3>

          <nav className="footer__nav">
            <Link to="/om-oss">Om oss</Link>
            <Link to="/#tjanster">Vad vi gör</Link>
            <Link to="/galleri">Galleri</Link>
            <Link to="/kontakt">Kontakt</Link>
          </nav>
        </div>

        {/* CONTACT */}
        <div className="footer__section">
          <h3>Kontakt</h3>

          <div className="footer__contact">
            <a href="tel:018100180" className="footer__contact-item">
              <img src={phoneIcon} alt="" />
              <span>Telefon: 018-100 180</span>
            </a>

            <a
              href="mailto:info@arossnickeri.se"
              className="footer__contact-item"
            >
              <img src={mailIcon} alt="" />
              <span>E-post: info@arossnickeri.se</span>
            </a>
          </div>

          <Link to="/kontakt" className="footer__contact-link">
            Kontakta oss
          </Link>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} Aros Snickeri. Alla rättigheter
          förbehållna.
        </p>

        <div className="footer__legal">
          <Link to="/integritetspolicy">Integritetspolicy</Link>

          <Link to="/cookiepolicy">Cookiepolicy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
