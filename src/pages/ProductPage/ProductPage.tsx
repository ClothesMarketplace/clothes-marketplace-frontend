import { useEffect, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { fetchProductById } from "../../redux/products/operations";
import {
  selectProductsError,
  selectProductsLoading,
  selectSelectedProduct,
} from "../../redux/products/selectors";
import ProductDetails from "../../components/products/ProductDetails/ProductDetails";
import Loader from "../../components/commonComponents/Loader/Loader";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  // console.log(productId);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/");
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectSelectedProduct);
  const error = useAppSelector(selectProductsError);
  const isLoading = useAppSelector(selectProductsLoading);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(Number(productId)));
    }
  }, [productId, dispatch]);

  return (
    <main className="container">
      <h2>ProductPage</h2>
      {isLoading && !error && <Loader />}
      {product && <ProductDetails product={product} backLink={backLink} />}
    </main>
  );
};

export default ProductPage;
