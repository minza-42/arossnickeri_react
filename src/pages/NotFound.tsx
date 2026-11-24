import { Link } from "react-router-dom";
import "../styles/_not-found.scss";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__content">
        <span className="not-found__number">404</span>

        <h1>Oj! Här var det tomt.</h1>

        <p>Sidan du letar efter verkar inte finnas eller har flyttats.</p>

        <Link to="/" className="not-found__button">
          Tillbaka till startsidan
        </Link>
      </div>
      <Footer />
    </main>
  );
}

export default NotFound;
