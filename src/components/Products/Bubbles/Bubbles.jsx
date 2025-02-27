import { useState, useRef } from "react";
import BubblesModal from "./BubblesModal/BubblesModal";
import styles from "./Bubbles.module.css";

const bubblesData = [
  {
    id: 1,
    title: "ChatGPT",
    description: "Штучний інтелект для тексту",
    link: "https://chat.openai.com",
  },
  {
    id: 2,
    title: "Custom AI",
    description: "Налаштовані AI моделі",
    link: "https://customai.com",
  },
  {
    id: 3,
    title: "Analytics",
    description: "AI аналітика та прогнозування",
    link: "https://analyticsai.com",
  },
  {
    id: 4,
    title: "Bot Builder",
    description: "Конструктор AI ботів",
    link: "https://botbuilder.com",
  },
  {
    id: 5,
    title: "Data Science",
    description: "AI для аналізу даних",
    link: "https://datascience.com",
  },
  {
    id: 6,
    title: "Machine Learning",
    description: "Алгоритми машинного навчання",
    link: "https://mlmodels.com",
  },
  {
    id: 7,
    title: "Deep Learning",
    description: "Глибокі нейромережі",
    link: "https://deeplearning.com",
  },
  {
    id: 8,
    title: "Voice AI",
    description: "Розпізнавання голосу",
    link: "https://voiceai.com",
  },
  {
    id: 9,
    title: "Computer Vision",
    description: "Обробка зображень AI",
    link: "https://visionai.com",
  },
];

const Bubbles = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBubble, setSelectedBubble] = useState(null);
  const containerRef = useRef(null);

  const handleBubbleClick = (bubble) => {
    setSelectedBubble(bubble);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedBubble(null);
  };

  return (
    <div className={styles["bubblesContainer"]}>
      <div className={styles["bubblesGrid"]} ref={containerRef}>
        {bubblesData.map((bubble) => (
          <div
            key={bubble.id}
            className={styles["bubble"]}
            onClick={() => handleBubbleClick(bubble)}
          >
            <div className={styles["bubbleCircle"]}></div>
            <span className={styles["bubbleTitle"]}>{bubble.title}</span>
          </div>
        ))}
      </div>

      {modalOpen && selectedBubble && (
        <BubblesModal
          isOpen={modalOpen}
          content={selectedBubble}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Bubbles;
