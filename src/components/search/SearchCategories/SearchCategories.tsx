import React from "react";
import SearchLastRequests from "../SearchLastRequests/SearchLastRequests";
import clsx from "clsx";
import css from "./SearchCategories.module.css";
import { useAppSelector } from "../../../redux/store";
import { selectCategories } from "../../../redux/categories/selectors";

interface SearchCategoriesProps {
  popupOpen: boolean;
  checkedCategoryId: string;
  handleCheckboxChange(value: string): void;
  handleSearchQueryChange: (query: string) => void;
}

const SearchCategories: React.FC<SearchCategoriesProps> = ({
  popupOpen,
  checkedCategoryId,
  handleCheckboxChange,
  handleSearchQueryChange,
}: SearchCategoriesProps) => {
  const categories = useAppSelector(selectCategories);

  return (
    categories &&
    Array.isArray(categories) && (
      <div className={clsx(css.categoriesContainer, popupOpen && css.open)}>
        <div className={css.categoriesWrapper}>
          <ul className={css.categoriesList}>
            {categories.map((category) => (
              <li className={css.categoryItem} key={category.id}>
                <input
                  className={clsx(css.categoryCheckbox, "visually-hidden")}
                  type="checkbox"
                  id={category.id}
                  value={category.id}
                  checked={checkedCategoryId === category.id}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleCheckboxChange(e.target.checked ? category.id : "");
                  }}
                />
                <label className={css.categoryLabel} htmlFor={category.id}>
                  {category.name}
                </label>
              </li>
            ))}
          </ul>
          <SearchLastRequests
            handleSearchQueryChange={handleSearchQueryChange}
          />
        </div>
      </div>
    )
  );
};

export default SearchCategories;
