import { Link } from "react-router-dom";
import "../styles/_privacy-policy.scss";

function PrivacyPolicy() {
  return (
    <main className="privacy-policy">
      <div className="privacy-policy__container">
        <h1>Integritetspolicy</h1>

        <p>
          Vi på Aros Snickeri AB värnar om din personliga integritet och strävar
          efter att skydda dina personuppgifter. Denna integritetspolicy
          beskriver hur vi samlar in och använder dina personuppgifter när du
          besöker vår webbplats eller kontaktar oss.
        </p>

        <section>
          <h2>1. Personuppgifter som samlas in</h2>
          <p>
            När du kontaktar oss via vårt kontaktformulär, e-post eller telefon
            kan vi samla in följande uppgifter:
          </p>
          <ul>
            <li>Namn</li>
            <li>E-postadress</li>
            <li>Telefonnummer, om det anges</li>
            <li>Meddelande och information om arbetet</li>
            <li>Eventuella bilder eller andra uppgifter du skickar</li>
          </ul>
          <p>
            Vi samlar endast in de uppgifter som behövs för att hantera din
            förfrågan och vårt eventuella uppdrag.
          </p>
        </section>

        <section>
          <h2>2. Ändamål och rättslig grund</h2>
          <p>Vi behandlar dina personuppgifter för att:</p>
          <ul>
            <li>Besvara frågor och kontaktförfrågningar.</li>
            <li>Diskutera önskemål och ge rådgivning.</li>
            <li>Lämna offerter och komma överens om arbeten.</li>
            <li>Planera, utföra och slutföra snickeriarbeten.</li>
            <li>Hantera frågor eller reklamationer.</li>
          </ul>
          <p>
            Den rättsliga grunden är att kunna vidta åtgärder inför ett
            eventuellt avtal, fullgöra ett avtal samt uppfylla rättsliga
            skyldigheter när sådana finns.
          </p>
        </section>

        <section>
          <h2>3. Hur länge sparar vi dina uppgifter?</h2>
          <p>
            Vi sparar dina personuppgifter endast så länge de behövs för att
            hantera din förfrågan eller genomföra det arbete du anlitar oss för.
          </p>
          <p>
            Om inget arbete blir av sparar vi uppgifterna endast så länge det
            behövs för att hantera och följa upp din förfrågan.
          </p>
          <p>
            När uppgifterna inte längre behövs raderar vi dem eller begränsar
            fortsatt användning. Vissa uppgifter, exempelvis fakturor och
            bokföringsunderlag, kan behöva sparas längre enligt lag.
          </p>
        </section>

        <section>
          <h2>4. Delning av personuppgifter</h2>
          <p>
            Vi säljer inte dina personuppgifter. Uppgifterna kan hanteras av
            tjänsteleverantörer som hjälper oss att driva verksamheten,
            exempelvis leverantörer av webbhotell, e-post eller andra
            IT-tjänster.
          </p>
          <p>Vi lämnar även ut uppgifter när det krävs enligt lag.</p>
        </section>

        <section>
          <h2>5. Användning av cookies</h2>
          <p>
            Vår webbplats kan använda cookies och liknande tekniker för att
            fungera korrekt. Information om vilka cookies som används, deras
            syfte och hur länge de sparas finns i vår{" "}
            <Link to="/cookiepolicy">cookiepolicy</Link>.
          </p>
          <p>
            Cookies som kräver samtycke används först efter att du har lämnat
            ditt samtycke. Du kan ändra eller återkalla ditt samtycke via
            webbplatsens cookie-inställningar.
          </p>
        </section>

        <section>
          <h2>6. Dina rättigheter</h2>
          <p>Du har enligt GDPR rätt att:</p>
          <ul>
            <li>Begära information om vilka uppgifter vi behandlar.</li>
            <li>Begära ett registerutdrag.</li>
            <li>Begära rättelse av felaktiga uppgifter.</li>
            <li>Begära radering när det är tillåtet.</li>
            <li>Begära begränsning av behandlingen i vissa fall.</li>
            <li>Invända mot viss behandling.</li>
          </ul>
          <p>
            Du har även rätt att lämna klagomål till
            Integritetsskyddsmyndigheten (IMY).
          </p>
        </section>

        <section>
          <h2>7. Kontaktinformation</h2>
          <p>
            Om du har frågor om hur vi hanterar dina personuppgifter är du
            välkommen att kontakta oss.
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
      </div>
    </main>
  );
}

export default PrivacyPolicy;
