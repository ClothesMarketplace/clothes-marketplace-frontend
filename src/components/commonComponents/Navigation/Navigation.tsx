import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import sprite from "../../../assets/icons/sprite.svg";
import { useTranslation } from "react-i18next";
import BurgerMenuButton from "../BurgerMenuButton/BurgerMenuButton";

const Navigation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.advert}>
          <NavLink className={css.advertLink} to="/advert">
            <p className={css.advertText}>{t("nav.sellNow")}</p>
            <div className={css.advertIconWrapper}>
              <svg className={css.advertIcon} width="14" height="14">
                <use href={`${sprite}#plus`}></use>
              </svg>
            </div>
          </NavLink>
        </li>
        <li className={css.notifications}>
          <NavLink className={css.notificationsLink} to="/notifications">
            <svg className={css.iconBell} width="24" height="24">
              <use href={`${sprite}#bell`}></use>
            </svg>
          </NavLink>
        </li>
        <li className={css.favorites}>
          <NavLink className={css.favoritesLink} to="/favorites">
            <svg className={css.iconHart} width="24" height="24">
              <use href={`${sprite}#hart`}></use>
            </svg>
          </NavLink>
        </li>
        <li className={css.menu}>
          <BurgerMenuButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
