import styles from "./ChatsModal.module.css";
import { IoIosArrowUp } from "react-icons/io"; // Іконки стрілок (тепер вгору)
import { FaExternalLinkAlt } from "react-icons/fa"; // Іконка для посилання

const ChatsModal = ({ isOpen, content, onClose }) => {
  if (!isOpen || !content) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={`${styles.modalContent} ${styles.slideDown}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Іконка чату */}
        <div className={styles.chatIcon}>
          <img src={content.img} alt={content.title} />
        </div>

        <h2>{content.title}</h2>
        <p className={styles.description}>{content.description}</p>

        {/* Приклади промптів */}
        <div className={styles.prompts}>
          <h3>Приклади промптів:</h3>
          <p>🔹 {content.prompt1}</p>
          <p>🔹 {content.prompt2}</p>
        </div>

        {/* Посилання на чат */}
        <a
          href={content.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Перейти до чату <FaExternalLinkAlt />
        </a>

        {/* Кнопка закриття зі стрілками */}
        <div className={styles.closeButton} onClick={onClose}>
          <IoIosArrowUp className={styles.arrow} />
        </div>
      </div>
    </div>
  );
};

export default ChatsModal;
