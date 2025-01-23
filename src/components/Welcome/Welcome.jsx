import styles from "./Welcome.module.css";

function WelcomeSection() {
  return (
    <div>
      <div className={styles["welcome-section"]}></div>
      <ul className={styles["text-list"]}>
        <li className={styles["text-item"]}>
          Знання поруч, лише простягни руку
        </li>
        <li className={styles["text-item"]}>
          Відкрий те, що завжди було перед тобою
        </li>
      </ul>
    </div>
  );
}

export default WelcomeSection;
