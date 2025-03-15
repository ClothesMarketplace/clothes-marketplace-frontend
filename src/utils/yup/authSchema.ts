import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short!")
    .max(50, "Name is too long!")
    .required("Name is required"),
  email: Yup.string().email("Email must be valid").required("Required!"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*\d).+$/,
      "Enter 8-20 symbols, at least 1 capital letter and 1 digit."
    )
    .min(8, "Too short!")
    .max(20, "Too long!")
    .required("Required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Email must be valid").required("Required!"),
  password: Yup.string().required("Required!"),
});

export const recuverPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Email must be valid").required("Required!"),
});
