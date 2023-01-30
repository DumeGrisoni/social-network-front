import './navBar.scss';
import {
  ChatIcon,
  CircleNotificationsIcon,
  AccountCircleIcon,
  // DarkModeIcon,
  LightModeIcon,
  ManageSearchIcon,
} from '../../components';
import logo from '../../assets/Game Art Creators Logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className="left">
        <Link to="/">
          <span>
            <img className="logo" src={logo} alt="logo de l'application" />
            Game Art Creators.
          </span>
        </Link>
      </div>
      <div className="center">
        <form>
          <ManageSearchIcon className="icon" />
          <input type="text" placeholder="Rechercher" />
        </form>
      </div>
      <div className="right">
        <div className="container">
          <Link to="/">
            <LightModeIcon className="icon" />
          </Link>
          <Link to="/">
            <ChatIcon className="icon" />
          </Link>
          <Link to="/">
            <CircleNotificationsIcon className="icon" />
          </Link>
          <Link to="/">
            <AccountCircleIcon className="icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
