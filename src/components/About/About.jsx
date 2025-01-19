import NavigationButton from "../NavigationButton/NavigationButton";
import "./About.module.css";

function About() {
  return (
    <section className="about">
      <h1>About Us</h1>
      <p>Learn more about our team and our mission.</p>
      <ul>
        <li className="li">Home</li>
      </ul>
      <NavigationButton direction="left" to="/" />
      <NavigationButton direction="right" to="/products" />
    </section>
  );
}

export default About;
