import { NavLink } from 'react-router-dom';
import '../Css/Header.css';
import logo from '../Image/brandlogo.png';

function Header() {
  return (
    <nav className="navbar">
      <div className="left">
        <img src={logo} alt="Logo" />
      </div>

      <div className="right">
        <NavLink exact to="/" activeClassName="active-link">
          HOME
        </NavLink>
        <NavLink exact to="/writeBlog" activeClassName="active-link">
          WRITE YOUR BLOG
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
