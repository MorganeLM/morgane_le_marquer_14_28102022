import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";


function ErrorPage() {

  return (
    <div>
      <Header />
      <main>
        <p>La page que vous recherchez n'existe pas. Vous pouvez naviguer vers la :</p>
        <ul>
            <li><Link to="/">Page d'ajout de nouvel employé</Link></li>
            <li><Link to="/employee-list">Page de listing des employés</Link></li>
        </ul>
        
      </main>
      <Footer />
    </div>
  );
}

export default ErrorPage;