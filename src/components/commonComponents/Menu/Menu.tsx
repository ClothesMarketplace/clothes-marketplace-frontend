import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../redux/store";
import AuthButtonsGroup from "../../auth/AuthButtonsGroup/AuthButtonsGroup";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import css from "./Menu.module.css";
import { selectIsMenuOpen } from "../../../redux/additional/slice";
import clsx from "clsx";

const Menu: React.FC = () => {
  const isMenuOpen = useAppSelector(selectIsMenuOpen);

  const { t } = useTranslation();

  return (
    <div className={clsx(css.menu, isMenuOpen ? css.open : css.closed)}>
      <div className={css.menuContent}>
        <AuthButtonsGroup />
        <h2 className={css.menuCategories}>{t("menu.categories")}</h2>
        {/* <CategoriesList /> */}
        <h2 className={css.menuBrands}>{t("menu.famousBrands")}</h2>
        {/* <CategoriesList /> */}

        <h2 className={css.menuCategories}>Навігація</h2>
        <ul className={css.menuList}>
          <li>
            <p>Довідковий центр.</p>
          </li>
          <li>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis doloribus consectetur accusantium possimus, magni odio
              iure rem architecto harum similique debitis, ullam animi mollitia
              voluptatibus totam soluta maxime delectus quos tempora quibusdam
              et. Dolore, fuga minus accusantium eaque aut tenetur aspernatur
              temporibus nesciunt, ipsam earum dolores quis dignissimos culpa
              distinctio porro, asperiores omnis laborum vel? Explicabo, placeat
              veniam laboriosam architecto commodi eius! Nesciunt suscipit
              eligendi mollitia ipsa error eveniet iste dicta aperiam voluptates
              assumenda deserunt id reprehenderit rerum, saepe necessitatibus
              dolor odit tempore deleniti eaque exercitationem nostrum veritatis
              repellendus blanditiis! Assumenda, dolores fugit nobis mollitia
              voluptates praesentium inventore nulla. Quae.
            </p>
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
        <h2 className={css.menuLanguage}>{t("menu.language")}</h2>
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Menu;
