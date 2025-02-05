import NavigationButton from "../NavigationButton/NavigationButton";
import Bubbles from "./Bubbles/Bubbles";
import styles from "./Products.module.css";

function Products() {
  return (
    <section className={styles["products"]}>
      <div className={styles["container"]}>
        <Bubbles />
      </div>
      <NavigationButton direction="left" to="/education" />
      <NavigationButton direction="right" to="/contacts" />
    </section>
  );
}

export default Products;
