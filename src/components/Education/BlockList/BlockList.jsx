import { Link } from "react-router-dom";
import styles from "./BlockList.module.css";

function BlockList() {
  const blocks = [
    {
      title: "Перше користування",
      path: "/education/first-use", // 🔹 Було "/about/first-use"
      image: "./BlockImg/1.jpg",
    },
    {
      title: "Наша екосистема",
      path: "/education/ecosystem",
      image: "./BlockImg/2.jpg",
    },
    {
      title: "Криптовалюти",
      path: "/education/crypto",
      image: "./BlockImg/3.jpg",
    },
    {
      title: "Костомні чати",
      path: "/education/custom-gpt",
      image: "./BlockImg/4.jpg",
    },
    {
      title: "Анонімний режим",
      path: "/education/anonimus",
      image: "./BlockImg/5.jpg",
    },
    {
      title: "Крипто монети",
      path: "/education/coins",
      image: "./BlockImg/6.jpg",
    },
    {
      title: "Чат",
      path: "/education/chat-gpt",
      image: "./BlockImg/7.jpg",
    },
    {
      title: "Обміники",
      path: "/education/change",
      image: "./BlockImg/8.jpg",
    },
  ];

  return (
    <div className={styles["block-list-container"]}>
      <h2 className={styles["title"]}>Розділи</h2>
      <ul className={styles["block-list"]}>
        {blocks.map((block, index) => (
          <li key={index} className={styles["block-item"]}>
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
