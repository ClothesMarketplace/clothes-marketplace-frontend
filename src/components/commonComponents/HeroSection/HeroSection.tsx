import Brands from "../Brands/Brands";
import SearchForm from "../SearchForm/SearchForm";
import SearchLastRequests from "../SearchLastRequests/SearchLastRequests";
import SearchWrapper from "../SearchWrapper/SearchWrapper";
import css from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <section className={css.heroSection}>
      <Brands />
      <SearchWrapper>
        <SearchForm />
        <SearchLastRequests />
      </SearchWrapper>
    </section>
  );
};

export default HeroSection;
