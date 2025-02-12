import AboutProducts from "./AboutProducts/AboutProducts";
import Bubbles from "./Bubbles/Bubbles";

import EducationHero from "../Products/EducationHero/EducationHero";
import BlockList from "./BlockList/BlockList";
import NavigationButton from "../NavigationButton/NavigationButton";
import styles from "./Products.module.css";

function Products() {
  return (
    <section className={styles["products"]}>
      <div className={styles["container"]}>
        <AboutProducts />
        <div id="bubbles">
          <Bubbles />
        </div>
        <div id="education">
          <EducationHero />
        </div>
        <BlockList />
      </div>
      <NavigationButton direction="left" to="/about" />
      <NavigationButton direction="right" to="/contacts" />
    </section>
  );
}

export default Products;
