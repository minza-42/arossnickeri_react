const services = [
  {
    number: "01",
    title: "Specialsnickeri",
    description:
      "Måttanpassade snickerilösningar skapade med omsorg om material, funktion och detaljer.",
  },
  {
    number: "02",
    title: "Möbler & inredning",
    description:
      "Specialbyggda möbler och inredning som anpassas efter rummets förutsättningar och kundens önskemål.",
  },
  {
    number: "03",
    title: "Offentliga miljöer",
    description:
      "Snickerier för offentliga och kommersiella miljöer, där hållbarhet och gediget hantverk står i fokus.",
  },
];

function Services() {
  return (
    <section className="services" id="tjanster">
      <div className="container">
        <div className="services__intro">
          <p className="services__eyebrow">Vad vi gör</p>

          <h2>Snickeri med omtanke.</h2>

          <p>
            Från idé till färdigt resultat – vi skapar måttanpassade
            snickerilösningar med fokus på kvalitet, funktion och hantverk.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-card__number">{service.number}</span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
