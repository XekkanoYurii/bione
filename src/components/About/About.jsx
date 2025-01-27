import BlockList from "./BlockList/BlockList";
import NavigationButton from "../NavigationButton/NavigationButton";

import styles from "./About.module.css";

function About() {
  return (
    <section className={styles["about"]}>
      <div className={styles["about-container"]}>
        <h2 className={styles["about-title"]}>
          Досліджуйте можливості разом із <span>B1ONE</span>
        </h2>
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
      <BlockList />
      <NavigationButton direction="left" to="/" />
      <NavigationButton direction="right" to="/products" />
    </section>
  );
}

export default About;
