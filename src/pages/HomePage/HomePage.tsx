import { useAppDispatch } from "../../redux/store";
import HeroSection from "../../components/commonComponents/HeroSection/HeroSection";
import RecommendedProductsSection from "../../components/products/RecommendedProductsSection/RecommendedProductsSection";
import { useEffect, useState } from "react";
import { refreshUser } from "../../redux/auth/operations";
import { getCategories } from "../../redux/categories/operations";
import { fetchProducts } from "../../redux/products/operations";
import { getProductsQuery } from "../../helpers/fetchQuery";
import ScrollToTopButton from "../../components/buttons/ScrollToTopButton/ScrollToTopButton";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const [viewportHeight, setViewportHeight] = useState<number>(
    window.innerHeight
  );
  const [scrolledFromTop, setScrolledFromTop] = useState<number>(
    window.scrollY
  );

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledFromTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(getCategories());
    dispatch(fetchProducts(getProductsQuery({})));
  }, [dispatch]);

  return (
    <div className="container">
      <HeroSection />
      <RecommendedProductsSection />
      {scrolledFromTop > viewportHeight && <ScrollToTopButton />}
    </div>
  );
};

export default HomePage;
