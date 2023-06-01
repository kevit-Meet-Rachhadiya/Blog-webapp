import "../Css/Header.css";
import logo from "../Image/brandlogo.png";

function Header() {
  return (
    <nav className="navbar">
      <div className="left">
        <img src={logo} alt="Logo" />
      </div>

      <div className="right">
        <span className="nav-link">HOME</span>
        <span className="nav-link">WRITE YOUR BLOG</span>
      </div>
    </nav>
  );
}

export default Header;
