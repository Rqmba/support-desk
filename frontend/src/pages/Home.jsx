import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";

function Home() {
  return (
    <>
      <section className="heading">
        <h1>En quoi avez-vous besoin d'aide ?</h1>
        <p>Veuillez choisir une option ci-dessous</p>
      </section>

      <Link to="/new-ticket" className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Crée une nouvelle demande d'assistance
      </Link>

      <Link to="/tickets" className="btn btn-block">
        <FaTicketAlt /> Voir mes demandes
      </Link>
    </>
  );
}

export default Home;
