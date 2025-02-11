import { useState } from "react";
import styles from "./ReportBugButton.module.css";

const ReportBugButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={styles["report-container"]}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className={styles["tooltip"]}>
          Якщо знайшли помилку, зробіть скріншот і надішліть його боту.
        </div>
      )}
      <a
        href="https://t.me/YOUR_TELEGRAM_BOT" // 🔹 Замініть на посилання вашого бота
        target="_blank"
        rel="noopener noreferrer"
        className={styles["report-button"]}
      >
        Знайшли помилку?
      </a>
    </div>
  );
};

export default ReportBugButton;
