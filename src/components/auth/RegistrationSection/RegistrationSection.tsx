import { Link } from "react-router-dom";
import ButtonGoogle from "../../commonComponents/ButtonGoogle/ButtonGoogle";
import CloseButton from "../../commonComponents/CloseButton/CloseButton";
import css from "./RegistrationSection.module.css";

const RegistrationSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.ReactNode => {
  return (
    <section className={css.section}>
      <CloseButton descr="Close signup form" />
      <h1 className={css.title}>
        Приєднуйтесь і продавайте улюблений одяг без комісій
      </h1>

      {children}

      <ButtonGoogle />
      <p className={css.text}>
        Вже маєте акаунт?{" "}
        <Link className={css.linkToLogin} to="/login">
          авторизуватися
        </Link>
      </p>
    </section>
  );
};

export default RegistrationSection;
