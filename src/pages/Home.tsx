import Services from "../components/Services";

function Home() {
  return (
    <main>
      {/* Hero section */}
      <section className="hero">
        <div className="container hero__content">
          <p className="hero__eyebrow">Aros Snickeri · Uppsala</p>

          <h1>
            Hantverk med
            <br />
            känsla för detaljer.
          </h1>

          <p className="hero__description">
            Vi skapar genomtänkta snickerilösningar med kvalitet, precision och
            omsorg.
          </p>

          <a href="#projekt" className="hero__button">
            Se våra projekt
          </a>
        </div>
      </section>

      {/* Services section */}
      <Services />
    </main>
  );
}

export default Home;
