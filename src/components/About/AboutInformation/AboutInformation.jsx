import { useEffect, useState } from "react";
import styles from "./AboutInformation.module.css";

const sectionsData = [
  {
    title: "Про наш портал",
    text: [
      "B1ONE – це платформа, створена для тих, хто прагне опанувати AI.",
      "Ми надаємо можливість вивчати сучасні AI-інструменти, їх використання та налаштування під ваші потреби.",
      "Наш портал – це місце, де технології стають зрозумілими, а рішення – доступними.",
    ],
    imgClass: "img-space-container",
    textPosition: "left",
  },
  {
    title: "Про команду",
    text: [
      "Ми – команда розробників, що робить штучний інтелект доступним і зрозумілим.",
      "Спеціалізуємось на AI, допомагаємо адаптувати технології під реальні потреби.",
      "Кожен член команди – це експерт, який прагне зробити світ кращим.",
    ],
    imgClass: "img-team-container",
    textPosition: "right",
  },
  {
    title: "Наші цілі",
    text: [
      "Мета – звільнити час людей, передавши рутинні завдання AI.",
      "Допомагаємо використовувати AI-інструменти для досягнення персональних цілей.",
      "Ми змінюємо світ на краще, допомагаючи людям працювати ефективніше.",
    ],
    imgClass: "img-goal-container",
    textPosition: "left",
  },
];

const AboutInformation = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const sections = document.querySelectorAll(
      `.${styles["section-container"]}`
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...prev, entry.target.dataset.index]);
          } else {
            setVisibleSections((prev) =>
              prev.filter((i) => i !== entry.target.dataset.index)
            );
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className={styles["lists-container"]}>
      <h2 className={styles["main-title"]}>Розділи</h2>
      {sectionsData.map((section, index) => (
        <div
          key={index}
          className={`${styles["section-container"]} ${
            visibleSections.includes(index.toString())
              ? styles["visible"]
              : styles["hidden"]
          }`}
          data-index={index}
        >
          <h3 className={styles["section-title-h3"]}>{section.title}</h3>
          <div className={styles["content"]}>
            {section.textPosition === "left" ? (
              <>
                <ul className={styles["list-left"]}>
                  {section.text.map((text, idx) => (
                    <li key={idx} className={styles["list-item"]}>
                      {text}
                    </li>
                  ))}
                </ul>
                <div
                  className={`${styles["img-container"]} ${
                    styles[section.imgClass]
                  }`}
                ></div>
              </>
            ) : (
              <>
                <div
                  className={`${styles["img-container"]} ${
                    styles[section.imgClass]
                  }`}
                ></div>
                <ul className={styles["list-right"]}>
                  {section.text.map((text, idx) => (
                    <li key={idx} className={styles["list-item"]}>
                      {text}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutInformation;
