import css from "./AuthButtonsGroup.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import { logOut } from "../../../redux/auth/operations";

const AuthButtonsGroup: React.FC = () => {
  const { t } = useTranslation();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };

  return isLoggedIn ? (
    <div className={css.authButtonsGroup}>
      <button className={css.logout} onClick={handleClick}>
        {t("logout.title")}
      </button>
    </div>
  ) : (
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
