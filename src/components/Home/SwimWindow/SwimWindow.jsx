import { useState, useEffect } from "react";
import styles from "./SwimWindow.module.css";

const SwimWindow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [closing, setClosing] = useState(false); // Логіка для закриття

  useEffect(() => {
    const hasClosedPopup = sessionStorage.getItem("hasClosedSwimWindow");
    if (!hasClosedPopup) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const triggerPoint = window.innerHeight * 0.5;

        if (scrollPosition >= triggerPoint) {
          setIsVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "auto";
  }, [isVisible]);

  const handleClose = () => {
    setClosing(true); // Запускаємо анімацію закриття

    setTimeout(() => {
      setIsVisible(false);
      setClosing(false);
      sessionStorage.setItem("hasClosedSwimWindow", "true");
    }); // Час збігається з анімацією
  };

  if (!isVisible) return null;

  return (
    <div
      className={`${styles["swim-overlay"]} ${
        closing ? styles["fade-out"] : ""
      }`}
    >
      <div
        className={`${styles["swim-window"]} ${
          closing ? styles["slide-out"] : ""
        }`}
      >
        <div className={styles["swim-content"]}>
          <h2 className={styles["title"]}>
            Раді тебе бачити у <span className={styles["span"]}>B1One</span> тут
            ти дізнаєшся
          </h2>
          <ul className={styles["list"]}>
            <li className={styles["list-item"]}>
              Кастомні AI-моделі для оптимізації процесів
            </li>
            <li className={styles["list-item"]}>
              Розумна аналітика для кращих рішень
            </li>
            <li className={styles["list-item"]}>
              Інноваційні інструменти для розширення можливостей
            </li>
            <li className={styles["list-item"]}>
              AI-чати для роботи, навчання та автоматизації
            </li>
            <li className={styles["list-item"]}>
              Персональні AI-асистенти для вашого комфорту
            </li>
          </ul>
          <button className={styles["swim-button"]} onClick={handleClose}>
            Дізнатись!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwimWindow;
