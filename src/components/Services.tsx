const services = [
  {
    number: "01",
    title: "Offentliga miljöer",
    description:
      "Platsanpassad inredning för offentliga och kommersiella miljöer.",
  },
  {
    number: "02",
    title: "Byggnadssnickerier",
    description:
      "Fönster, dörrar och andra snickerier anpassade efter byggnadens behov.",
  },
  {
    number: "03",
    title: "Specialbyggda möbler",
    description:
      "Måttanpassade möbler skapade med fokus på material, funktion och detaljer.",
  },
  {
    number: "04",
    title: "Måttbeställda bänkskivor",
    description: "Bänkskivor tillverkade efter kundens mått och önskemål.",
  },
  {
    number: "05",
    title: "Inomhustrappor",
    description:
      "Trappor och räcken utformade för att passa både rummet och byggnaden.",
  },
  {
    number: "06",
    title: "Platsbyggda bokhyllor",
    description:
      "Bokhyllor och hyllsystem som anpassas efter rummets förutsättningar.",
  },
];

function Services() {
  return (
    <section className="services" id="tjanster">
      <div className="container">
        <div className="services__intro">
          <p className="services__eyebrow">Vad vi gör</p>

          <h2>Snickeri med omtanke.</h2>

          <p className="services__description">
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
