import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["container"]}>
        <p className={styles["copyright"]}>
          © {new Date().getFullYear()} My Multi-Page Site. All rights reserved.
        </p>
        <p className={styles["policy"]}>
          By using this site, you agree to our <a href="#">Privacy Policy</a>{" "}
          and <a href="#">Terms of Service</a>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
