import CategoriesList from "../../categories/CategoriesList/CategoriesList";
import Brands from "../Brands/Brands";
import SearchForm from "../SearchForm/SearchForm";
import SearchWrapper from "../SearchWrapper/SearchWrapper";
import css from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <section className={css.heroSection}>
      <Brands />
      <SearchWrapper>
        <SearchForm />
        <CategoriesList />
      </SearchWrapper>
    </section>
  );
};

export default HeroSection;
