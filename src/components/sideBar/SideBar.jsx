import { Link } from 'react-router-dom';
import {
  AppsIcon,
  LibraryBooksIcon,
  HomeIcon,
  ImageIcon,
  ClearIcon,
  CheckIcon,
} from '../../components';
import './sideBar.scss';

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
      <section className="recommended">
        <h2>Recommandation</h2>
        <div className="container">
          <ImageIcon className="icons" />
          <span>Jon doe</span>
          <div className="follow">
            <ClearIcon className="red" />
            <CheckIcon className="green" />
          </div>
        </div>
      </section>

      <hr />

      <section className="friends">
        <h2>Contacts</h2>
        <div>
          <Link to="/" className="container">
            <ImageIcon className="icons" />
            <p>Jean Massimi</p>
          </Link>
        </div>
        <Link to="/" className="container">
          <ImageIcon className="icons" />
          <p>Jean Massimi</p>
        </Link>
        <Link to="/" className="container">
          <ImageIcon className="icons" />
          <p>Jean Massimi</p>
        </Link>
        <Link to="/" className="container">
          <ImageIcon className="icons" />
          <p>Jean Massimi</p>
        </Link>
        <Link to="/" className="container">
          <ImageIcon className="icons" />
          <p>Jean Massimi</p>
        </Link>
        <Link to="/" className="container">
          <ImageIcon className="icons" />
          <p>Jean Massimi</p>
        </Link>
        <Link to="/" className="container">
          <ImageIcon className="icons" />
          <p>Jean Massimi</p>
        </Link>
        <Link to="/" className="container">
          <ImageIcon className="icons" />
          <p>Jean Massimi</p>
        </Link>
        <Link to="/" className="container">
          <ImageIcon className="icons" />
          <p>Jean Massimi</p>
        </Link>
        <Link to="/" className="container">
          <ImageIcon className="icons" />
          <p>Jean Massimi</p>
        </Link>
        <Link to="/" className="container">
          <ImageIcon className="icons" />
          <p>Jean Massimi</p>
        </Link>
      </section>
    </div>
  );
};

export default SideBar;
