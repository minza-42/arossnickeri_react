const services = [
  {
    number: "01",
    title: "Specialsnickeri",
    description:
      "Skräddarsydda snickerilösningar anpassade efter kundens önskemål och behov.",
  },
  {
    number: "02",
    title: "Möbler & inredning",
    description:
      "Genomtänkta möbler och inredningsdetaljer med fokus på material och form.",
  },
  {
    number: "03",
    title: "Renovering & montage",
    description:
      "Noggrant utförda snickeriarbeten där kvalitet och detaljer står i centrum.",
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
            Från idé till färdigt resultat – vi hjälper dig att skapa lösningar
            som håller över tid.
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
