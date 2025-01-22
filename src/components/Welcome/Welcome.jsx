import styles from "./Welcome.module.css";
function WelcomeSection() {
  return (
    <div className={styles["welcome-section"]}>
      <div className={styles["text-column-left"]}>
        Знання поруч, лише простягни руку
      </div>
      <div className={styles["text-column-right"]}>
        Відкрий те, що завжди було перед тобою
      </div>
    </div>
  );
}

export default WelcomeSection;
