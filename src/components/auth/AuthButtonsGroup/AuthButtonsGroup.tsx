import css from "./AuthButtonsGroup.module.css";
import { useAppSelector } from "../../../redux/store";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import { Link } from "react-router-dom";

const AuthButtonsGroup: React.FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <div className={css.authButtonsGroup}>
      {!isLoggedIn && (
        <Link className={css.login} to="/login">
          Увійти
        </Link>
      )}
      {!isLoggedIn && (
        <Link className={css.registration} to="/registration">
          Зареєструватися
        </Link>
      )}
    </div>
  );
};

export default AuthButtonsGroup;
