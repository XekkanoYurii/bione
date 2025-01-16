import React from "react";
import styles from "./Home.module.css"; // Імпорт стилів як об'єкта "styles"

function Home() {
  return (
    <section className={styles[""]}>
      <div className={styles[""]}>
        <div className={styles["hero-container"]}>
          <h1 className={styles["hero-title"]}>
            Welcome to <span className={styles["hero-title-span"]}>AI</span>{" "}
            world
          </h1>
        </div>
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
