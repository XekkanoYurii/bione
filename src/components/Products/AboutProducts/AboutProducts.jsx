import styles from "./AboutProducts.module.css";

const AboutProducts = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.title}>
        Досліджуйте <span>AI Чати</span> для вашого комфорту
      </h2>
      <p className={styles.description}>
        Тут ви знайдете різноманітні <span>кастомні AI-чати</span>, які
        допоможуть вам у різних сферах. Ознайомтесь із можливостями кожного,
        перегляньте <span>приклади промптів</span> та оберіть той, що вам
        підходить! 🚀
      </p>
    </div>
  );
};

export default AboutProducts;
