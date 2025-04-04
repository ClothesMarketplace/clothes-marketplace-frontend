import { useAppSelector } from "../../../redux/store";
import {
  selectProducts,
  selectProductsLoading,
  selectProductsError,
} from "../../../redux/products/selectors";
import ProductItem from "../ProductItem/ProductItem";
import Loader from "../../commonComponents/Loader/Loader";
import css from "./ProductsList.module.css";

interface ProductsListProps {
  limit?: number;
}

const ProductsList: React.FC<ProductsListProps> = () => {
  const products = useAppSelector(selectProducts);
  const error = useAppSelector(selectProductsError);
  const isLoading = useAppSelector(selectProductsLoading);

  return (
    <div>
      {isLoading && !error && <Loader />}
      {error && <p>Something went wrong</p>}
      <ul className={css.list}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
