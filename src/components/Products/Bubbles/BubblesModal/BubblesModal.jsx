// BubblesModal.jsx
import { useEffect } from "react";
import Modal from "react-modal";
import styles from "./BubblesModal.module.css";

const BubblesModal = ({ isOpen, content, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button className={styles.closeButton} onClick={onClose}>
        &#x2193;
      </button>
      <h2>AI Продукт</h2>
      <p>{content}</p>
    </Modal>
  );
};

export default BubblesModal;
