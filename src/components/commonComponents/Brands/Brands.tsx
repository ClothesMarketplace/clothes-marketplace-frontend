import { brandImages } from "../../../assets/images/images";
import Carousel from "../Carousel/Carousel";
import css from "./Brands.module.css";

const Brands: React.FC = () => {
  return (
    <Carousel>
      <div className={css.imageContainer}>
        <img
          className={css.img}
          src={brandImages.dolce_gabbana}
          alt="dolcegabbana"
          width={375}
        />
      </div>
      <div className={css.imageContainer}>
        <img
          className={css.img}
          src={brandImages.boss}
          alt="Gucci"
          width={375}
        />
      </div>
      <div className={css.imageContainer}>
        <img
          className={css.img}
          src={brandImages.gucci}
          alt="hugoboss"
          width={375}
        />
      </div>
      <div className={css.imageContainer}>
        <img
          className={css.img}
          src={brandImages.lacoste}
          alt="lacoste"
          width={375}
        />
      </div>
      <div className={css.imageContainer}>
        <img
          className={css.img}
          src={brandImages.zara}
          alt="zara"
          width={375}
        />
      </div>
    </Carousel>
  );
};

export default Brands;
