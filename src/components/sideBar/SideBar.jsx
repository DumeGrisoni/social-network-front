import { Link } from 'react-router-dom';
import {
  AppsIcon,
  LibraryBooksIcon,
  HomeIcon,
  ImageIcon,
} from '../../components';
import './sideBar.scss';
import photo from '../../assets/SP_Viking_Hero_AI.png';

const SideBar = () => {
  return (
    <div className="sidebar">
      <section className="links">
        <Link className="container">
          <HomeIcon className="icons" />
          <span>Accueil</span>
        </Link>
        <Link className="container">
          <LibraryBooksIcon className="icons" />
          <span>Tutorials</span>
        </Link>
        <Link className="container">
          <AppsIcon className="icons" />
          <span>Catégories</span>
        </Link>
        <Link to="/" className="container">
          <ImageIcon className="icons" />
          <span>Mes Créations</span>
        </Link>
      </section>

      <hr />

      <section className="friends">
        <h2>Contacts</h2>
        <div className="users">
          <div className="dot" />
          <div className="offline" />
          <img src={photo} alt="" />
          <Link to="/" className="container">
            <p>Jean Massimi</p>
          </Link>
        </div>
        <div className="users">
          <div className="online" />
          <img src={photo} alt="" />
          <Link to="/" className="container">
            <p>Amelie Jeanbrillancourt</p>
          </Link>
        </div>
        <div className="users">
          <div className="online" />
          <img src={photo} alt="" />
          <Link to="/" className="container">
            <p>Pierre Rochefort</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SideBar;
