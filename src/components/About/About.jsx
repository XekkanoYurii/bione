import NavigationButton from "../NavigationButton/NavigationButton";
import "./About.module.css";

function About() {
  return (
    <section className="about">
      <NavigationButton direction="left" to="/" />
      <NavigationButton direction="right" to="/products" />
    </section>
  );
}

export default About;
