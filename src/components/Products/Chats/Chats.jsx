import { useState } from "react";
import styles from "./Chats.module.css";
import chatsData from "./chatsData.json";
import ChatsModal from "./ChatsModal/ChatsModal";

const categories = [
  "всі",
  "освіта",
  "фінанси",
  "інструменти",
  "АІ-агенти",
  "ігри",
  "інше",
];

const Chats = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [activeCategory, setActiveCategory] = useState("всі");

  const sortedChats = [...chatsData].sort((a, b) => {
    if (activeCategory === "всі") return 0;
    if (a.category === activeCategory && b.category !== activeCategory)
      return -1;
    if (a.category !== activeCategory && b.category === activeCategory)
      return 1;
    return 0;
  });

  return (
    <div className={styles.chatsContainer}>
      <div className={styles.categoryBar}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.categoryButton} ${
              activeCategory === cat ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.chatsGrid}>
        {sortedChats.map((chat) => (
          <div
            key={chat.id}
            className={styles.chat}
            onClick={() => {
              setSelectedChat(chat);
              setModalOpen(true);
            }}
          >
            <div className={styles.chatCircle}></div>
            <span className={styles.chatTitle}>{chat.title}</span>
          </div>
        ))}
      </div>

      {modalOpen && selectedChat && (
        <ChatsModal
          content={selectedChat}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Chats;
