import { useAppDispatch } from "../../redux/store";
import HeroSection from "../../components/commonComponents/HeroSection/HeroSection";
import RecommendedProductsSection from "../../components/products/RecommendedProductsSection/RecommendedProductsSection";
import { useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";
import { getCategories } from "../../redux/categories/operations";
import { fetchProducts } from "../../redux/products/operations";
import { getProductsQuery } from "../../helpers/fetchQuery";

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(getCategories());
    dispatch(fetchProducts(getProductsQuery({})));
  }, [dispatch]);

  return (
    <div className="container">
      <HeroSection />
      <RecommendedProductsSection />
    </div>
  );
};

export default HomePage;
