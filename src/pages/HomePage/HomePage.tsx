import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectIsMenuOpen } from "../../redux/additional/slice";
import Menu from "../../components/commonComponents/Menu/Menu";
import HeroSection from "../../components/commonComponents/HeroSection/HeroSection";
import RecommendedProductsSection from "../../components/products/RecommendedProductsSection/RecommendedProductsSection";
import { useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";
import { getCategories } from "../../redux/categories/operations";
import { fetchProducts } from "../../redux/products/operations";

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(getCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  const isMenuOpen = useAppSelector(selectIsMenuOpen);

  return isMenuOpen ? (
    <div className="container">
      <Menu />
    </div>
  ) : (
    <div className="container">
      <HeroSection />
      <RecommendedProductsSection />
    </div>
  );
};

export default HomePage;
