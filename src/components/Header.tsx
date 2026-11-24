import logo from "../assets/logo/aros-snickeri.webp";

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo">
          <img src={logo} alt="Aros Snickeri" />
        </a>

        <nav className="header__nav">
          <a href="#om-oss">Om oss</a>
          <a href="#tjanster">Vad vi gör</a>
          <a href="#referenser">Referenser</a>
        </nav>

        <div className="header__contact">
          <a href="#kontakt" className="header__contact-link">
            Kontakta oss
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
