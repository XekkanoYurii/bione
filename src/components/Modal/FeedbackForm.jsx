import { useState } from "react";
import Modal from "./Modal";
import styles from "./FeedbackForm.module.css";

const FeedbackForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логіка обробки даних форми
    alert("Форма відправлена!");
    setIsModalOpen(false); // Закриваємо модальне вікно після відправки
  };

  return (
    <div className={styles["div"]}>
      <div className={styles["buttonContainer"]}>
        <button onClick={handleOpenModal} className={styles["form-button"]}>
          Submit
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h3>Форма зворотного зв'язку</h3>
        <form onSubmit={handleSubmit} className={styles["form-container"]}>
          <input
            type="text"
            name="nickname"
            placeholder="Ваш нікнейм"
            className="form-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Ваш email"
            className="form-input"
            required
          />
          <textarea
            name="comment"
            placeholder="Ваш коментар"
            className="form-textarea"
            rows="4"
            required
          ></textarea>
          <button type="submit" className={styles["form-submit-button"]}>
            Відправити
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default FeedbackForm;
