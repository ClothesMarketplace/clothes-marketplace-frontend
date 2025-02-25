import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import css from "./LoginForm.module.css";
import { useAppDispatch } from "../../../redux/store";
import { logIn } from "../../../redux/auth/operations";

const LoginForm: React.FC<{}> = () => {
  const dispatch = useAppDispatch();

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

  return (
    <Formik
      //   validationSchema={loginSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label>
          <span className={css.label}>Email</span>
          <Field
            className="input"
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="off"
          />
          <ErrorMessage className="errorMsg" name="email" component="span" />
        </label>
        <label>
          <span className={css.label}>Password</span>
          <Field
            className="input"
            type="password"
            name="password"
            placeholder="Enter password"
            autoComplete="off"
          />
          <ErrorMessage className="errorMsg" name="password" component="span" />
        </label>
        <button className="button-64" type="submit">
          <span>Log In</span>
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
