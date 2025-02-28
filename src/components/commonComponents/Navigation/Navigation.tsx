import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import sprite from "../../../assets/icons/sprite.svg";

const Navigation = () => {
  return (
    <nav>
      <ul className={css.navList}>
        <li>
          <NavLink to="/favorites">
            <svg width="24" height="24">
              <use href={`${sprite}#hart`}></use>
            </svg>
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications">
            <svg width="24" height="24">
              <use href={`${sprite}#bell`}></use>
            </svg>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login">Увійти</NavLink>
        </li>
        <li>
          <NavLink to="/registration">Зареєструватися</NavLink>
        </li>
        <li>
          <NavLink to="/advert">Додати оголошення</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
