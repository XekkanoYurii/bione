import { Link, useLocation } from "react-router-dom"; // Додаємо useLocation
import logo from "../ImagesComponents/logo.svg";
import styles from "./Header.module.css";

function Header() {
  const location = useLocation(); // Отримуємо поточний шлях

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img
          src={logo}
          alt="Logo"
          className={styles["logo-img"]}
          width={40}
          height={40}
        />
      </Link>
      <nav className={styles.nav}>
        <Link
          to="/"
          className={`${styles["nav-item"]} ${
            location.pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`${styles["nav-item"]} ${
            location.pathname === "/about" ? styles.active : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/products"
          className={`${styles["nav-item"]} ${
            location.pathname === "/products" ? styles.active : ""
          }`}
        >
          Products
        </Link>
        <Link
          to="/contacts"
          className={`${styles["nav-item"]} ${
            location.pathname === "/contacts" ? styles.active : ""
          }`}
        >
          Contacts
        </Link>
      </nav>
    </header>
  );
}

export default Header;
