import React from "react";
import css from "./SearchInput.module.css";
import sprite from "../../../assets/icons/sprite.svg";

interface InputProps {
  searchQuery: string;
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const SearchInput: React.FC<InputProps> = ({
  searchQuery,
  handleChange,
}: InputProps) => {
  return (
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
  );
};

export default SearchInput;
