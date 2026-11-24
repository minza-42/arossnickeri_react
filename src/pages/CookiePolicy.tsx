import { Link } from "react-router-dom";
import "../styles/_cookie-policy.scss";
import Footer from "../components/Footer";

function CookiePolicy() {
  return (
    <main className="cookie-policy">
      <div className="cookie-policy__container">
        <h1>Cookiepolicy</h1>

        <p>
          På Aros Snickeri AB värnar vi om din integritet. Den här sidan
          förklarar vad cookies är och hur de kan användas på vår webbplats.
        </p>

        <section>
          <h2>1. Vad är cookies?</h2>
          <p>
            Cookies är små textfiler som sparas på din enhet när du besöker en
            webbplats. De kan exempelvis användas för att komma ihåg dina
            inställningar eller hjälpa webbplatsen att fungera som den ska.
          </p>
        </section>

        <section>
          <h2>2. Vilka cookies använder vi?</h2>
          <p>
            Cookies kan delas in i olika kategorier beroende på deras funktion.
          </p>

          <h3>Nödvändiga cookies</h3>
          <p>
            Nödvändiga cookies kan behövas för att webbplatsen ska fungera
            korrekt, exempelvis för att hantera säkerhet eller dina
            cookie-inställningar.
          </p>

          <h3>Analys- och statistikcookies</h3>
          <p>
            Analyscookies kan användas för att förstå hur besökare använder
            webbplatsen och hjälpa oss att förbättra den.
          </p>

          <h3>Marknadsföringscookies</h3>
          <p>
            Marknadsföringscookies kan användas för att visa relevant
            marknadsföring eller mäta resultatet av annonser.
          </p>

          <p>
            Vi kommer att redovisa de cookies som faktiskt används på
            webbplatsen, deras leverantör, syfte och lagringstid.
          </p>
        </section>

        <section>
          <h2>3. Hantera ditt samtycke</h2>
          <p>
            Cookies som kräver samtycke ska inte användas innan du har lämnat
            ditt samtycke. Du ska kunna ändra eller återkalla ditt samtycke när
            som helst.
          </p>
          <p>
            Du kan även hantera cookies genom inställningarna i din webbläsare.
            Observera att vissa funktioner på webbplatsen kan påverkas om du
            blockerar nödvändiga cookies.
          </p>
        </section>

        <section>
          <h2>4. Personuppgifter</h2>
          <p>
            Vissa cookies kan innebära att personuppgifter behandlas. Läs mer om
            hur vi hanterar personuppgifter i vår{" "}
            <Link to="/integritetspolicy">integritetspolicy</Link>.
          </p>
        </section>

        <section>
          <h2>5. Kontakt</h2>
          <p>
            Om du har frågor om vår användning av cookies är du välkommen att
            kontakta oss.
          </p>

          <address>
            <strong>Aros Snickeri AB</strong>
            <br />
            Anna Fabrisgata 12a
            <br />
            754 54 Uppsala
            <br />
            Telefon: 018-100 180
            <br />
            E-post:{" "}
            <a href="mailto:info@arossnickeri.se">info@arossnickeri.se</a>
          </address>
        </section>

        <p className="cookie-policy__updated">
          Senast uppdaterad: 24 november 2026
        </p>
      </div>
      <Footer />
    </main>
  );
}

export default CookiePolicy;
