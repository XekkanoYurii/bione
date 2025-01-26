import { useState } from "react";
import styles from "./Advantages.module.css";

const advantages = [
  {
    title: "Технології, створені спеціально для вас",
    fullText:
      "B1ONE створює унікальні AI-рішення під ваші потреби. Індивідуальне налаштування ChatGPT забезпечує точність та комфорт у використанні",
  },
  {
    title: "Постійний розвиток – ваш і наш",
    fullText:
      "Ми не лише пропонуємо інструменти, а й навчаємо вас ними користуватися. ШІ з нами – це простота, адаптація та інновації, які розвиваються разом із вашими потребами",
  },
  {
    title: "Звільніть свій час",
    fullText:
      "Наші AI допомагає позбутися повторюваних завдань, щоб ви могли зосередитись на найважливішому. Ефективність, швидкість і результативність – ось що ви отримуєте з нами",
  },
  {
    title: "Розумні рішення без зайвих ризиків",
    fullText:
      "Штучний інтелект аналізує дані та пропонує точні інсайти, мінімізуючи ризики. Планування, прогнозування і прийняття рішень стають легшими та надійнішими",
  },
];

function Advantages() {
  const [isHovered, setIsHovered] = useState(false); // Стан для наведення на весь список

  return (
    <section
      className={`${styles["advantages-section"]} ${
        isHovered ? styles["list-hovered"] : ""
      }`}
      onMouseEnter={() => setIsHovered(true)} // Наведення на список
      onMouseLeave={() => setIsHovered(false)} // Приховуємо стан
    >
      <h2 className={styles["section-title"]}>
        Чому обрати <span>B1One</span>?
      </h2>
      <ul className={styles["advantages-list"]}>
        {advantages.map((adv, index) => (
          <li key={index} className={styles["advantage-item"]}>
            <div className={styles["content"]}>
              <h3 className={styles["advantage-title"]}>{adv.title}</h3>
              <p className={styles["advantage-full-text"]}>{adv.fullText}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Advantages;
