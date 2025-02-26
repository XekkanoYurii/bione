import styles from "./Bloks.module.css";

const FirstUse = () => {
  return (
    <div className={styles["first-use-container"]}>
      <div className={styles["first-use-header"]}>
        <h2 className={styles["first-use-title"]}>
          Перше використання ChatGPT
        </h2>
      </div>

      <div className={styles["first-use-content"]}>
        <p className={styles["first-use-text"]}>
          👋 Вітаємо! Якщо ви тут, то, напевно, хочете почати користуватися
          <span className={styles["highlight-text"]}> ChatGPT</span>. Це дуже
          просто! Дотримуйтесь інструкції нижче, і ви зможете швидко розпочати
          роботу.
        </p>

        {/* КРОК 1 */}
        <p className={styles["first-use-text"]}>
          ✅ <strong>Крок 1:</strong> Відкрийте ваш улюблений браузер (Google
          Chrome, Firefox, Safari або Edge) і перейдіть на офіційний сайт
          ChatGPT:
          <span className={styles["highlight-text"]}>
            {" https://chat.openai.com"}
          </span>
        </p>
        <img
          className={styles["first-use-image"]}
          src="/public/BlockImg/FirtstUSe/firstUse-1.jpg"
          alt="Відкриття Google і пошук ChatGPT"
        />

        {/* КРОК 2 */}
        <p className={styles["first-use-text"]}>
          🔍 <strong>Крок 2:</strong> У рядку пошуку Google введіть
          <span className={styles["highlight-text"]}> OpenAI</span> та натисніть
          Enter. У результатах пошуку натисніть на офіційний сайт OpenAI.
        </p>
        <img
          className={styles["first-use-image"]}
          src="/public/BlockImg/FirtstUSe/firstUse-2.jpg"
          alt="Результати пошуку OpenAI в Google"
        />

        {/* КРОК 3 */}
        <p className={styles["first-use-text"]}>
          🖱 <strong>Крок 3:</strong> На головній сторінці OpenAI у верхньому
          меню знайдіть вкладку
          <span className={styles["highlight-text"]}> ChatGPT</span> і натисніть
          на неї.
        </p>
        <img
          className={styles["first-use-image"]}
          src="/public/BlockImg/FirtstUSe/firstUse-3.jpg"
          alt="Вкладка ChatGPT на сайті OpenAI"
        />

        {/* КРОК 4 */}
        <p className={styles["first-use-text"]}>
          🔑 <strong>Крок 4:</strong> Вам потрібно увійти в акаунт. Якщо у вас
          уже є акаунт, натисніть
          <span className={styles["highlight-text"]}> Log in</span>. Якщо ні —
          натисніть
          <span className={styles["highlight-text"]}> Sign up</span> для
          реєстрації.
        </p>
        <img
          className={styles["first-use-image"]}
          src="/public/BlockImg/FirtstUSe/firstUse-4.jpg"
          alt="Форма входу та реєстрації в ChatGPT"
        />

        {/* КРОК 5 */}
        <p className={styles["first-use-text"]}></p>
        <img
          className={styles["first-use-image"]}
          src="/public/BlockImg/FirtstUSe/firstUse-5.jpg"
          alt="Заповнення форми реєстрації"
        />
        <ul className={styles["first-use-list"]}>
          <li className={styles["first-use-list-item"]}>
            📧 <strong>Email:</strong> Введіть вашу електронну адресу.
          </li>
          <li className={styles["first-use-list-item"]}>
            🔒 <strong>Пароль:</strong> Придумайте надійний пароль (не менш ніж
            8 символів).
          </li>
          <li className={styles["first-use-list-item"]}>
            ✅ <strong>Підтвердження:</strong> Перевірте електронну пошту та
            підтвердьте акаунт.
          </li>
        </ul>

        {/* КРОК 6 */}
        <p className={styles["first-use-text"]}>
          ⚙️ <strong>Крок 6:</strong> Після входу натисніть на своє ім’я у
          верхньому правому куті та відкрийте розділ{" "}
          <span className={styles["highlight-text"]}>
            {" "}
            Налаштування ChatGPT
          </span>
          .
        </p>
        <img
          className={styles["first-use-image"]}
          src="/public/BlockImg/FirtstUSe/firstUse-6.jpg"
          alt="Меню налаштувань ChatGPT"
        />

        {/* Фінальний етап */}
        <p className={styles["first-use-text"]}>
          🎉 Вітаємо! Тепер ви готові почати роботу з ChatGPT. Ви можете вводити
          текстові запити, отримувати відповіді та насолоджуватися всіма
          можливостями штучного інтелекту! 🚀
        </p>
      </div>
    </div>
  );
};

export default FirstUse;
