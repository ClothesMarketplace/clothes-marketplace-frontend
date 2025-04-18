import css from "./ButtonGoogle.module.css";
import sprite from "../../../assets/icons/sprite.svg";
import { useTranslation } from "react-i18next";

const ButtonGoogle: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={css.wrapper}>
      <span className={css.chooseText}>{t("registration.orSignInText")}</span>
      <a
        className={css.googleLink}
        //   href={`${BASE_URL}/api/auth/google`}
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        aria-label="Sign up with Google"
      >
        <svg className={css.icon} width="20" height="20">
          <use href={`${sprite}#google`}></use>
        </svg>
      </a>
    </div>
  );
};

export default ButtonGoogle;
