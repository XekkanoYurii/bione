import NavigationButton from "../NavigationButton/NavigationButton";

import BlockList from "./BlockList/BlockList";
import styles from "./Education.module.css";
const Education = () => {
  return (
    <div className={styles["education-container"]}>
      <div className={styles["education-content"]}>
        <h2 className={styles["education-title"]}>Готові навчатися?</h2>{" "}
        <p className={styles["education-text"]}>
          Обирайте тему, що вас цікавить, та занурюйтесь у світ знань разом із
          B1ONE. Час розвиватися!
        </p>
      </div>
      <BlockList />
      <NavigationButton direction="left" to="/about" />
      <NavigationButton direction="right" to="/products" />
    </div>
  );
};

export default Education;
