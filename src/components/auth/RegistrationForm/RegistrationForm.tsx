import { Form, Formik, FormikHelpers } from "formik";
import { register } from "../../../redux/auth/operations";
import { useAppDispatch } from "../../../redux/store";
import css from "./RegistrationForm.module.css";
import Button from "../../buttons/Button/Button";
import FormItem from "../FormItem/FormItem";
import { registerSchema } from "../../../utils/yup/authSchema";
import { useTranslation } from "react-i18next";

export const RegistrationForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  interface FormData {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
  }

  const INITIAL_FORM_DATA: FormData = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  };

  const handleSubmit = (data: FormData, actions: FormikHelpers<FormData>) => {
    if (data.confirmPassword === data.password) {
      dispatch(register(data));
    }

    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={registerSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off" noValidate>
        <FormItem
          type="text"
          name="userName"
          placeholder={t("registration.form.userName")}
          iconId="Profile"
        />

        <FormItem
          type="text"
          name="firstName"
          placeholder={t("registration.form.name")}
          iconId="Profile"
        />

        <FormItem
          type="text"
          name="lastName"
          placeholder={t("registration.form.lastName")}
          iconId="Profile"
        />

        <FormItem
          type="email"
          name="email"
          placeholder={t("registration.form.email")}
          iconId="mail"
        />

        <FormItem
          name="password"
          placeholder={t("registration.form.password")}
          iconId="lock"
        />

        <FormItem
          name="confirmPassword"
          placeholder={t("registration.form.confirmPassword")}
          iconId="lock"
        />

        <Button text={t("registration.form.signUp")} type="submit" />
      </Form>
    </Formik>
  );
};
