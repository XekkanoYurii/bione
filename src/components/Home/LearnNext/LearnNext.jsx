import styles from "./LearnNext.module.css";

const LearnNext = () => {
  return (
    <section className={styles["learn-next-section"]}>
      <div className={styles["content"]}>
        <p className={styles["description"]}>
          Ми використовуємо передові AI-технології для оптимізації процесів,
          аналітики та автоматизації. Долучайтеся до світу інновацій сьогодні!
        </p>
        <a href="/education" className={styles["learn-button"]}>
          Дізнатися більше
        </a>
      </div>
    </section>
  );
};

export default LearnNext;
