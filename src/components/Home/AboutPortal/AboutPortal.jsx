import styles from "./AboutPortal.module.css";

const AboutPortal = () => {
  return (
    <div className={styles["about-portal-container"]}>
      <div className={styles["about-portal-content"]}>
        {/* Блок із зображенням */}
        <div className={styles["about-portal-image"]}></div>

        {/* Блок з текстом */}
        <div className={styles["about-portal-text"]}>
          <p className={styles["about-portal-description"]}>
            Опис для першого елемента списку. Це короткий текст про зміст. Опис
            для першого елемента списку. Це короткий текст про зміст. Опис для
            першого елемента списку. Це короткий текст про зміст. Опис для
            першого елемента списку. Це короткий текст про зміст. Опис для
            першого елемента списку. Це короткий текст про зміст. Опис для
            першого елемента списку. Це короткий текст про зміст. Опис для
            першого елемента списку. Це короткий текст про зміст.
          </p>
          <a className={styles["about-portal-link"]} href="#more-info">
            Дізнатися більше
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPortal;
