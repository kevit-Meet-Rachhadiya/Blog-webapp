import React from "react";
import { Link } from "react-router-dom";
import "../Css/Header.css";
import logo from "../Image/brandlogo.png";

function Header() {
  return (
    <nav className="navbar">
      <div className="left">
        <img src={logo} alt="Logo" />
      </div>

      <div className="right">
        <Link exact to="/" class="nav-link">
          HOME
        </Link>
        <Link exact to="/writeBlog" class="nav-link">
          WRITE YOUR BLOG
        </Link>
      </div>
    </nav>
  );
}

export default Header;
