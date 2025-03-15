import LoginForm from "../LoginForm/LoginForm";
import css from "./LoginSection.module.css";
import ButtonGoogle from "../../commonComponents/ButtonGoogle/ButtonGoogle";
import CloseButton from "../../commonComponents/CloseButton/CloseButton";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { selectError } from "../../../redux/auth/selectors";
import { useEffect, useState } from "react";
import { resetError } from "../../../redux/auth/slice";
import ForgotPassword from "../ForgotPassword/ForgotPassword";

const LoginSection: React.FC = () => {
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();
  const [forgotPassword, setForgotPassword] = useState<boolean>(false);

  const toggleForgotPassword = (): void => {
    setForgotPassword(!forgotPassword);
  };

  useEffect(() => {
    if (
      error &&
      error !== "Something went wrong" &&
      error !== "User with this email was not found"
    ) {
      alert(`${error} Please try again later`);
      dispatch(resetError());
    }
  }, [error]);

  return forgotPassword ? (
    <ForgotPassword toggleForgotPassword={toggleForgotPassword} />
  ) : (
    <section className={css.section}>
      <CloseButton descr="Close signup form" />
      <h1 className={css.title}>З поверненням :)</h1>
      <p className={css.descr}>Увійдіть до свого облікового запису</p>
      {(error === "Something went wrong" ||
        error === "User with this email was not found") && (
        <p className={css.errorMessage}>
          Ви ввели неправильну пошту або пароль
        </p>
      )}
      <LoginForm />
      <button className={css.forgotPasswordBtn} onClick={toggleForgotPassword}>
        Забули пароль?
      </button>
      <ButtonGoogle />
    </section>
  );
};

export default LoginSection;
