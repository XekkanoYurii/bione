import { Link } from "react-router-dom";
import styles from "./BlockList.module.css";

function BlockList() {
  const blocks = [
    {
      title: "Перше користування чатом GPT",
      path: "/about/first-use",
      image: "./BlockImg/1.jpg",
    },
    {
      title: "Наша екосистема",
      path: "/about/ecosystem",
      image: "./BlockImg/2.jpg",
    },
    {
      title: "Криптовалюти",
      path: "/about/crypto",
      image: "./BlockImg/3.jpg",
    },
    {
      title: "Костомні чати",
      path: "/about/custom-gpt",
      image: "./BlockImg/4.jpg",
    },
    {
      title: "Анонімний режим",
      path: "/about/anonimus",
      image: "./BlockImg/5.jpg",
    },
    {
      title: "Крипто монети",
      path: "/about/coins",
      image: "./BlockImg/6.jpg",
    },
    {
      title: "Чат",
      path: "/about/chat-gpt",
      image: "./BlockImg/7.jpg",
    },
    {
      title: "Обміники",
      path: "/about/change",
      image: "./BlockImg/8.jpg",
    },
  ];

  return (
    <div className={styles["block-list-container"]}>
      <h2 className={["title"]}>Розділи</h2>
      <ul className={styles["block-list"]}>
        {blocks.map((block, index) => (
          <li key={index} className={styles["block-item"]}>
            {/* Робимо весь блок клікабельним */}
            <Link to={block.path} className={styles["block-link"]}>
              <img
                src={block.image}
                alt={block.title}
                className={styles["block-image"]}
              />
              <span className={styles["block-title"]}>{block.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlockList;
