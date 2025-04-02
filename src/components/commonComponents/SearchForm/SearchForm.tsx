import { useState } from "react";
import css from "./SearchForm.module.css";

const SearchForm: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Search query submitted:", searchQuery);
    setSearchQuery("");
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
      <button className={css.searchBtn} type="submit">
        S
      </button>
    </form>
  );
};

export default SearchForm;
