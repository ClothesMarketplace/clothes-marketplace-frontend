import { Link } from "react-router-dom";
import ButtonGoogle from "../../buttons/ButtonGoogle/ButtonGoogle";
import CloseButton from "../../buttons/CloseButton/CloseButton";
import css from "./RegistrationSection.module.css";
import { useTranslation } from "react-i18next";

const RegistrationSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.ReactNode => {
  const { t } = useTranslation();

  return (
    <section className={css.section}>
      <CloseButton descr="Close signup form" />
      <h1 className={css.title}>{t("registration.title")}</h1>

      {children}

      <ButtonGoogle />
      <p className={css.text}>
        {t("registration.alreadyHaveAccount")}{" "}
        <Link className={css.linkToLogin} to="/login">
          {t("registration.logIn")}
        </Link>
      </p>
    </section>
  );
};

export default RegistrationSection;
