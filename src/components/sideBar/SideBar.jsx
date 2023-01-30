import { Link } from 'react-router-dom';
import {
  AppsIcon,
  LibraryBooksIcon,
  HomeIcon,
  ImageIcon,
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
      <section className="friends">
        <h2>Mes liens</h2>
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
