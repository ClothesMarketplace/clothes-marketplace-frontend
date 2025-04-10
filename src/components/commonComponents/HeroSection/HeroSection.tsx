import { useState } from "react";
import Brands from "../Brands/Brands";
import SearchForm from "../SearchForm/SearchForm";
import SearchLastRequests from "../SearchLastRequests/SearchLastRequests";
import SearchWrapper from "../SearchWrapper/SearchWrapper";
import css from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSearchQueryChange = (query: string): void => {
    setSearchQuery(query);
  };

  return (
    <section className={css.heroSection}>
      <Brands />
      <SearchWrapper>
        <SearchForm
          searchQuery={searchQuery}
          handleSearchQueryChange={handleSearchQueryChange}
        />
        <SearchLastRequests handleSearchQueryChange={handleSearchQueryChange} />
      </SearchWrapper>
    </section>
  );
};

export default HeroSection;
