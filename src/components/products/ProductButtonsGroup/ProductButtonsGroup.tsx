import Button from "../../buttons/Button/Button";
import css from "./ProductButtonsGroup.module.css";

const ProductButtonsGroup: React.FC = () => {
  return (
    <div className={css.buttonGroup}>
      <Button variant="primary" text="Купити"></Button>
      <Button variant="secondary" text="Написати продавцю"></Button>
      <Button variant="secondary" text="Зробити пропозицію"></Button>
    </div>
  );
};

export default ProductButtonsGroup;
