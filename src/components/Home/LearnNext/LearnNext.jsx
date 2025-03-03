import styles from "./LearnNext.module.css";

const LearnNext = () => {
  return (
    <div className={styles["learn-next-container"]}>
      <div className={styles["learn-next-content"]}>
        {/* Блок із зображенням */}
        <div className={styles["learn-next-image"]}></div>

        {/* Блок зі списком */}
        <div className={styles["learn-next-text"]}>
          <ul className={styles["learn-next-list"]}>
            <li className={styles["learn-next-item"]}>
              <h3 className={styles["learn-next-title"]}>Заголовок 1</h3>
              <p className={styles["learn-next-description"]}>
                Опис для першого елемента списку. Це короткий текст про зміст.
                Опис для першого елемента списку. Це короткий текст про зміст.
                Опис для першого елемента списку. Це короткий текст про зміст.
                Опис для першого елемента списку. Це короткий текст про зміст.
              </p>
              <a className={styles["learn-next-link"]} href="#section1">
                Дізнатися більше
              </a>
            </li>

            <li className={styles["learn-next-item"]}>
              <h3 className={styles["learn-next-title"]}>Заголовок 2</h3>
              <p className={styles["learn-next-description"]}>
                Опис для першого елемента списку. Це короткий текст про зміст.
                Опис для першого елемента списку. Це короткий текст про зміст.
                Опис для першого елемента списку. Це короткий текст про зміст.
                Опис для другого елемента списку. Це короткий текст про зміст.
              </p>
              <a className={styles["learn-next-link"]} href="#section2">
                Дізнатися більше
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LearnNext;
