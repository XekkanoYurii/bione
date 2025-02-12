import styles from "./EducationHero.module.css";

const EducationHero = () => {
  return (
    <div className={styles["education-content"]}>
      <h2 className={styles["education-title"]}>Готові навчатися?</h2>
      <p className={styles["education-text"]}>
        Обирайте тему, що вас цікавить, та занурюйтесь у світ знань разом із
        B1ONE. Час розвиватися!
      </p>
    </div>
  );
};

export default EducationHero;
