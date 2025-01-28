import styles from "./Welcome.module.css";

function WelcomeSection() {
  return (
    <div>
      <div className={styles["welcome-section"]}>
        <h1 className={styles["welcome-title"]}>welcom to b1one space</h1>
        <ul className={styles["text-list"]}>
          <li className={styles["text-item"]}>
            «Ми мислимо інакше. Ми створюємо більше.»
          </li>
          <li className={styles["text-item"]}>
            «Майбутнє починається з BiOne.»
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WelcomeSection;
