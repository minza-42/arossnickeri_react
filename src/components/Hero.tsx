import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__image">
        <div className="container">
          <div className="hero__content">
            <p className="hero__eyebrow">Aros Snickeri</p>

            <h1>Snickeri med känsla för detaljer.</h1>

            <p className="hero__description">
              Måttanpassade snickerilösningar med kvalitet och hantverk i fokus.
            </p>

            <Link to="/kontakt" className="hero__button">
              Kontakta oss
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
