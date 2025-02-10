import styles from "./RunningList.module.css";

const RunningList = () => {
  const items = [
    "🚀 Штучний Інтелект 🚀",
    "🤖 Кастомні чати 🤖",
    "⚡ Оптимізація процесів ⚡",
    "📊 Аналіз інформації 📊",
    "🎯 Індивідуальний підхід 🎯",
    "🔧 Персональне налаштування 🔧",
  ];

  return (
    <div className={styles.runningContainer}>
      <div className={styles.marquee}>
        <ul className={styles.runningList}>
          {items.concat(items).map((item, index) => (
            <li key={index}>{item}</li> // Повторний список для безшовного ефекту
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RunningList;
