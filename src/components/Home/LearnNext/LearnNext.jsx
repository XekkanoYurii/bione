import styles from "./LearnNext.module.css";
import { useNavigate } from "react-router-dom";

const LearnNext = () => {
  const navigate = useNavigate();

  return (
    <section className={styles["learn-next-section"]}>
      <div className={styles["content"]}>
        <p className={styles["description"]}>
          Ми використовуємо передові AI-технології для оптимізації процесів,
          аналітики та автоматизації. Долучайтеся до світу інновацій сьогодні!
        </p>
        <button
          className={styles["learn-button"]}
          onClick={() => navigate("/education")}
        >
          Дізнатися більше
        </button>
      </div>
    </section>
  );
};

export default LearnNext;
