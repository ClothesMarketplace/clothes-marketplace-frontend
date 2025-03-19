import { Link } from "react-router-dom";
import { Product } from "../../../redux/products/types";
import { MutableRefObject } from "react";
import css from './ProductDetails.module.css'

interface ProductProps {
  product: Product;
  backLink: MutableRefObject<any>; 
}

const ProductDetails: React.FC<ProductProps> = ({ product, backLink }) => {
  const { title, description, price, rating, brand, images } = product;

  return (
    <div>
      <Link to={backLink.current ?? "/"}>
        Go back
      </Link>
      <ul className={css.list}>
        {images?.map((image, idx) => (
          <li key={idx}>
            <img className={css.img} src={image} alt={title} />
          </li>
        ))}
      </ul>
      <h2>{title}</h2>
      <h3>{brand}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <p>{rating}</p>
    </div>
  );
};

export default ProductDetails;
