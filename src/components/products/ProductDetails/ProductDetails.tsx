import { Product } from "../../../redux/products/types";


interface ProductProps {
  product: Product;
}

const ProductDetails: React.FC<ProductProps> = ({ product }) => {
  const { title, description, price, rating, brand, images } = product;
  return (
    <div>
      <img src={images[0]} alt={title} />
      <h2>{title}</h2>
      <h3>{brand}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <p>{rating}</p>
    </div>
  );
};

export default ProductDetails;
