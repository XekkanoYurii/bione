import React from "react";
import Advantages from "../Advantages/Advantages";
import NavigationButton from "../NavigationButton/NavigationButton";
import styles from "./Home.module.css"; // Імпорт стилів як об'єкта "styles"

function Home() {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles["hero-container"]}>
        <h1 className={styles["hero-title"]}>
          Welcome to <span className={styles["hero-title-span"]}>AI</span> world
        </h1>
      </div>
      <div className={styles["content"]}>
        <Advantages />
        <h2 className={styles["sub-title"]}>Explore the AI world</h2>
        <ul>
          <li>
            <h3>Підвищення продуктивності</h3>
            <p></p>
          </li>
          <li>
            <h3>Поліпшення якості рішень</h3>
            <p></p>
          </li>
          <li>
            <h3>Персоналізація</h3>
            <p></p>
          </li>
          <li>
            <h3>Постійне навчання та вдосконалення</h3>
            <p></p>
          </li>
        </ul>
      </div>
      <NavigationButton direction="right" to="/about" />
    </section>
  );
}

export default Home;
