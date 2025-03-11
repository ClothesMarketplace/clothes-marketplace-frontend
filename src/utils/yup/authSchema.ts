import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short!")
    .max(50, "Name is too long!")
    .required("Required"),
  email: Yup.string().email().required("Required!"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*\d).+$/,
      "Пароль має містити: 8-20 знаків, щонайменше 1 велику літеру та 1 цифру."
    )
    .min(8, "Too short!")
    .max(20, "Too long!")
    .required("Required!"),
});
