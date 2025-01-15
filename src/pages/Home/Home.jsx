import React from "react";
import styles from "./Home.module.css"; // Імпорт стилів як об'єкта "styles"

function Home() {
  return (
    <section className={styles.home}>
      {" "}
      {/* Використання стилів через "styles" */}
      <h1 className={styles["title-1"]}>Welcome to the Home Page</h1>
      <p className={styles["text-1"]}>
        This is the main landing page of the site.
      </p>
      <div className="">
        <h2 className={styles["title-2"]}>Hohohooohoh</h2>
        <ul className={styles.list["list"]}>
          <li className={styles["list-tem"]}>
            <h3 className={styles["title-3"]}>Hello</h3>
            <p className={styles.text3}>lalalalalaallalalalalalal</p>
          </li>
          <li className={styles["list-tem"]}>
            <h3 className={styles["title-3"]}>Hello</h3>
            <p className={styles.text3}>lalalalalaallalalalalalal</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
