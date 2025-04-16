import { useState } from "react";
import Brands from "../Brands/Brands";
import SearchForm from "../../search/SearchForm/SearchForm";
import SearchWrapper from "../../search/SearchWrapper/SearchWrapper";
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
      </SearchWrapper>
    </section>
  );
};

export default HeroSection;
