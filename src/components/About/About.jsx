import NavigationButton from "../NavigationButton/NavigationButton";
import RunningList from "../Home/RunningList/RunningList";
import AboutHero from "./AboutHero/AboutHero";
import AboutInformation from "./AboutInformation/AboutInformation";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles["about"]}>
      <AboutHero />
      <RunningList />
      <AboutInformation />
      <NavigationButton direction="left" to="/" />
      <NavigationButton direction="right" to="/education" />
    </section>
  );
}

export default About;
