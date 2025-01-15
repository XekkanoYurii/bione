import React from "react";
import { Link } from "react-router-dom";
import "./Header.module.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/products" className="nav-link">
          Products
        </Link>
        <Link to="/contacts" className="nav-link">
          Contacts
        </Link>
      </nav>
    </header>
  );
}

export default Header;
