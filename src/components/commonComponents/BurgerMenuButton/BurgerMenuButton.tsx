import css from "./BurgerMenuButton.module.css";
import sprite from "../../../assets/icons/sprite.svg";
import { useAppDispatch } from "../../../redux/store";
import { openMenu } from "../../../redux/additional/slice";

const BurgerMenuButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleMenuOpen = (): void => {
    dispatch(openMenu());
  };
  return (
    <button className={css.menuBtn} type="button" onClick={handleMenuOpen}>
      <svg className={css.menuIcon} width="44" height="44">
        <use href={`${sprite}#jam-menu`}></use>
      </svg>
    </button>
  );
};

export default BurgerMenuButton;
