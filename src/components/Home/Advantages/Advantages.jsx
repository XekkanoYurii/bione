import styles from "./Advantages.module.css";

function Advantages() {
  return (
    <section className={styles["advantages-section"]}>
      <ul className={styles["advantages-list"]}>
        <li className={styles["advantage-item"]}>
          <h3 className={styles["advantage-title"]}>
            Технології, створені спеціально для вас
          </h3>
          <p className={styles["advantage-text"]}>
            B1ONE створює унікальні AI-рішення під ваші потреби. Індивідуальне
            налаштування ChatGPT забезпечує точність та комфорт у використанні.
          </p>
        </li>

        <li className={styles["advantage-item"]}>
          <h3 className={styles["advantage-title"]}>
            Постійний розвиток – ваш і наш
          </h3>
          <p className={styles["advantage-text"]}>
            Ми не лише пропонуємо інструменти, а й навчаємо вас ними
            користуватися. ШІ з нами – це простота, адаптація та інновації, які
            розвиваються разом із вашими потребами.
          </p>
        </li>

        <li className={styles["advantage-item"]}>
          <h3 className={styles["advantage-title"]}>Звільніть свій час</h3>
          <p className={styles["advantage-text"]}>
            Наш AI допомагає позбутися повторюваних завдань, щоб ви могли
            зосередитись на найважливішому. Ефективність, швидкість і
            результативність – ось що ви отримуєте з нами.
          </p>
        </li>

        <li className={styles["advantage-item"]}>
          <h3 className={styles["advantage-title"]}>
            Розумні рішення без зайвих ризиків
          </h3>
          <p className={styles["advantage-text"]}>
            Штучний інтелект аналізує дані та пропонує точні інсайти,
            мінімізуючи ризики. Планування, прогнозування і прийняття рішень
            стають легшими та надійнішими.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Advantages;
