import css from "./BurgerMenuButton.module.css";
import sprite from "../../../assets/icons/sprite.svg";
import { useNavigate } from "react-router-dom";

const BurgerMenuButton: React.FC = () => {
  const navigate = useNavigate();
  const handleMenuOpen = (): void => {
    navigate("/cabinet");
  };
  return (
    <button className={css.menuBtn} type="button" onClick={handleMenuOpen}>
      <svg className={css.menuIcon} width="24" height="24">
        <use href={`${sprite}#jam-menu`}></use>
      </svg>
    </button>
  );
};

export default BurgerMenuButton;
