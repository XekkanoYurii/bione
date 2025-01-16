import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavigationButton.module.css";

function NavigationButton({ direction, to }) {
  const navigate = useNavigate();

  return (
    <button
      className={`${styles["nav-button"]} ${
        direction === "left" ? styles["left"] : styles["right"]
      }`}
      onClick={() => navigate(to)}
    >
      {direction === "left" ? "←" : "→"}
    </button>
  );
}

export default NavigationButton;
