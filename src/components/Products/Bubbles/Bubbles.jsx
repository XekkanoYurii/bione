import { useState, useEffect, useRef } from "react";
import BubblesModal from "./BubblesModal/BubblesModal";
import styles from "./Bubbles.module.css";

const bubblesData = [
  {
    id: 1,
    title: "ChatGPT",
    description: "Штучний інтелект для тексту",
    img: "/icons/chatgpt.png",
    prompt1: "Напиши мені короткий пост про AI",
    prompt2: "Як використовувати ChatGPT для навчання?",
    link: "https://chat.openai.com",
  },
  {
    id: 2,
    title: "Custom AI",
    description: "Налаштовані AI моделі",
    img: "/icons/custom-ai.png",
    prompt1: "Створи AI, який допоможе у плануванні подорожей",
    prompt2: "Як навчити AI відповідати на питання клієнтів?",
    link: "https://customai.com",
  },
  {
    id: 3,
    title: "Analytics",
    description: "AI аналітика та прогнозування",
    img: "/icons/analytics.png",
    prompt1: "Які AI-інструменти краще для аналітики?",
    prompt2: "Як аналізувати великі дані за допомогою AI?",
    link: "https://analyticsai.com",
  },
  {
    id: 4,
    title: "Bot Builder",
    description: "Конструктор AI ботів",
    img: "/icons/bot-builder.png",
    prompt1: "Як створити бота для підтримки клієнтів?",
    prompt2: "Які фреймворки найкращі для AI ботів?",
    link: "https://botbuilder.com",
  },
];

// Конфігурація руху
const MAX_SPEED = 1;
const MIN_RADIUS = 30;
const MAX_RADIUS = 60;
const COLLISION_DISTANCE = MAX_RADIUS * 1.5;

const Bubbles = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBubble, setSelectedBubble] = useState(null);
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();

    const initialPositions = bubblesData.map(() => ({
      x: Math.random() * (container.width - MAX_RADIUS * 2) + MAX_RADIUS,
      y: Math.random() * (container.height - MAX_RADIUS * 2) + MAX_RADIUS,
      directionX: Math.random() > 0.5 ? 1 : -1,
      directionY: Math.random() > 0.5 ? 1 : -1,
      speed: Math.random() * (MAX_SPEED - 0.2) + 0.2,
      radius: Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS,
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

          // Відбиття від стінок контейнера
          if (newY <= 0 || newY + pos.radius * 2 >= container.height)
            pos.directionY *= -1;
          if (newX <= 0 || newX + pos.radius * 2 >= container.width)
            pos.directionX *= -1;

          // Відштовхування між бульбашками
          prevPositions.forEach((other, otherIndex) => {
            if (index !== otherIndex) {
              const dx = newX - other.x;
              const dy = newY - other.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < COLLISION_DISTANCE) {
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
