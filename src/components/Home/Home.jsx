import Welcome from "./Welcome/Welcome";
import RunningList from "./RunningList/RunningList";
import SwimWindow from "./SwimWindow/SwimWindow";
import Advantages from "./Advantages/Advantages";
import AboutPortal from "./AboutPortal/AboutPortal";
import LearnNext from "./LearnNext/LearnNext";

import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles["hero-section"]}>
      <Welcome />
      <SwimWindow />
      <Advantages />
      <AboutPortal />
      <RunningList />

      <LearnNext />
    </section>
  );
}

export default Home;
