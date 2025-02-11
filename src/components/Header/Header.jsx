import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "/public/ImageComponents/logo.svg";
import styles from "./Header.module.css";

function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Отримуємо лише перший сегмент шляху, щоб коректно підсвічувати секції
  const currentSection = location.pathname.split("/")[1];

  return (
    <header
      className={`${styles["header"]} ${scrolled ? styles.scrolled : ""}`}
    >
      <Link to="/" className={styles["logo"]}>
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
            currentSection === "" ? styles.active : ""
          }`}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={`${styles["nav-item"]} ${
            currentSection === "about" ? styles.active : ""
          }`}
        >
          About
        </Link>

        <Link
          to="/education"
          className={`${styles["nav-item"]} ${
            currentSection === "education" ? styles.active : ""
          }`}
        >
          Education
        </Link>

        <Link
          to="/products"
          className={`${styles["nav-item"]} ${
            currentSection === "products" ? styles.active : ""
          }`}
        >
          Products
        </Link>

        <Link
          to="/contacts"
          className={`${styles["nav-item"]} ${
            currentSection === "contacts" ? styles.active : ""
          }`}
        >
          Contacts
        </Link>
      </nav>
    </header>
  );
}

export default Header;
