import styles from "./AboutHero.module.css";
const AboutHero = () => {
  return (
    <div className={styles["about-container"]}>
      <h2 className={styles["about-title-h2"]}>Давай познайомимося ближче</h2>
      <ul className={styles["about-list"]}>
        <li className={styles["about-item"]}>
          <p className={styles["about-text"]}>
            Світ штучного інтелекту відкриває безмежні можливості – і ми тут,
            щоб провести вас у цей захопливий світ. Ми створили B1ONE для тих,
            хто хоче розібратися в AI, налаштувати його під свої потреби та
            використовувати на повну.
          </p>
        </li>
        <li className={styles["about-item"]}>
          <p className={styles["about-text"]}>
            Світ штучного інтелекту відкриває безмежні можливості – і ми тут,
            щоб провести вас у цей захопливий світ. Ми створили B1ONE для тих,
            хто хоче розібратися в AI, налаштувати його під свої потреби та
            використовувати на повну.
          </p>
        </li>
      </ul>
      <ul className={styles["list-ask"]}>
        <li className={styles["ask-item"]}>Як користатись чатом?</li>
        <li className={styles["ask-item"]}>Що запитати?</li>
        <li className={styles["ask-item"]}>Які можливості чата?</li>
      </ul>
    </div>
  );
};

export default AboutHero;
