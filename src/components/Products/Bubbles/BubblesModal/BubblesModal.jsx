import styles from "./BubblesModal.module.css";

const BubblesModal = ({ isOpen, content, onClose }) => {
  if (!isOpen || !content) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>{content.title}</h2>
        <p>{content.description}</p>
        <button className={styles.closeButton} onClick={onClose}>
          Закрити
        </button>
      </div>
    </div>
  );
};

export default BubblesModal;
