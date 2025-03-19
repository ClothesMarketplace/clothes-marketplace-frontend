import { ErrorMessage, Field } from "formik";
import sprite from "../../../assets/icons/sprite.svg";
import css from "./FormItem.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface InputProps {
  type?: "text" | "email" | "password";
  name: string;
  placeholder: string;
  iconId: string;
  autocomplete?: string;
}

const FormItem: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  iconId,
  autocomplete = "off",
}: InputProps) => {
  const [passwordType, setPasswordType] = useState<"text" | "password">(
    "password"
  );

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const { t } = useTranslation();

  return (
    <div className={css.wrapper}>
      <label className={css.label}>
        <ErrorMessage className={css.errorMsg} name={name} component="span" />
        <Field
          className={css.input}
          type={
            name === "password" || name === "confirmPassword"
              ? passwordType
              : type
          }
          name={name}
          placeholder={placeholder}
          autoComplete={autocomplete}
        />
        <svg className={css.icon} width="18" height="18">
          <use href={`${sprite}#${iconId}`}></use>
        </svg>
      </label>

      {(name === "password" || name === "confirmPassword") && (
        <button
          className={css.eyeBtn}
          onClick={togglePasswordVisibility}
          aria-label="Toggle password visibility"
          type="button"
          title={
            passwordType === "password"
              ? t("registration.showPassword")
              : t("registration.hidePassword")
          }
        >
          <svg className={css.iconEye} width="18" height="18">
            <use href={`${sprite}#eye`}></use>
          </svg>
        </button>
      )}
    </div>
  );
};

export default FormItem;
