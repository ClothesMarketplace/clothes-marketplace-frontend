import { useTranslation } from "react-i18next";
import { closeMenu } from "../../../redux/additional/slice";
import { useAppDispatch } from "../../../redux/store";
import AuthButtonsGroup from "../../auth/AuthButtonsGroup/AuthButtonsGroup";
import CategoriesList from "../../categories/CategoriesList/CategoriesList";
import CloseButton from "../CloseButton/CloseButton";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import css from "./Menu.module.css";

const Menu: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleCloseMenu = () => {
    dispatch(closeMenu());
  };

  const { t } = useTranslation();

  return (
    <div className={css.menu}>
      <CloseButton descr="close menu" externalHandleClick={handleCloseMenu} />
      <AuthButtonsGroup />
      <h2 className={css.menuCategories}>{t("menu.categories")}</h2>
      <CategoriesList />
      <h2 className={css.menuBrands}>{t("menu.famousBrands")}</h2>
      <CategoriesList />
      <h2 className={css.menuLanguage}>{t("menu.language")}</h2>
      <h2 className={css.menuCategories}>Навігація</h2>
      <ul className={css.menuList}>
        <li>
          <p>Довідковий центр.</p>
        </li>
        <li>
          <p>Умови використання.</p>
        </li>
        <li>
          <p>Політику конфіденційності.</p>
        </li>
        <li>
          <p>Контакти.</p>
        </li>
        <li>
          <p>Соціальні мережі</p>
        </li>
      </ul>
      <LanguageSelector />
    </div>
  );
};

export default Menu;
