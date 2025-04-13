import { images } from "../../../assets/images/images";
import Carousel from "../Carousel/Carousel";
import css from "./Brands.module.css";

const Brands: React.FC = () => {
  return (
    <div className={css.brands}>
      <Carousel>
        <div className={css.imageContainer}>
          <img
            className={css.img}
            src={images.dolce_gabbana}
            alt="dolcegabbana"
            width={375}
          />
        </div>
        <div className={css.imageContainer}>
          <img className={css.img} src={images.boss} alt="Gucci" width={375} />
        </div>
        <div className={css.imageContainer}>
          <img
            className={css.img}
            src={images.gucci}
            alt="hugoboss"
            width={375}
          />
        </div>
        <div className={css.imageContainer}>
          <img
            className={css.img}
            src={images.lacoste}
            alt="lacoste"
            width={375}
          />
        </div>
        <div className={css.imageContainer}>
          <img className={css.img} src={images.zara} alt="zara" width={375} />
        </div>
      </Carousel>
    </div>
  );
};

export default Brands;
