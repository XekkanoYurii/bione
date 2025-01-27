import NavigationButton from "../NavigationButton/NavigationButton";

import styles from "./About.module.css";

function About() {
  return (
    <section className={styles["about"]}>
      <div className={styles["about-container"]}>
        <h2 className={styles["about-title"]}>про нас</h2>
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
      <div>
        <h2>Про наш сервіс</h2>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <img src="./AboutImage/a.jpg" alt="image" />
        </div>
      </div>
      <div>
        <h2>Про команду</h2>
        <div>
          <img src="./AboutImage/b.jpg" alt="image" />
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div>
        <h2>Наші цілі</h2>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <img src="./AboutImage/d.jpg" alt="image" />
        </div>
      </div>
      <NavigationButton direction="left" to="/" />
      <NavigationButton direction="right" to="/products" />
    </section>
  );
}

export default About;
