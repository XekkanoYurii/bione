import Welcome from "./Welcome/Welcome";
import RunningList from "./RunningList/RunningList";
import SwimWindow from "./SwimWindow/SwimWindow";
import Advantages from "./Advantages/Advantages";
import NavigationButton from "../NavigationButton/NavigationButton";

import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles["hero-section"]}>
      <Welcome />
      <RunningList />
      <SwimWindow />
      <Advantages />
      <div className={styles["content"]}></div>
      <NavigationButton direction="right" to="/about" />
    </section>
  );
}

export default Home;
