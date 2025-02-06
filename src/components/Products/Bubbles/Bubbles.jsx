import { useState, useCallback, useRef } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import BubblesModal from "./BubblesModal/BubblesModal";
import styles from "./Bubbles.module.css";

const Bubbles = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const containerRef = useRef(null);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const handleBubbleClick = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const particlesOptions = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "attract",
        },
      },
      modes: {
        attract: {
          distance: 150,
          duration: 0.4,
          factor: 5,
        },
      },
    },
    particles: {
      number: { value: 40 }, // Збільшення кількості бульбашок
      shape: { type: "circle" },
      size: { value: 10, random: true },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: true, // Додаємо хаотичний рух
        straight: false,
        outModes: {
          default: "bounce",
        },
        attract: {
          enable: false,
        },
        collisions: {
          enable: true, // Увімкнення зіткнень
        },
      },
      opacity: { value: 0.8 },
    },
    detectRetina: true,
  };

  return (
    <div className={styles.bubblesContainer} ref={containerRef}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />

      <div className={styles.bubbles}>
        {"AI 1,AI 2,AI 3,AI 4,AI 5,AI 6,AI 7,AI 8,AI 9,AI 10"
          .split(",")
          .map((ai, index) => (
            <div
              key={index}
              className={styles.bubble}
              onClick={() => handleBubbleClick(`Інформація про ${ai}`)}
            >
              {ai}
            </div>
          ))}
      </div>

      <BubblesModal
        isOpen={modalIsOpen}
        content={modalContent}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Bubbles;
