import { useEffect, useRef, useState } from "react";
import css from "./SearchForm.module.css";
import { useAppDispatch } from "../../../redux/store";
import { fetchProducts } from "../../../redux/products/operations";
import { useNavigate } from "react-router-dom";
import { addLastSearchRequest } from "../../../redux/additional/slice";
import SearchInput from "../SearchInput/SearchInput";
import SearchCategories from "../SearchCategories/SearchCategories";
import { getProductsQuery } from "../../../helpers/fetchQuery";

interface SearchFormProps {
  searchQuery: string;
  handleSearchQueryChange: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  searchQuery,
  handleSearchQueryChange,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [checkedCategoryId, setCheckedCategoryId] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const query = {
      SearchQuery: searchQuery.trim(),
      CategoryId: checkedCategoryId,
    };
    const param = getProductsQuery(query);
    dispatch(fetchProducts(param));
    navigate("/products");
    if (searchQuery.trim()) {
      dispatch(addLastSearchRequest(searchQuery.trim()));
    }
    handleSearchQueryChange("");
    setCheckedCategoryId("");
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    handleSearchQueryChange(event.target.value);
  };

  const handleCheckboxChange = (value: string): void => {
    setCheckedCategoryId(value);
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
      <SearchInput searchQuery={searchQuery} handleChange={handleInputChange} />
      <SearchCategories
        popupOpen={popupOpen}
        checkedCategoryId={checkedCategoryId}
        handleCheckboxChange={handleCheckboxChange}
        handleSearchQueryChange={handleSearchQueryChange}
      />
    </form>
  );
};

export default SearchForm;
