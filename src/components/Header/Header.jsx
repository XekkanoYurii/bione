import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles["header"]}>
      <nav className={styles["nav"]}>
        <Link to="/" className={styles["nav-item"]}>
          Home
        </Link>
        <Link to="/about" className={styles["nav-item"]}>
          About
        </Link>
        <Link to="/products" className={styles["nav-item"]}>
          Products
        </Link>
        <Link to="/contacts" className={styles["nav-item"]}>
          Contacts
        </Link>
      </nav>
    </header>
  );
}

export default Header;
