import styles from "./NavigationButton.module.css";

function NavigationButton({ direction, to }) {
  return (
    <a
      href={to}
      className={`${styles.navButton} ${
        direction === "left" ? styles.left : styles.right
      }`}
    >
      <span className={styles.arrow}>{direction === "left" ? "⏴" : "⏵"}</span>
    </a>
  );
}

export default NavigationButton;
