import NavigationButton from "../NavigationButton/NavigationButton";

import styles from "./About.module.css";

function About() {
  return (
    <section className={styles["about"]}>
      <div className={styles["about-container"]}>
        <h2 className={styles["about-title-h2"]}>про нас</h2>
        <p className={styles["about-text"]}>
          Вітаємо вас у нашій інформаційній секції! Тут зібраний список цікавих
          тем, які допоможуть вам глибше зануритися у світ штучного інтелекту,
          технологій і інновацій. Обирайте тему, яка вас зацікавила, і
          переходьте на сторінку з детальною інформацією. Ми створили ці
          матеріали, щоб ви могли навчатись, відкривати нові горизонти та
          знаходити відповіді на свої запитання. Ваш шлях до знань починається
          тут. Зробіть свій вибір і продовжуйте відкривати світ із нами!
        </p>
      </div>

      <div className={styles["lists-container"]}>
        <div className={styles["section-container"]}>
          <h3 className={styles["section-title-h3"]}>Про наш портал</h3>
          <div className={styles["content"]}>
            <ul className={styles["list-left"]}>
              <li className={styles["list-item"]}>
                B1ONE – це платформа, створена спеціально для тих, хто прагне
                зрозуміти та опанувати штучний інтелект.
              </li>
              <li className={styles["list-item"]}>
                Ми надаємо можливість поглиблено вивчати сучасні{" "}
                <span className={styles["span"]}>AI-інструменти</span>, їх
                використання та налаштування відповідно{" "}
                <span className={styles["span"]}>до ваших потреб</span>.
              </li>
              <li className={styles["list-item"]}>
                Наш портал – це місце, де{" "}
                <span className={styles["span"]}>технології</span> стають
                <span className={styles["span"]}>зрозумілими</span>, а рішення –
                доступними.
              </li>
              <li className={styles["list-item"]}>
                <span className={styles["span"]}>Ми прагнемо</span> зробити
                штучний інтелект простим і корисним у повсякденному житті, щоб
                кожен міг{" "}
                <span className={styles["span"]}>
                  максимально використовувати його можливості
                </span>
                .
              </li>
            </ul>
            <div
              className={`${styles["img-container"]} ${styles["img-space-container"]}`}
            ></div>
          </div>
        </div>
        <div className={styles["section-container"]}>
          <h3 className={styles["section-title-h3"]}>Про команду</h3>
          <div className={styles["content"]}>
            <div
              className={`${styles["img-container"]} ${styles["img-team-container"]}`}
            ></div>
            <ul className={styles["list-right"]}>
              <li className={styles["list-item"]}>
                Ми – команда досвідчених розробників, об’єднаних спільною метою:
                зробити <span className={styles["span"]}>штучний інтелект</span>{" "}
                зрозумілим і доступним
                <span className={styles["span"]}>для кожного</span>.
              </li>
              <li className={styles["list-item"]}>
                Спеціалізуючись на AI, ми
                <span className={styles["span"]}>допомагаємо</span> людям не
                лише освоїти технології, а й максимально адаптувати їх під свої
                потреби.
              </li>
              <li className={styles["list-item"]}>
                Кожен член нашої команди – це{" "}
                <span className={styles["span"]}>експерт</span>, який прагне
                зробити світ кращим за допомогою{" "}
                <span className={styles["span"]}>передових рішень</span>.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["section-container"]}>
          <h3 className={styles["section-title-h3"]}>Наші цілі</h3>
          <div className={styles["content"]}>
            <ul className={styles["list-left"]}>
              <li className={styles["list-item"]}>
                Наша <span className={styles["span"]}>головна мета</span> –
                допомогти людям{" "}
                <span className={styles["span"]}>звільнити час для себе</span>,
                своєї родини та{" "}
                <span className={styles["span"]}>важливих моментів життя</span>,
                передавши рутинні завдання в руки штучного інтелекту.
              </li>
              <li className={styles["list-item"]}>
                <span className={styles["span"]}>Ми</span> хочемо, щоб кожен міг
                використовувати <span className={styles["span"]}>ChatGPT</span>{" "}
                та інші інструменти для досягнення власних цілей, зосереджуючись
                на тому, що дійсно{" "}
                <span className={styles["span"]}>важливо</span>.
              </li>
              <li className={styles["list-item"]}>
                Ми прагнемо <span className={styles["span"]}>змінити світ</span>{" "}
                на краще,{" "}
                <span className={styles["span"]}>допомагаючи людям</span> бачити
                ширшу картину, брати участь у великих змінах і{" "}
                <span className={styles["span"]}>
                  створювати щасливе майбутнє
                </span>{" "}
                для всіх.
              </li>
            </ul>
            <div
              className={`${styles["img-container"]} ${styles["img-goal-container"]}`}
            ></div>
          </div>
        </div>
      </div>

      <NavigationButton direction="left" to="/" />
      <NavigationButton direction="right" to="/education" />
    </section>
  );
}

export default About;
