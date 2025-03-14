import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import css from "./LoginSection.module.css";
import ButtonGoogle from "../../commonComponents/ButtonGoogle/ButtonGoogle";
import CloseButton from "../../commonComponents/CloseButton/CloseButton";
import { useAppSelector } from "../../../redux/store";
import { selectError } from "../../../redux/auth/selectors";
import { useEffect } from "react";

const LoginSection = () => {
  const error = useAppSelector(selectError);

  useEffect(() => {
    if (
      error &&
      error !== "Something went wrong" &&
      error !== "User with this email was not found"
    )
      alert(`${error} Please try again later`);
  }, [error]);

  return (
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
      <Link className={css.linkForgotPassword} to="/">
        Забули пароль?
      </Link>
      <ButtonGoogle />
    </section>
  );
};

export default LoginSection;
