import { Link } from "react-router-dom";
import { Product } from "../../../redux/products/types";
import { MutableRefObject } from "react";
import css from "./ProductDetails.module.css";
import { images as myImages } from "../../../assets/images/images";
import ButtonFavorite from "../../buttons/ButtonFavorite/ButtonFavorite";
import ProductButtonsGroup from "../ProductButtonsGroup/ProductButtonsGroup";
import { useAppSelector } from "../../../redux/store";
import {
  selectBrands,
  selectColors,
  selectProductConditions,
  selectProductSizes,
} from "../../../redux/dictionaries/selectors";
// import Loader from "../../commonComponents/Loader/Loader";

interface ProductProps {
  product: Product;
  backLink: MutableRefObject<any>;
}

const ProductDetails: React.FC<ProductProps> = ({ product, backLink }) => {
  const {
    id,
    name,
    images,
    dollarPrice,
    urlMainImage,
    description,
    brandId,
    categoryId,
    forWhomId,
    colorId,
    productSizeId,
    productConditionId,
    views,
    interested,
    offers,
  } = product;
  const defaultImages = new Array(7).fill(myImages.tShirt);
  const imagesToRender = images && images.length > 0 ? images : defaultImages;

  const brands = useAppSelector(selectBrands);
  const colors = useAppSelector(selectColors);
  const sizes = useAppSelector(selectProductSizes);
  const conditions = useAppSelector(selectProductConditions);

  // if (
  //   brands.length === 0 ||
  //   colors.length === 0 ||
  //   sizes.length === 0 ||
  //   conditions.length === 0
  // ) {
  //   return <Loader />;
  // }

  const size = sizes.find((s) => s.id === productSizeId)?.name ?? "—";
  const condition =
    conditions.find((c) => c.id === productConditionId)?.name ?? "—";
  const brand = brands.find((b) => b.id === brandId)?.name ?? "—";
  const color = colors.find((c) => c.id === colorId)?.name ?? "—";

  const characteristics: Record<string, string> = {
    Розмір: size,
    Стан: condition,
    Бренд: brand,
    Колір: color,
    Перегляди: String(views ?? 0),
    Зацікавлений: String(interested ?? 0),
    Пропозицій: String(offers ?? 0),
  };

  return (
    <div>
      <Link to={backLink.current ?? "/"}>Go back</Link>
      <div>
        <ul className={css.list}>
          {imagesToRender?.map((image, idx) => (
            <li key={idx}>
              <img
                className={css.img}
                src={image ?? myImages.tShirt}
                alt={name}
              />
            </li>
          ))}
        </ul>
        <ButtonFavorite productId={id} />
        <div>
          <h2>{name}</h2>
          {/* <h3>{brand}</h3> */}
          <p>{description}</p>
          <ul>
            {Object.entries(characteristics).map(([key, value]) => (
              <li key={key}>
                <p>
                  {key}: <span>{value}</span>
                </p>
              </li>
            ))}
          </ul>
          <p>{dollarPrice}</p>
          {/* <p>{rating}</p> */}
        </div>
        <ProductButtonsGroup />
      </div>
    </div>
  );
};

export default ProductDetails;

// {
//   "id": "9b02abca-0d60-4127-89d0-06e05a1e7bd2",
//   "name": "Backpack",
//   "description": "High-quality product for all occasions.",
//   "dollarPrice": 66,
//   "images": [],
//   "brandId": "2f47893f-c7a7-4e45-b873-b140ca66661a",
//   "categoryId": "68c5d057-0902-4d19-8304-7f69510417aa",
//   "forWhomId": "4dd38fe2-fa02-45d8-8864-350d458a613d",
//   "colorId": "a80e7596-6994-4232-8c7e-ada9b3a98480",
//   "productSizeId": "32455fc0-e34c-45b4-b0cb-ed608488a831",
//   "productConditionId": "32971903-985c-488f-85fa-8eec94ec4e33"
// }
