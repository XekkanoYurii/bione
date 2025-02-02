import { useState, useEffect } from "react";
import styles from "./SwimWindow.module.css";

const SwimWindow = () => {
  const [isVisible, setIsVisible] = useState(false); // Вікно приховане за замовчуванням

  useEffect(() => {
    // Перевіряємо sessionStorage: якщо користувач уже натиснув кнопку, вікно не показується
    const hasClosedPopup = sessionStorage.getItem("hasClosedSwimWindow");
    if (!hasClosedPopup) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY; // Поточна позиція скролу
        const triggerPoint = window.innerHeight * 0.55; // Точка появи (1.3 висоти viewport)

        if (scrollPosition >= triggerPoint) {
          setIsVisible(true); // Показуємо вікно
          window.removeEventListener("scroll", handleScroll); // Знімаємо слухач після спрацювання
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll); // Очищаємо слухач при знищенні компонента
      };
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden"; // Заборона скролу
    } else {
      document.body.style.overflow = "auto"; // Відновлення скролу
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false); // Закриваємо вікно
    sessionStorage.setItem("hasClosedSwimWindow", "true"); // Зберігаємо стан у sessionStorage
  };

  if (!isVisible) return null; // Не рендеримо, якщо вікно приховано

  return (
    <div className={styles["swim-overlay"]}>
      <div className={styles["swim-window"]}>
        <div className={styles["swim-content"]}>
          <h2 className={styles["title"]}>
            Welcome to space <span className={styles["span"]}>B1One</span>
          </h2>
          <ul className={styles["list"]}>
            <li className={styles["list-item"]}>
              - Кастомні AI-моделі для оптимізації процесів
            </li>
            <li className={styles["list-item"]}>
              - Розумна аналітика, яка допомагає приймати кращі рішення
            </li>
            <li className={styles["list-item"]}>
              - Інноваційні інструменти, що відкривають нові горизонти.
              Розширюйте можливості
            </li>
            <li className={styles["list-item"]}>
              - Досліджуйте свіжі підходи до вирішення задач
            </li>
            <li className={styles["list-item"]}>
              - Керуйте процесами ефективно з нашими технологіями
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
