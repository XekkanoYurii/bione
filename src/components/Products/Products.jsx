import React, { useState } from "react";
import NavigationButton from "../NavigationButton/NavigationButton";
import styles from "./Products.module.css";

function Products() {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  return (
    <section className={styles["products"]}>
      <div className={styles["container"]}>
        <h2 className={styles["title"]}>Наші Продукти</h2>
        <p className={styles["description"]}>
          Оберіть цікаву категорію, щоб переглянути більше.
        </p>
        <ul className={styles["list"]}>
          {/* Категорія: Вивчення мов */}
          <li
            className={styles["listItem"]}
            onClick={() => toggleCategory("languages")}
          >
            <h3 className={styles["listTitle"]}>Вивчення мов</h3>
            {activeCategory === "languages" && (
              <ul className={styles["sublist"]}>
                <li className={styles["sublistItem"]}>
                  <h4 className={styles["subTitle"]}>English Mentor Pro</h4>
                  <a
                    href="https://chatgpt.com/g/g-yBu1VbKuu-english-mentor-pro"
                    className={styles["link"]}
                  >
                    <img
                      src="../ImagesComponents/imagesOfChats/imgEngChat.jpg"
                      alt="English Mentor Pro"
                      className={styles["image"]}
                    />
                  </a>
                  <p className={styles["subDescription"]}>
                    Ваш тренер з англійської. Вдосконалення вимови, граматики та
                    практики розмови.
                  </p>
                </li>
                <li className={styles["sublistItem"]}>
                  <h4 className={styles["subTitle"]}>Maestro Español</h4>
                  <a
                    href="https://chatgpt.com/g/g-W6zEnyvaH-maestro-espanol"
                    className={styles["link"]}
                  >
                    <img
                      src="../ImagesComponents/imagesOfChats/imgSpainChat.jpg"
                      alt="Maestro Español"
                      className={styles["image"]}
                    />
                  </a>
                  <p className={styles["subDescription"]}>
                    Інтерактивний помічник з іспанської мови. Розмовна практика
                    та культурні особливості.
                  </p>
                </li>
              </ul>
            )}
          </li>

          {/* Категорія: Промисловість */}
          <li
            className={styles["listItem"]}
            onClick={() => toggleCategory("industry")}
          >
            <h3 className={styles["listTitle"]}>Промисловість</h3>
            {activeCategory === "industry" && (
              <ul className={styles["sublist"]}>
                <li className={styles["sublistItem"]}>
                  <h4 className={styles["subTitle"]}>LogiMaster Pro</h4>
                  <a
                    href="https://chatgpt.com/g/g-c7js8U0Wx-logimaster-pro"
                    className={styles["link"]}
                  >
                    <img
                      src="../ImagesComponents/imagesOfChats/imgLogisticChat.jpg"
                      alt="LogiMaster Pro"
                      className={styles["image"]}
                    />
                  </a>
                  <p className={styles["subDescription"]}>
                    Інструмент для оптимізації маршрутів та логістичних
                    процесів.
                  </p>
                </li>
              </ul>
            )}
          </li>

          {/* Категорія: Здоров'я */}
          <li
            className={styles["listItem"]}
            onClick={() => toggleCategory("health")}
          >
            <h3 className={styles["listTitle"]}>Здоров'я</h3>
            {activeCategory === "health" && (
              <ul className={styles["sublist"]}>
                <li className={styles["sublistItem"]}>
                  <h4 className={styles["subTitle"]}>Health Assistant</h4>
                  <a href="#" className={styles["link"]}>
                    <img
                      src="../ImagesComponents/imagesOfChats/healthImage.jpg"
                      alt="Health Assistant"
                      className={styles["image"]}
                    />
                  </a>
                  <p className={styles["subDescription"]}>
                    Ваш помічник для покращення здоров'я та відстеження
                    активності.
                  </p>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <NavigationButton direction="left" to="/about" />
      <NavigationButton direction="right" to="/contacts" />
    </section>
  );
}

export default Products;
