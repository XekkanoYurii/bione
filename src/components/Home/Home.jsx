import Welcome from "../Welcome/Welcome";
import SwimWindow from "../SwimWindow/SwimWindow";
import Advantages from "../Advantages/Advantages";
import NavigationButton from "../NavigationButton/NavigationButton";

import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles["hero-section"]}>
      <Welcome />
      <SwimWindow />
      <div className={styles["hero-container"]}>
        <h2 className={styles["hero-title"]}>
          Open <span className={styles["hero-title-span"]}>AI</span> world
        </h2>
      </div>
      <div className={styles["content"]}>
        <Advantages />
      </div>
      <NavigationButton direction="right" to="/about" />
    </section>
  );
}

export default Home;
