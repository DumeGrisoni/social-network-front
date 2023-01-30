import './login.scss';
import image from '../../assets/SP_Viking_Hero_AI.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <img src={image} alt="" />
      <section className="card">
        <h1>
          <span>Game Art</span> Creators
        </h1>
        <p>
          Bienvenue dans la communauté des Game Art Creators, le reseau social
          où les artistes 3D peuvent échanger, partager et se faire connaitre.
          Vous nous rejoindre il suffit juste de se connecter !
        </p>
        <span>Vous n'avez pas encore de compte chez nous ?</span>
        <Link to="/register">
          <button className="inscription">S'inscrire sur G.A.C</button>
        </Link>
        <hr />
        <h2>Connexion</h2>
        <form>
          <input type="text" placeholder="Utilisateur" />
          <input type="password" placeholder="Mot de passe" />
          <button>Connexion</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
