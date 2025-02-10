import { useNavigate } from "react-router-dom";
import styles from "./NavigationButton.module.css";

function NavigationButton({ direction, to }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
    window.scrollTo({ top: 0, behavior: "instant" }); // Моментальне повернення вгору
  };

  return (
    <button
      className={`${styles.navButton} ${
        direction === "left" ? styles.left : styles.right
      }`}
      onClick={handleClick}
    >
      <span className={styles.arrow}>{direction === "left" ? "⏴" : "⏵"}</span>
    </button>
  );
}

export default NavigationButton;
