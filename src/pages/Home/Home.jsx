import React from "react";
import styles from "./Home.module.css"; // Імпорт стилів як об'єкта "styles"

function Home() {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles["hero-container"]}>
        <h1 className={styles["hero-title"]}>Welcome to the Home Page</h1>
        <div className={styles[""]}>
          <h2 className={styles[""]}>Hohohooohoh</h2>
          <ul className={styles.list[""]}>
            <li className={styles[""]}>
              <h3 className={styles[""]}>Hello</h3>
              <p className={styles[""]}>lalalalalaallalalalalalal</p>
            </li>
            <li className={styles[""]}>
              <h3 className={styles[""]}>Hello</h3>
              <p className={styles[""]}>lalalalalaallalalalalalal</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Home;
