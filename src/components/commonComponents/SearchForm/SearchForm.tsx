import { useState } from "react";
import css from "./SearchForm.module.css";
import sprite from "../../../assets/icons/sprite.svg";
import { useAppSelector } from "../../../redux/store";
import { selectCategories } from "../../../redux/categories/selectors";
import clsx from "clsx";

const SearchForm: React.FC = () => {
  const categories = useAppSelector(selectCategories);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [checkedCategory, setCheckedCategory] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("Search query submitted:", searchQuery);
    console.log("Checked category:", checkedCategory);

    setSearchQuery("");
    setCheckedCategory("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input
        className={css.searchInput}
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
      />
      {categories && Array.isArray(categories) && (
        <ul className={css.categoriesList}>
          {categories.map((category) => (
            <li className={css.categoryItem} key={category.id}>
              <input
                className={clsx(css.categoryCheckbox, "visually-hidden")}
                type="checkbox"
                id={category.id}
                value={category.name}
                checked={checkedCategory === category.name}
                onChange={(e) => {
                  setCheckedCategory(e.target.checked ? category.name : "");
                }}
              />
              <label className={css.categoryLabel} htmlFor={category.id}>
                {category.name}
              </label>
            </li>
          ))}
        </ul>
      )}
      <button className={css.searchBtn} type="submit">
        <svg className={css.searchIcon} width="16" height="16">
          <use href={`${sprite}#search`}></use>
        </svg>
      </button>
    </form>
  );
};

export default SearchForm;
