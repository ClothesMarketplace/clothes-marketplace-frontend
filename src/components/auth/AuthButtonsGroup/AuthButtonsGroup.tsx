import css from "./AuthButtonsGroup.module.css";
import { useAppSelector } from "../../../redux/store";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import { NavLink } from "react-router-dom";

const AuthButtonsGroup: React.FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <div className={css.authButtonsGroup}>
      {!isLoggedIn && <NavLink to="/login">Увійти</NavLink>}
      {!isLoggedIn && <NavLink to="/registration">Зареєструватися</NavLink>}
    </div>
  );
};

export default AuthButtonsGroup;
