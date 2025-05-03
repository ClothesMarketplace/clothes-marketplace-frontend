import css from "./AuthButtonsGroup.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AuthButtonsGroup: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={css.authButtonsGroup}>
      <Link className={css.login} to="/login">
        {t("login.signIn")}
      </Link>

      <Link className={css.registration} to="/registration">
        {t("registration.form.signUp")}
      </Link>
    </div>
  );
};

export default AuthButtonsGroup;
