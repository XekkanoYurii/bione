import NavigationButton from "../NavigationButton/NavigationButton";
import EducationHero from "./EducationHero/EducationHero";
import BlockList from "./BlockList/BlockList";
import styles from "./Education.module.css";
const Education = () => {
  return (
    <div className={styles["education-container"]}>
      <EducationHero />
      <BlockList />
      <NavigationButton direction="left" to="/about" />
      <NavigationButton direction="right" to="/products" />
    </div>
  );
};

export default Education;
