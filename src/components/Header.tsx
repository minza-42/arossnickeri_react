function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="/" className="header__logo">
          AROS <span>SNICKERI</span>
        </a>

        <nav className="header__nav">
          <a href="#om-oss">Om oss</a>
          <a href="#tjanster">Tjänster</a>
          <a href="#projekt">Projekt</a>
        </nav>

        <a href="#kontakt" className="header__contact">
          Kontakta oss
        </a>
      </div>
    </header>
  );
}

export default Header;
