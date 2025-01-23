import { useEffect } from "react";
import styles from "./GalleryHero.module.css";

const ModalGallery = ({ onClose, children }) => {
  useEffect(() => {
    // Забороняємо скролінг сторінки при відкритті модального вікна
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={styles["modal"]}>
      <div className={styles["modal-content"]}>
        <button className={styles["close-btn"]} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalGallery;
