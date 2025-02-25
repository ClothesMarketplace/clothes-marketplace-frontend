import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { register } from "../../../redux/auth/operations";
import { useAppDispatch } from "../../../redux/store";
import css from "./RegistrationForm.module.css";
import { Link } from "react-router-dom";

export const RegistrationForm: React.FC<{}> = () => {
  const dispatch = useAppDispatch();

  interface FormData {
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
  }

  const INITIAL_FORM_DATA: FormData = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  };

  const handleSubmit = (data: FormData, actions: FormikHelpers<FormData>) => {
    dispatch(register(data));
    actions.resetForm();
  };

  return (
    <div>
      <h1>Приєднуйтесь і продавайте улюблений одяг без комісій</h1>

      <Formik
        //   validationSchema={registerSchema}
        initialValues={INITIAL_FORM_DATA}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label>
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

          <label>
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

          <label>
            <Field
              className={css.input}
              type="tel"
              name="phoneNumber"
              placeholder="Номер телефону"
              autoComplete="off"
            />
            <ErrorMessage
              className={css.errorMsg}
              name="phoneNumber"
              component="span"
            />
          </label>

          <label>
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

          <button className={css.btn} type="submit">
            Зареєструватися
          </button>
        </Form>
      </Formik>

      <span>або увійти</span>

      <button type="button">G</button>
      <button type="button">F</button>
      <button type="button">Apple</button>

      <p>
        Вже маєте акаунт? <Link to="/login">авторизуватися</Link>
      </p>
    </div>
  );
};
