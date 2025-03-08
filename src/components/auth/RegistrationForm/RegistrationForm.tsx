import { Form, Formik, FormikHelpers } from "formik";
import { register } from "../../../redux/auth/operations";
import { useAppDispatch } from "../../../redux/store";
import css from "./RegistrationForm.module.css";
import Button from "../../commonComponents/Button/Button";
import FormItem from "../FormItem/FormItem";

export const RegistrationForm: React.FC = () => {
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
    <Formik
      //   validationSchema={registerSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <FormItem type="text" name="name" placeholder="Ім‘я" iconId="Profile" />

        <FormItem
          type="email"
          name="email"
          placeholder="Електронна пошта"
          iconId="mail"
        />

        <FormItem name="password" placeholder="Пароль" iconId="lock" />

        <Button text="Зареєструватися" type="submit" />
      </Form>
    </Formik>
  );
};
