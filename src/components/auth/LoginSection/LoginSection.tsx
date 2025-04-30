import LoginForm from "../LoginForm/LoginForm";
import css from "./LoginSection.module.css";
import ButtonGoogle from "../../buttons/ButtonGoogle/ButtonGoogle";
import CloseButton from "../../buttons/CloseButton/CloseButton";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { selectError } from "../../../redux/auth/selectors";
import { useEffect, useState } from "react";
import { resetError } from "../../../redux/auth/slice";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import { useTranslation } from "react-i18next";

const LoginSection: React.FC = () => {
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();
  const [forgotPassword, setForgotPassword] = useState<boolean>(false);
  const { t } = useTranslation();

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
      <CloseButton descr="Close sign in form" />
      <h1 className={css.title}>{t("login.title")}</h1>
      <p className={css.descr}>{t("login.subTitle")}</p>
      {(error === "Something went wrong" ||
        error === "User with this email was not found") && (
        <p className={css.errorMessage}>{t("login.wrongCredentials")}</p>
      )}
      <LoginForm />
      <button className={css.forgotPasswordBtn} onClick={toggleForgotPassword}>
        {t("login.forgotPassword")}
      </button>
      <ButtonGoogle />
    </section>
  );
};

export default LoginSection;
