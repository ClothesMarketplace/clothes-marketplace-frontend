import { Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import css from "./LoginSection.module.css";
import ButtonGoogle from "../../commonComponents/ButtonGoogle/ButtonGoogle";
import CloseButton from "../../commonComponents/CloseButton/CloseButton";

const LoginSection = () => {
  return (
    <section className={css.section}>
      <CloseButton descr="Close signup form" />
      <h1 className={css.title}>З поверненням :)</h1>
      <p className={css.descr}>Увійдіть до свого облікового запису</p>
      <LoginForm />
      <Link className={css.link} to="/">
        Забули пароль?
      </Link>
      <ButtonGoogle />
    </section>
  );
};

export default LoginSection;
