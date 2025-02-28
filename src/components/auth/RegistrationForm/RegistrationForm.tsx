import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { register } from "../../../redux/auth/operations";
import { useAppDispatch } from "../../../redux/store";
import css from "./RegistrationForm.module.css";
import { Link } from "react-router-dom";
import sprite from "../../../assets/icons/sprite.svg";
import Button from "../../commonComponents/Button/Button";
import ButtonGoogle from "../../commonComponents/ButtonGoogle/ButtonGoogle";

export const RegistrationForm: React.FC<{}> = () => {
  const dispatch = useAppDispatch();

  interface FormData {
    name: string;
    email: string;
    password: string;
  }

  const INITIAL_FORM_DATA: FormData = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (data: FormData, actions: FormikHelpers<FormData>) => {
    dispatch(register(data));
    actions.resetForm();
  };

  return (
    <>
      <h1 className={css.title}>
        Приєднуйтесь і продавайте улюблений одяг без комісій
      </h1>

      <Formik
        //   validationSchema={registerSchema}
        initialValues={INITIAL_FORM_DATA}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            <Field
              className={css.input}
              type="text"
              name="name"
              placeholder="Ім‘я"
              autoComplete="off"
            />
            <ErrorMessage
              className={css.errorMsg}
              name="name"
              component="span"
            />
          </label>

          <label className={css.label}>
            <Field
              className={css.input}
              type="email"
              name="email"
              placeholder="Електронна пошта"
              autoComplete="off"
            />
            <ErrorMessage
              className={css.errorMsg}
              name="email"
              component="span"
            />
          </label>

          <label className={css.label}>
            <Field
              className={css.input}
              type="password"
              name="password"
              placeholder="Пароль"
              autoComplete="off"
            />
            <ErrorMessage
              className={css.errorMsg}
              name="password"
              component="span"
            />
          </label>

          <Button text="Зареєструватися" type="submit" />
        </Form>
      </Formik>

      <ButtonGoogle text="За допомогою Google" />

      <p>
        Вже маєте акаунт? <Link to="/login">авторизуватися</Link>
      </p>
    </>
  );
};
