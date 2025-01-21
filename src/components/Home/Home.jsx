import Welcome from "../Welcome/Welcome";
import SwimWindow from "../SwimWindow/SwimWindow";
import Advantages from "../Advantages/Advantages";
import GalleryHero from "../GalleryHero/GalleryHero";
import NavigationButton from "../NavigationButton/NavigationButton";

import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles["hero-section"]}>
      <Welcome />
      <SwimWindow />
      <div className={styles["animated-background"]}></div>
      <div className={styles["welcome-section"]}></div>
      <div className={styles["hero-container"]}>
        <h1 className={styles["hero-title"]}>
          Open <span className={styles["hero-title-span"]}>AI</span> world
        </h1>
      </div>
      <div className={styles["content"]}>
        <Advantages />
        <div className={styles["explore-container"]}>
          <h2 className={styles["sub-title"]}>
            Explore the <span>AI</span> world
          </h2>
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
      </div>
      <GalleryHero />
      <NavigationButton direction="right" to="/about" />
    </section>
  );
}

export default Home;
