import { useState, useEffect } from "react";
import styles from "./GalleryHero.module.css";

// Список з фотографіями, що знаходяться локально в проєкті
import img1 from "../ImagesComponents/gallyry/pexels-craigmdennis-57007 (1).jpg";
import img2 from "../ImagesComponents/gallyry/pexels-markusspiske-1089438 (1).jpg";
import img3 from "../ImagesComponents/gallyry/pexels-tara-winstead-8386440 (1).jpg";

const images = [img1, img2, img3]; // Масив зображень

function Gallery() {
  const [isOpen, setIsOpen] = useState(false); // Стейт для модального вікна
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Стейт для поточної фотографії у модальному вікні

  // Відкриття фотографії
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Вимикаємо скролл сторінки
  };

  // Закриття модального вікна
  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; // Включаємо скролл сторінки назад
  };

  // Перемикання на попереднє фото
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Перемикання на наступне фото
  const nextImage = () => {
    setCurrentImageIndex((nextIndex) =>
      nextIndex === images.length - 1 ? 0 : nextIndex + 1
    );
  };

  // Додаємо обробник для клавіші Escape
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeModal(); // Закриваємо модальне вікно при натисканні Escape
      }
    };

    // Додаємо слухач події при монтуванні компонента
    window.addEventListener("keydown", handleEscapeKey);

    // Очищаємо слухач при демонтажі компонента
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <section className={styles["gallery-section"]}>
      <h2 className={styles["gallery-title"]}>Explore AI Technology</h2>
      <div className={styles["gallery-container"]}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles["gallery-item"]}
            onClick={() => openModal(index)} // Відкриваємо фото при кліку
          >
            <img
              src={image}
              alt={`AI Technology ${index + 1}`}
              className={styles["gallery-image"]}
            />
          </div>
        ))}
      </div>

      {/* Модальне вікно для фотографії */}
      {isOpen && (
        <div className={styles["modal"]} onClick={closeModal}>
          <div
            className={styles["modal-content"]}
            onClick={(e) => e.stopPropagation()} // Блокуємо клік по зображенню
          >
            <button className={styles["close-btn"]} onClick={closeModal}>
              ×
            </button>
            <img
              src={images[currentImageIndex]}
              alt={`Modal AI Technology ${currentImageIndex + 1}`}
              className={styles["modal-image"]}
            />
            <div className={styles["modal-controls"]}>
              <button className={styles["prev-btn"]} onClick={prevImage}>
                ←
              </button>
              <button className={styles["next-btn"]} onClick={nextImage}>
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
