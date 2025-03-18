import i18next from "i18next";
import * as Yup from "yup";

const { t } = i18next;

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, t("authSchema.nameIsTooShort"))
    .max(50, t("authSchema.nameIsTooLong"))
    .required(t("authSchema.required")),
  email: Yup.string()
    .email(t("authSchema.emailMustBeValid"))
    .required(t("authSchema.required")),
  password: Yup.string()
    .matches(/^(?=.*[A-Z])(?=.*\d).+$/, t("authSchema.passwordMatch"))
    .min(8, t("authSchema.passwordIsTooShort"))
    .max(20, t("authSchema.passwordIsTooLong"))
    .required(t("authSchema.required")),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], t("authSchema.confirm"))
    .required(t("authSchema.required")),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email(t("authSchema.emailMustBeValid"))
    .required(t("authSchema.required")),
  password: Yup.string().required(t("authSchema.required")),
});

export const recuverPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email(t("authSchema.emailMustBeValid"))
    .required(t("authSchema.required")),
});
