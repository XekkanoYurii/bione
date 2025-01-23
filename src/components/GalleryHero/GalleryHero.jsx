import { useState, useEffect } from "react";
import img1 from "../ImagesComponents/gallyry/craigmdennis.jpg";
import img2 from "../ImagesComponents/gallyry/markusspiske.jpg";
import img3 from "../ImagesComponents/gallyry/tara-winstead.jpg";
import styles from "./GalleryHero.module.css"; // Імпорт стилів

const images = [img1, img2, img3];

const GalleryHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Закриття модального вікна при натисканні на "Escape"
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section className={styles["gallery-section"]}>
      <h2 className={styles["title"]}>Gallery</h2>
      <div className={styles["gallery"]}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className={styles["gallery-image"]}
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {isModalOpen && (
        <div
          className={styles["modal"]}
          onClick={closeModal} // Закриття при кліку поза модальним вікном
        >
          <div
            className={styles["modal-content"]}
            onClick={(e) => e.stopPropagation()} // Забороняємо клік закривати модалку
          >
            <button className={styles["close-btn"]} onClick={closeModal}>
              &times;
            </button>
            <button className={styles["modal-prev"]} onClick={prevImage}>
              &#8249;
            </button>
            <img
              src={images[currentImageIndex]}
              alt={`Modal Image ${currentImageIndex + 1}`}
              className={styles["modal-image"]}
            />
            <button className={styles["modal-next"]} onClick={nextImage}>
              &#8250;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryHero;
