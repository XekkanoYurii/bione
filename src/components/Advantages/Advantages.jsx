import { useState } from "react";
import styles from "./Advantages.module.css";

const advantages = [
  {
    title: "Підвищення продуктивності",
    fullText:
      "AI автоматизує рутинні завдання, зменшуючи витрати часу, що дозволяє зосередитися на більш важливих аспектах роботи. Це підвищує ефективність як для компаній, так і для окремих осіб.",
  },
  {
    title: "Поліпшення якості рішень",
    fullText:
      "AI аналізує великі обсяги даних, підвищуючи якість рішень та мінімізуючи ризик помилок. Це особливо корисно для прогнозування та планування.",
  },
  {
    title: "Персоналізація",
    fullText:
      "AI створює рекомендації, що відповідають індивідуальним потребам користувачів. Це підвищує залучення клієнтів і робить сервіси більш зручними.",
  },
  {
    title: "Постійне навчання та вдосконалення",
    fullText:
      "AI адаптується та вдосконалюється у реальному часі, забезпечуючи постійний розвиток технологій і створення нових рішень для складних задач.",
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
        Why Choose <span>AI</span>?
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
