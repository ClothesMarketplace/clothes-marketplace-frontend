import { Link } from "react-router-dom";
import { Product } from "../../../redux/products/types";
import { MutableRefObject } from "react";
import css from "./ProductDetails.module.css";
import { images } from "../../../assets/images/images";

interface ProductProps {
  product: Product;
  backLink: MutableRefObject<any>;
}

const ProductDetails: React.FC<ProductProps> = ({ product, backLink }) => {
  const { name, dollarPrice, urlMainImage } = product;

  return (
    <div>
      <Link to={backLink.current ?? "/"}>Go back</Link>
      {/* <ul className={css.list}>
        {images?.map((image, idx) => (
          <li key={idx}>
            <img className={css.img} src={image} alt={title} />
          </li>
        ))}
      </ul> */}
      <img className={css.img} src={urlMainImage || images.tShirt} alt={name} />
      <h2>{name}</h2>
      {/* <h3>{brand}</h3> */}
      {/* <p>{description}</p> */}
      <p>{dollarPrice}</p>
      {/* <p>{rating}</p> */}
    </div>
  );
};

export default ProductDetails;
