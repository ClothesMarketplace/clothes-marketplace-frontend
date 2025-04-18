import { useEffect, useRef, useState } from "react";
import css from "./SearchForm.module.css";
import sprite from "../../../assets/icons/sprite.svg";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { selectCategories } from "../../../redux/categories/selectors";
import clsx from "clsx";
import { fetchProducts } from "../../../redux/products/operations";
import { useNavigate } from "react-router-dom";
import { addLastSearchRequest } from "../../../redux/additional/slice";
import SearchLastRequests from "../SearchLastRequests/SearchLastRequests";

interface SearchFormProps {
  searchQuery: string;
  handleSearchQueryChange: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  searchQuery,
  handleSearchQueryChange,
}) => {
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const [checkedCategoryId, setCheckedCategoryId] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(
      fetchProducts(
        `SearchQuery=${searchQuery.trim()}&CategoryId=${checkedCategoryId}`
      )
    );
    navigate("/products");
    if (searchQuery.trim()) {
      dispatch(addLastSearchRequest(searchQuery.trim()));
    }
    handleSearchQueryChange("");
    setCheckedCategoryId("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchQueryChange(event.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [formRef]);

  return (
    <form
      ref={formRef}
      className={css.searchForm}
      onSubmit={handleSubmit}
      onClick={() => {
        setPopupOpen(true);
      }}
    >
      <div className={css.searchContainer}>
        <input
          className={css.searchInput}
          type="text"
          placeholder="Пошук предмета"
          value={searchQuery}
          onChange={handleChange}
        />
        <button className={css.searchBtn} type="submit">
          <span className={css.searchBtnText}>Шукати</span>
          <svg className={css.searchIcon} width="20" height="20">
            <use href={`${sprite}#search`}></use>
          </svg>
        </button>
      </div>
      {categories && Array.isArray(categories) && (
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
            <SearchLastRequests
              handleSearchQueryChange={handleSearchQueryChange}
            />
          </div>
        </div>
      )}
    </form>
  );
};

export default SearchForm;
