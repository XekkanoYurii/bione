import styles from "./Welcome.module.css";

function WelcomeSection() {
  return (
    <div>
      <div className={styles["welcome-section"]}></div>
      <ul className={styles["text-list"]}>
        <li className={styles["text-item"]}>
          «Ми мислимо інакше. Ми створюємо більше.»
        </li>
        <li className={styles["text-item"]}>«Майбутнє починається з BiOne.»</li>
      </ul>
    </div>
  );
}

export default WelcomeSection;
