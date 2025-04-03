import { Link, useLocation } from "react-router-dom";
import { Product } from "../../../redux/products/types";
import css from "./ProductItem.module.css";
import { images } from "../../../assets/images/images";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const productLocation = useLocation();
  const { id, name, dollarPrice, urlMainImage } = product;

  return (
    <li className={css.item} id={id}>
      <Link to={`/product/${id}`} state={productLocation}>
        <img
          className={css.img}
          src={urlMainImage || images.tShirt}
          alt={name}
          loading="lazy"
        />
      </Link>
      <h2>{name}</h2>
      <p>{dollarPrice}</p>
    </li>
  );
};

export default ProductItem;
