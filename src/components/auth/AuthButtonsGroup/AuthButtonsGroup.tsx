import css from "./AuthButtonsGroup.module.css";
import { useAppSelector } from "../../../redux/store";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AuthButtonsGroup: React.FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const { t } = useTranslation();

  return (
    <div className={css.authButtonsGroup}>
      {!isLoggedIn && (
        <Link className={css.login} to="/login">
          {t("login.signIn")}
        </Link>
      )}
      {!isLoggedIn && (
        <Link className={css.registration} to="/registration">
          {t("registration.form.signUp")}
        </Link>
      )}
    </div>
  );
};

export default AuthButtonsGroup;
