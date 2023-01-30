import './register.scss';
import image from '../../assets/Sp_Minaret_Sorra_AI.png';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className="register">
      <img src={image} alt="" />
      <section className="card">
        <h1>
          <span>Game Art</span> Creators
        </h1>

        <span>Vous avez déjà de compte chez nous ?</span>
        <Link to="/login">
          <button className="connexion">Connexion</button>
        </Link>
        <hr />
        <h2>Inscription</h2>
        <form>
          <input type="email" placeholder="Adresse Email" />
          <input type="password" placeholder="Mot de passe" />
          <input type="text" placeholder="Nom d'utilisateur" />
          <input type="date" placeholder="Date de naissance" />
          <button>S'inscrire</button>
        </form>
      </section>
    </div>
  );
};

export default Register;
