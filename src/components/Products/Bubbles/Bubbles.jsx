import { useState, useEffect, useRef } from "react";
import BubblesModal from "./BubblesModal/BubblesModal";
import styles from "./Bubbles.module.css";

const bubblesData = [
  {
    id: 1,
    title: "ChatGPT",
    description: "Штучний інтелект для тексту",
    prompt1: "Напиши короткий пост про AI",
    prompt2: "Як використовувати ChatGPT для навчання?",
    link: "https://chat.openai.com",
  },
  {
    id: 2,
    title: "Custom AI",
    description: "Налаштовані AI моделі",
    prompt1: "Створи AI для подорожей",
    prompt2: "Як навчити AI відповідати на питання?",
    link: "https://customai.com",
  },
  {
    id: 3,
    title: "Analytics",
    description: "AI аналітика та прогнозування",
    prompt1: "Які AI-інструменти для аналітики?",
    prompt2: "Як аналізувати великі дані за допомогою AI?",
    link: "https://analyticsai.com",
  },
  {
    id: 4,
    title: "Bot Builder",
    description: "Конструктор AI ботів",
    prompt1: "Як створити AI-бота для підтримки?",
    prompt2: "Які фреймворки кращі для AI ботів?",
    link: "https://botbuilder.com",
  },
];

const BUBBLE_SIZE = 70; // Усі бульбашки одного розміру
const MAX_SPEED = 0.5;
const COLLISION_DISTANCE = BUBBLE_SIZE * 1;

const Bubbles = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBubble, setSelectedBubble] = useState(null);
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current.getBoundingClientRect();

    const initialPositions = bubblesData.map(() => ({
      x: Math.random() * (container.width - BUBBLE_SIZE) + BUBBLE_SIZE / 2,
      y: Math.random() * (container.height - BUBBLE_SIZE) + BUBBLE_SIZE / 2,
      directionX: Math.random() > 0.5 ? 1 : -1,
      directionY: Math.random() > 0.5 ? 1 : -1,
      speed: Math.random() * (MAX_SPEED - 0.2) + 0.2,
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

          if (newY <= 0 || newY + BUBBLE_SIZE >= container.height) {
            pos.directionY *= -1;
            newY = Math.max(0, Math.min(container.height - BUBBLE_SIZE, newY));
          }
          if (newX <= 0 || newX + BUBBLE_SIZE >= container.width) {
            pos.directionX *= -1;
            newX = Math.max(0, Math.min(container.width - BUBBLE_SIZE, newX));
          }

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
    <div className={styles.blackFon}>
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
                width: `${BUBBLE_SIZE}px`,
                height: `${BUBBLE_SIZE}px`,
              }}
            >
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
    </div>
  );
};

export default Bubbles;
