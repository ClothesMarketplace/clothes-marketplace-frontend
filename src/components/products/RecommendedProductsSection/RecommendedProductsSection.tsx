import React from "react";
import css from "./RecommendedProductsSection.module.css";
import ProductsList from "../ProductsList/ProductsList";

const RecommendedProductsSection: React.FC = () => {
  return (
    <section className={css.recommendedProductsSection}>
      <h2 className={css.title}>Recommended products</h2>
      <ProductsList />
    </section>
  );
};

export default RecommendedProductsSection;
