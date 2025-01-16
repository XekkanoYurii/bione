import React, { useState } from "react";
import SubCategoryItem from "../SubCategoryItem/SubCategoryItem";
import styles from "./CategoryItem.module.css";

function CategoryItem({ category, index, isActive, onClick }) {
  return (
    <li
      className={`${styles.categoryItem} ${isActive ? styles.active : ""}`}
      onClick={() => onClick(index)}
    >
      <h3 className={styles.categoryTitle}>{category.category}</h3>
      {isActive && (
        <ul className={styles.subCategoryList}>
          {category.items.map((item, subIndex) => (
            <SubCategoryItem key={subIndex} item={item} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default CategoryItem;
