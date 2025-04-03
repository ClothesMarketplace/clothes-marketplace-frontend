import { selectCategories } from "../../../redux/categories/selectors";
import { useAppSelector } from "../../../redux/store";
import css from "./CategoriesList.module.css";
import React from "react";

const CategoriesList: React.FC = () => {
  const categories = useAppSelector(selectCategories);

  return (
    categories &&
    Array.isArray(categories) && (
      <ul className={css.categoriesList}>
        {categories.map((category) => (
          <li className={css.categoryItem} key={category.id}>
            <div className={css.category} role="button">
              <p className={css.categoryText}>{category.name}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  );
};

export default CategoriesList;
