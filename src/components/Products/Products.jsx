import AboutProducts from "./AboutProducts/AboutProducts";
import Bubbles from "./Bubbles/Bubbles";
import NavigationButton from "../NavigationButton/NavigationButton";
import styles from "./Products.module.css";

function Products() {
  return (
    <section className={styles["products"]}>
      <div className={styles["container"]}>
        <AboutProducts />
        <Bubbles />
      </div>
      <NavigationButton direction="left" to="/education" />
      <NavigationButton direction="right" to="/contacts" />
    </section>
  );
}

export default Products;
