import { useState, useEffect, useRef } from "react";
import BubblesModal from "./BubblesModal/BubblesModal";
import styles from "./Bubbles.module.css";

const bubblesData = [
  {
    id: 1,
    title: "ChatGPT",
    description: "Штучний інтелект для тексту",
    img: "/icons/chatgpt.png",
  },
  {
    id: 2,
    title: "Custom AI",
    description: "Налаштовані AI моделі",
    img: "/icons/custom-ai.png",
  },
  {
    id: 3,
    title: "Analytics",
    description: "AI аналітика та прогнозування",
    img: "/icons/analytics.png",
  },
  {
    id: 4,
    title: "Bot Builder",
    description: "Конструктор AI ботів",
    img: "/icons/bot-builder.png",
  },
  {
    id: 5,
    title: "AI Assistant",
    description: "Віртуальний помічник",
    img: "/icons/assistant.png",
  },
  {
    id: 6,
    title: "Smart AI",
    description: "Розумний AI аналізатор",
    img: "/icons/smart-ai.png",
  },
  {
    id: 7,
    title: "Deep Learning",
    description: "Глибоке навчання",
    img: "/icons/deep-learning.png",
  },
  {
    id: 8,
    title: "AI Vision",
    description: "Комп'ютерний зір",
    img: "/icons/ai-vision.png",
  },
  {
    id: 9,
    title: "AI Voice",
    description: "Розпізнавання мови",
    img: "/icons/ai-voice.png",
  },
  {
    id: 10,
    title: "AI Translator",
    description: "AI переклад тексту",
    img: "/icons/ai-translator.png",
  },
];

const MAX_SPEED = 0.4; // Обмежена швидкість руху
const MIN_RADIUS = 30; // Мінімальний розмір бульбашки
const MAX_RADIUS = 60; // Максимальний розмір бульбашки

const Bubbles = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBubble, setSelectedBubble] = useState(null);
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();

    const initialPositions = bubblesData.map(() => ({
      x: Math.random() * (container.width - MAX_RADIUS * 2 - 10) + 10,
      y: Math.random() * (container.height - MAX_RADIUS * 2 - 10) + 10,
      directionX: Math.random() > 0.5 ? 1 : -1,
      directionY: Math.random() > 0.5 ? 1 : -1,
      speed: Math.random() * MAX_SPEED + 0.2, // Плавна швидкість
      radius: Math.floor(
        Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS
      ), // Випадковий розмір
    }));

    setPositions(initialPositions);
  }, []);

  useEffect(() => {
    if (positions.length === 0) return;

    const moveBubbles = () => {
      setPositions((prevPositions) => {
        return prevPositions.map((pos, index) => {
          let newX = pos.x + pos.directionX * pos.speed;
          let newY = pos.y + pos.directionY * pos.speed;

          if (!containerRef.current) return pos;
          const container = containerRef.current.getBoundingClientRect();

          // Відбиття від меж контейнера
          if (newY <= 10 || newY >= container.height - pos.radius * 2 - 10)
            pos.directionY *= -1;
          if (newX <= 10 || newX >= container.width - pos.radius * 2 - 10)
            pos.directionX *= -1;

          // Відштовхування при зіткненні
          prevPositions.forEach((other, otherIndex) => {
            if (index !== otherIndex) {
              const dx = newX - other.x;
              const dy = newY - other.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < pos.radius * 2) {
                pos.directionX *= -1;
                pos.directionY *= -1;
              }
            }
          });

          return { ...pos, x: newX, y: newY };
        });
      });
    };

    const interval = setInterval(moveBubbles, 30);
    return () => clearInterval(interval);
  }, [positions]);

  const handleBubbleClick = (bubbleId) => {
    const bubble = bubblesData.find((b) => b.id === bubbleId);
    if (bubble) {
      setSelectedBubble(bubble);
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedBubble(null);
  };

  return (
    <div className={styles.bubblesContainer} ref={containerRef}>
      <ul className={styles.bubblesList}>
        {bubblesData.map((bubble, index) => (
          <li
            key={bubble.id}
            className={styles.bubble}
            onClick={() => handleBubbleClick(bubble.id)}
            style={{
              top: `${positions[index]?.y}px`,
              left: `${positions[index]?.x}px`,
              width: `${positions[index]?.radius * 2}px`,
              height: `${positions[index]?.radius * 2}px`,
            }}
          >
            <img src={bubble.img} alt={bubble.title} />
            <span>{bubble.title}</span>
          </li>
        ))}
      </ul>

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
