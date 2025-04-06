import { useState } from "react";
import css from "./SearchForm.module.css";
import sprite from "../../../assets/icons/sprite.svg";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { selectCategories } from "../../../redux/categories/selectors";
import clsx from "clsx";
import { fetchProducts } from "../../../redux/products/operations";
import { useNavigate } from "react-router-dom";

const SearchForm: React.FC = () => {
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [checkedCategoryId, setCheckedCategoryId] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(
      fetchProducts(
        `SearchQuery=${searchQuery}&CategoryId=${checkedCategoryId}`
      )
    );
    navigate("/products");
    setSearchQuery("");
    setCheckedCategoryId("");
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
                value={category.id}
                checked={checkedCategoryId === category.id}
                onChange={(e) => {
                  setCheckedCategoryId(e.target.checked ? category.id : "");
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
