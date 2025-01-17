// src/data/productCategories.js
import imgEngChat from "";
import imgSpainChat from "../components/ImagesComponents/imagesOfChats/imgSpainChat.jpg";

const productCategories = [
  {
    category: "Вивчення мови",
    items: [
      {
        title: "English Mentor Pro",
        imgSrc: imgEngChat,
        link: "https://chatgpt.com/g/g-yBu1VbKuu-english-mentor-pro",
        description: "Розмовна практика та підготовка до іспитів.",
      },
      {
        title: "Maestro Español",
        imgSrc: imgSpainChat,
        link: "https://chatgpt.com/g/g-W6zEnyvaH-maestro-espanol",
        description: "Практика іспанської та культурна інтеграція.",
      },
    ],
  },
  // Додати більше категорій тут
];

export default productCategories;
