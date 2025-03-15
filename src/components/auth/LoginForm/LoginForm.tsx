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

const LoginForm: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const [isRemembered, setIsRemembered] = useState<boolean>(false);

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
          placeholder="Електронна пошта"
          iconId="mail"
          autocomplete={isRemembered ? "email" : "off"}
        />

        <FormItem
          type="password"
          name="password"
          placeholder="Пароль"
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
          <p className={css.labelText}>Запам'ятати мене для авто.входу.</p>
        </label>

        <Button text="Увійти" type="submit" />
      </Form>
    </Formik>
  );
};

export default LoginForm;
