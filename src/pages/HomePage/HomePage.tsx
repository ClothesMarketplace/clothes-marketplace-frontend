import { useEffect } from "react";
import ProductsList from "../../components/products/ProductsList/ProductsList";
import { useAppDispatch } from "../../redux/store";
import { fetchProducts } from "../../redux/products/operations";

const HomePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>HomePage</h1>
      <br />
      <h2>Рекомендовані товари</h2>
      <ProductsList limit={6} />
    </div>
  );
};

export default HomePage;
