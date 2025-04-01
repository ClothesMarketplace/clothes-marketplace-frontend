import css from "./BurgerMenuButton.module.css";
import sprite from "../../../assets/icons/sprite.svg";

const BurgerMenuButton: React.FC = () => {
  return (
    <button className={css.menuBtn} type="button">
      <svg className={css.menuIcon} width="44" height="44">
        <use href={`${sprite}#jam-menu`}></use>
      </svg>
    </button>
  );
};

export default BurgerMenuButton;
