// import { useLocation } from "react-router-dom"
import { Product } from "../../../redux/products/types";
import css from './ProductItem.module.css'

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  // const productLocation = useLocation();
  const { id, title, price, rating, brand, images} = product;

  return (
    <li className={css.item} id={String(id)}>
      <img className={css.img} src={images[0]} alt={title} />
      <h2>{title}</h2>
      <h3>{ brand}</h3>
      <p>{price}</p>
      <p>{ rating}</p>
    </li>
  )
}

export default ProductItem