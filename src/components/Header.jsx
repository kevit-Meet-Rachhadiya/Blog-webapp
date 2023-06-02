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
        <NavLink  to="/" activeClassName="active-link">
          HOME
        </NavLink>
        <NavLink  to="/writeBlog" ClassName="active-link">
          WRITE YOUR BLOG
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
