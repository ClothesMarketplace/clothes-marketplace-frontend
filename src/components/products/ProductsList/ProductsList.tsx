import { useAppSelector } from "../../../redux/store"
import { selectProducts, selectProductsLoading, selectProductsError } from '../../../redux/products/selectors'
import ProductItem from '../ProductItem/ProductItem'
import Loader from "../../commonComponents/Loader/Loader";
import css from './ProductsList.module.css'


interface ProductsListProps {
  limit?: number;
}


const ProductsList: React.FC<ProductsListProps> = ({limit}) => {
  const products = useAppSelector(selectProducts);
  const error = useAppSelector(selectProductsError);
  const isLoading = useAppSelector(selectProductsLoading);

  const displayedProducts = limit ? products.slice(0, limit) : products;

  console.log("Products:", products);

  return (
    <div>
        {isLoading && !error && <Loader />}
      <ul className={css.list}>
        {displayedProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default ProductsList