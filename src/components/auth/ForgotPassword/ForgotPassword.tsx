import { Formik, Form, FormikHelpers } from "formik";
import css from "./ForgotPassword.module.css";
import FormItem from "../FormItem/FormItem";
import Button from "../../commonComponents/Button/Button";
import { recuverPasswordSchema } from "../../../utils/yup/authSchema";
import CloseButton from "../../commonComponents/CloseButton/CloseButton";
import { useTranslation } from "react-i18next";

interface ForgotPasswordProps {
  toggleForgotPassword(): void;
}

interface FormData {
  email: string;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  toggleForgotPassword,
}: ForgotPasswordProps) => {
  //   const dispatch = useAppDispatch();

  const { t } = useTranslation();

  const INITIAL_FORM_DATA: FormData = {
    email: "",
  };

  const handleSubmit = (data: FormData, actions: FormikHelpers<FormData>) => {
    // dispatch(logIn(data));
    // console.log(data);
    actions.resetForm();
    toggleForgotPassword();
  };
  return (
    <section className={css.forgotPasswordSection}>
      <CloseButton descr="close recuver password form" />
      <h2 className={css.title}>{t("forgotPassword.title")}</h2>
      <p className={css.descr}>{t("forgotPassword.descr")}</p>
      <Formik
        validationSchema={recuverPasswordSchema}
        initialValues={INITIAL_FORM_DATA}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <FormItem
            type="email"
            name="email"
            placeholder={t("registration.form.email")}
            iconId="mail"
          />

          <Button text={t("forgotPassword.send")} type="submit" />
        </Form>
      </Formik>
    </section>
  );
};

export default ForgotPassword;
