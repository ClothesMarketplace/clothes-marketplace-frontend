import { Field, Form, Formik, FormikHelpers } from "formik";
import css from "./LoginForm.module.css";
import { useAppDispatch } from "../../../redux/store";
import { logIn } from "../../../redux/auth/operations";
import FormItem from "../FormItem/FormItem";
import Button from "../../commonComponents/Button/Button";
import sprite from "../../../assets/icons/sprite.svg";
import { useState } from "react";
import clsx from "clsx";
import { loginSchema } from "../../../utils/yup/authSchema";
import { useTranslation } from "react-i18next";

const LoginForm: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const [isRemembered, setIsRemembered] = useState<boolean>(false);
  const { t } = useTranslation();

  interface FormData {
    email: string;
    password: string;
  }

  const INITIAL_FORM_DATA: FormData = {
    email: "",
    password: "",
  };

  const handleSubmit = (data: FormData, actions: FormikHelpers<FormData>) => {
    dispatch(logIn(data));
    actions.resetForm();
  };

  const handleChange = () => {
    setIsRemembered(!isRemembered);
  };

  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <FormItem
          type="email"
          name="email"
          placeholder={t("registration.form.email")}
          iconId="mail"
          autocomplete={isRemembered ? "email" : "off"}
        />

        <FormItem
          type="password"
          name="password"
          placeholder={t("registration.form.password")}
          iconId="lock"
          autocomplete={isRemembered ? "current-password" : "off"}
        />

        <label className={css.label}>
          <Field
            className={clsx(css.checkbox, "visually-hidden")}
            type="checkbox"
            name="remember"
            checked={isRemembered}
            onChange={handleChange}
          />
          <div className={css.iconWrapper}>
            <svg className={css.icon} width="12" height="8">
              <use href={`${sprite}#check`}></use>
            </svg>
          </div>
          <p className={css.labelText}>{t("login.rememberMe")}</p>
        </label>

        <Button text={t("login.signIn")} type="submit" />
      </Form>
    </Formik>
  );
};

export default LoginForm;
