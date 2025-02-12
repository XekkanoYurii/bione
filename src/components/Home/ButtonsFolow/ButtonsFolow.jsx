import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ButtonsFolow.module.css";

const ButtonsFolow = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null); // Стан для показу підказки

  return (
    <div className={styles["buttons-container"]}>
      <div className={styles["button-wrapper"]}>
        <button
          className={styles["button"]}
          onClick={() => navigate("/contacts")}
          onMouseEnter={() => setHovered("contact")}
          onMouseLeave={() => setHovered(null)}
        >
          Contact Us
        </button>
        {hovered === "contact" && (
          <div className={styles["tooltip"]}>Перенаправлення на Contacts</div>
        )}
      </div>

      <div className={styles["button-wrapper"]}>
        <button
          className={styles["button"]}
          onClick={() => navigate("/contacts")}
          onMouseEnter={() => setHovered("follow")}
          onMouseLeave={() => setHovered(null)}
        >
          Follow Us
        </button>
        {hovered === "follow" && (
          <div className={styles["tooltip"]}>Перенаправлення на Contacts</div>
        )}
      </div>
    </div>
  );
};

export default ButtonsFolow;
