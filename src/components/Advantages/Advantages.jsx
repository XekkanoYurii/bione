import React, { useState } from "react";
import styles from "./Advantages.module.css";

const advantages = [
  {
    title: "Підвищення продуктивності",
    shortText: "AI автоматизує рутинні завдання, зменшуючи витрати часу.",
    fullText:
      "AI автоматизує рутинні завдання, зменшуючи витрати часу, що дозволяє зосередитися на більш важливих аспектах роботи. Це підвищує ефективність як для компаній, так і для окремих осіб.",
  },
  {
    title: "Поліпшення якості рішень",
    shortText: "AI аналізує великі обсяги даних, підвищуючи якість рішень.",
    fullText:
      "AI аналізує великі обсяги даних, підвищуючи якість рішень та мінімізуючи ризик помилок. Це особливо корисно для прогнозування та планування.",
  },
  {
    title: "Персоналізація",
    shortText:
      "AI створює рекомендації, що відповідають індивідуальним потребам.",
    fullText:
      "AI створює рекомендації, що відповідають індивідуальним потребам користувачів. Це підвищує залучення клієнтів і робить сервіси більш зручними.",
  },
  {
    title: "Постійне навчання та вдосконалення",
    shortText: "AI адаптується та вдосконалюється у реальному часі.",
    fullText:
      "AI адаптується та вдосконалюється у реальному часі, забезпечуючи постійний розвиток технологій і створення нових рішень для складних задач.",
  },
];

function Advantages() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpansion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className={styles["advantages-section"]}>
      <h2 className={styles["section-title"]}>Why Choose AI?</h2>
      <ul className={styles["advantages-list"]}>
        {advantages.map((adv, index) => (
          <li
            key={index}
            className={`${styles["advantage-item"]} ${
              expandedIndex === index ? styles["expanded"] : ""
            }`}
          >
            <div className={styles["content"]}>
              <h3 className={styles["advantage-title"]}>{adv.title}</h3>
              <p className={styles["advantage-short-text"]}>{adv.shortText}</p>
              <button
                className={styles["toggle-button"]}
                onClick={() => toggleExpansion(index)}
              >
                {expandedIndex === index ? "Сховати" : "Показати більше"}
              </button>
            </div>
            {expandedIndex === index && (
              <div className={styles["expanded-content"]}>
                <p>{adv.fullText}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Advantages;
