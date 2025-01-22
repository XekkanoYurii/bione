import { useState, useEffect } from "react";
import styles from "./Welcome.module.css";

const WelcomeSection = () => {
  const [opacity, setOpacity] = useState(0.5); // Початкове затемнення (50%)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Поточна позиція прокрутки
      const fadePoint = window.innerHeight * 0.5; // Початок просвітлення
      const maxPoint = window.innerHeight * 1.3; // Повна видимість

      if (scrollPosition <= fadePoint) {
        setOpacity(0.5); // Максимальне затемнення
      } else if (scrollPosition >= maxPoint) {
        setOpacity(0); // Повністю прозоре
      } else {
        const calculatedOpacity =
          0.5 - ((scrollPosition - fadePoint) / (maxPoint - fadePoint)) * 0.5;
        setOpacity(calculatedOpacity);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Очищуємо слухач
    };
  }, []);

  return (
    <div
      className={styles["welcome-section"]}
      style={{ "--overlay-opacity": opacity }} // Передаємо динамічну прозорість
    ></div>
  );
};

export default WelcomeSection;
