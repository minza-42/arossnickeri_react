import buildingImage from "../assets/images/snickeri-lokal.webp";

function AboutPage() {
  return (
    <main className="about-page">
      {/* Hero image */}
      <section className="about-hero">
        <div className="about-hero__image">
          <img
            src={buildingImage}
            alt="Aros Snickeris lokaler i Gnista, Uppsala"
          />
        </div>
      </section>

      {/* About Aros */}
      <section className="about-section">
        <div className="about-section__content">
          <h1>Om Aros Snickeri</h1>

          <p>
            Aros Snickeri tillverkar alla typer av beställningssnickerier för
            offentlig och privat miljö. Vi har ett stort intresse för form,
            design och teknik vilket ligger till grund för att alla produkter
            som lämnar vårt snickeri håller möbelkvalitet.
          </p>
        </div>
      </section>

      {/* Company and private customers */}
      <section className="about-section">
        <div className="about-section__content">
          <h2>Företag och privatpersoner</h2>

          <p>
            Aros Snickeri har varit verksamma i branschen under många år och
            hjälpt många företag och privatpersoner med beställningssnickerier
            inom allt från byggnadssnickerier och platsanpassad inredning till
            kompletta inredningar för offentlig miljö.
          </p>

          <p>
            Vi har ett stort intresse för form och design och ett genuint
            teknikintresse. Vår kompletta maskinpark innefattar datorstyrda
            maskiner och modern utrustning vilket tillsammans med vår känsla för
            det traditionella hantverket genomsyrar alla våra snickerier.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="about-section">
        <div className="about-section__content">
          <h2>Aros historia</h2>

          <p>
            I början av 1990-talet kände entreprenören Martin Karlsson att det
            saknades en aktör bland specialsnickerierna i Uppsalaregionen.
            Martin startade därför specialsnickeriet Aros Snickeri med visionen
            om ett professionellt och kundorienterat snickeri.
          </p>

          <p>
            Under åren har Aros växt ur två lokaler och kontinuerligt utökat
            maskinparken med nya moderna maskiner för specialtillverkning. Vi är
            idag sex medarbetare och har en stark position som det ledande
            specialsnickeriet i Uppsala.
          </p>
        </div>
      </section>

      {/* Workshop and machinery */}
      <section className="about-section">
        <div className="about-section__content">
          <h2>Snickeri och maskinpark</h2>

          <p>
            Vi kan genom vår välutrustade och moderna maskinpark erbjuda
            effektiv tillverkning av exempelvis större serier.
          </p>

          <h3>800 kvadratmeter snickeri</h3>

          <p>
            Sedan våren 2022 hittar du oss i nya fräscha lokaler i
            industriområdet Gnista i Uppsala. Tack vare vår välutrustade och
            moderna maskinpark kan vi även erbjuda effektiv serietillverkning av
            snickerier.
          </p>

          <p>
            Med hjälp av datorstyrda processer, såsom CNC-bearbetning, kan vi
            skapa tillverkningsunderlag direkt från digitala ritningar vilket
            minskar tiden för produktionsberedning.
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
