import { Form, Formik, FormikHelpers } from "formik";
import { register } from "../../../redux/auth/operations";
import { useAppDispatch } from "../../../redux/store";
import css from "./RegistrationForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../commonComponents/Button/Button";
import ButtonGoogle from "../../commonComponents/ButtonGoogle/ButtonGoogle";
import CloseButton from "../../commonComponents/CloseButton/CloseButton";
import FormItem from "../FormItem/FormItem";
import { useState } from "react";

export const RegistrationForm: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [type, setType] = useState<"text" | "password">("password");

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

  const goBack = () => {
    navigate(-1);
  };

  const togglePasswordVisibility = () => {
    setType(type === "password" ? "text" : "password");
  };

  return (
    <div className={css.wrapper}>
      <CloseButton descr="Close signup form" handleClick={goBack} />
      <h1 className={css.title}>
        Приєднуйтесь і продавайте улюблений одяг без комісій
      </h1>

      <Formik
        //   validationSchema={registerSchema}
        initialValues={INITIAL_FORM_DATA}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <FormItem
            type="text"
            name="name"
            placeholder="Ім‘я"
            iconId="Profile"
          />

          <FormItem
            type="email"
            name="email"
            placeholder="Електронна пошта"
            iconId="mail"
          />

          <FormItem
            type={type}
            name="password"
            placeholder="Пароль"
            iconId="lock"
            togglePasswordVisibility={togglePasswordVisibility}
          />

          <Button text="Зареєструватися" type="submit" />
        </Form>
      </Formik>

      <ButtonGoogle text="За допомогою Google" />

      <p>
        Вже маєте акаунт? <Link to="/login">авторизуватися</Link>
      </p>
    </div>
  );
};
