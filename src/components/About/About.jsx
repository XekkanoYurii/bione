import BlockList from "./BlockList/BlockList";
import NavigationButton from "../NavigationButton/NavigationButton";

import "./About.module.css";

function About() {
  return (
    <section className="about">
      <div>
        <h2>Psadasd ASDASD sdas</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          molestias, aperiam reiciendis error, quaerat quae tempora quibusdam
          unde laborum quod ut recusandae quidem labore deleniti est iusto atque
          libero provident!
        </p>
      </div>
      <BlockList />
      <NavigationButton direction="left" to="/" />
      <NavigationButton direction="right" to="/products" />
    </section>
  );
}

export default About;
