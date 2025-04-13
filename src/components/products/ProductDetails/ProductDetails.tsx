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
  const { name, dollarPrice, urlMainImage, description } = product;

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
      <img className={css.img} src={urlMainImage ?? images.tShirt} alt={name} />
      <h2>{name}</h2>
      {/* <h3>{brand}</h3> */}
      <p>{description}</p>
      <p>{dollarPrice}</p>
      {/* <p>{rating}</p> */}
    </div>
  );
};

export default ProductDetails;


// {
//   "id": "8edff677-51e5-4223-85d1-8c88c1322690",
//   "name": "Jeans",
//   "description": "High-quality product for all occasions.",
//   "dollarPrice": 205,
//   "images": [],
//   "brandId": "5ab214fe-ac0c-4852-976e-a1e5b8b7766c",
//   "categoryId": "ab32aba9-40cf-4a46-a43b-114acfbdef4e",
//   "forWhomId": "118262ee-788e-4415-be9b-cdac82ab5815",
//   "colorId": "f6774c37-6fb3-4f26-a25e-3ba9a75a6995",
//   "productSizeId": "11988910-f91a-4025-9bd5-213a570e18e9",
//   "productConditionId": "f4f8f4b2-508f-4f38-b9b0-92033541aab3"
// }