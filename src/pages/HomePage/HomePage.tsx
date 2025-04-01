import { useEffect } from "react";
import ProductsList from "../../components/products/ProductsList/ProductsList";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { fetchProducts } from "../../redux/products/operations";
import { selectIsMenuOpen } from "../../redux/additional/slice";
import Menu from "../../components/commonComponents/Menu/Menu";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const isMenuOpen = useAppSelector(selectIsMenuOpen);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return isMenuOpen ? (
    <div className="container">
      <Menu />
    </div>
  ) : (
    <div className="container">
      <h1>HomePage</h1>
      <br />
      <h2>Рекомендовані товари</h2>
      <ProductsList limit={6} />
    </div>
  );
};

export default HomePage;
