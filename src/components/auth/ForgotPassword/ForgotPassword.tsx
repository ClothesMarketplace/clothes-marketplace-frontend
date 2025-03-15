import { Formik, Form, FormikHelpers } from "formik";
import css from "./ForgotPassword.module.css";
import FormItem from "../FormItem/FormItem";
import Button from "../../commonComponents/Button/Button";
import { recuverPasswordSchema } from "../../../utils/yup/authSchema";
import CloseButton from "../../commonComponents/CloseButton/CloseButton";

interface ForgotPasswordProps {
  toggleForgotPassword(): void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  toggleForgotPassword,
}: ForgotPasswordProps) => {
  //   const dispatch = useAppDispatch();

  interface FormData {
    email: string;
  }

  const INITIAL_FORM_DATA: FormData = {
    email: "",
  };

  const handleSubmit = (data: FormData, actions: FormikHelpers<FormData>) => {
    // dispatch(logIn(data));
    console.log(data);
    actions.resetForm();
    toggleForgotPassword();
  };
  return (
    <section className={css.forgotPasswordSection}>
      <CloseButton descr="close recuver password form" />
      <h2 className={css.title}>Забули пароль,</h2>
      <p className={css.descr}>
        Будь ласка, введіть свою адресу електронної пошти нижче, і ми надішлемо
        вам код для зміни вашого пароля.
      </p>
      <Formik
        validationSchema={recuverPasswordSchema}
        initialValues={INITIAL_FORM_DATA}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <FormItem
            type="email"
            name="email"
            placeholder="Електронна пошта"
            iconId="mail"
          />

          <Button text="Відправити" type="submit" />
        </Form>
      </Formik>
    </section>
  );
};

export default ForgotPassword;
