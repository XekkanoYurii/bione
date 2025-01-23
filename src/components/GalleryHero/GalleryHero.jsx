import { useState, useEffect } from "react";
import img1 from "../ImagesComponents/gallyry/craigmdennis.jpg";
import img2 from "../ImagesComponents/gallyry/markusspiske.jpg";
import img3 from "../ImagesComponents/gallyry/tara-winstead.jpg";
import ModalGallery from "./ModalGallery";
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
        <ModalGallery onClose={closeModal}>
          <button className={styles["modal-prev"]} onClick={prevImage}>
            &#8249; {/* Ліва стрілка */}
          </button>
          <img
            src={images[currentImageIndex]}
            alt={`Modal Image ${currentImageIndex + 1}`}
            className={styles["modal-image"]}
          />
          <button className={styles["modal-next"]} onClick={nextImage}>
            &#8250; {/* Права стрілка */}
          </button>
        </ModalGallery>
      )}
    </section>
  );
};

export default GalleryHero;
