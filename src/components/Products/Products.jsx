import React, { useState } from "react";
import NavigationButton from "../NavigationButton/NavigationButton";
import CategoryItem from "../CategoryItem/CategoryItem";
import SubCategoryItem from "../SubCategoryItem/SubCategoryItem";
import styles from "./Products.module.css";

const productCategories = [
  {
    category: "Вивчення мови",
    items: [
      {
        title: "English Mentor Pro",
        imgSrc: "../ImagesComponents/imagesOfChats/imgEngChat.jpg",
        link: "https://chatgpt.com/g/g-yBu1VbKuu-english-mentor-pro",
        description: "Розмовна практика та підготовка до іспитів.",
      },
      {
        title: "Maestro Español",
        imgSrc: "../ImagesComponents/imagesOfChats/imgSpainChat.jpg",
        link: "https://chatgpt.com/g/g-W6zEnyvaH-maestro-espanol",
        description: "Практика іспанської та культурна інтеграція.",
      },
    ],
  },
  // Додаємо інші категорії...
];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (index) => {
    setSelectedCategory(selectedCategory === index ? null : index);
  };

  return (
    <section className={styles.products}>
      <div>
        <h2 className={styles.title}>Наші Продукти</h2>
        <p className={styles.subtitle}>
          Оберіть одну з категорій, щоб дізнатися більше
        </p>
        <ul className={styles.categoryList}>
          {productCategories.map((category, index) => (
            <CategoryItem
              key={index}
              category={category}
              index={index}
              isActive={selectedCategory === index}
              onClick={handleCategoryClick}
            />
          ))}
        </ul>
      </div>

      <NavigationButton direction="left" to="/about" />
      <NavigationButton direction="right" to="/contacts" />
    </section>
  );
}

export default Products;
