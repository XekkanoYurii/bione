import React from "react";
import styles from "./SubCategoryItem.module.css";

function SubCategoryItem({ item }) {
  return (
    <li className={styles.subCategoryItem}>
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <img
          src={item.imgSrc}
          alt={`${item.title} image`}
          className={styles.subCategoryImage}
        />
      </a>
      <div>
        <h4 className={styles.subCategoryTitle}>{item.title}</h4>
        <p className={styles.subCategoryDescription}>{item.description}</p>
      </div>
    </li>
  );
}

export default SubCategoryItem;
