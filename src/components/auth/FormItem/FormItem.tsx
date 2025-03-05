import { ErrorMessage, Field } from "formik";
import sprite from "../../../assets/icons/sprite.svg";
import css from "./FormItem.module.css";

interface InputProps {
  type: "text" | "email" | "password";
  name: string;
  placeholder: string;
  iconId: string;
  togglePasswordVisibility?: () => void;
}

const FormItem: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  iconId,
  togglePasswordVisibility,
}: InputProps) => {
  return (
    <div className={css.wrapper}>
      <label className={css.label}>
        <Field
          className={css.input}
          type={type}
          name={name}
          placeholder={placeholder}
          autoComplete="off"
        />
        <svg className={css.icon} width="18" height="18">
          <use href={`${sprite}#${iconId}`}></use>
        </svg>
        <ErrorMessage className={css.errorMsg} name={name} component="span" />
      </label>

      {name === "password" && (
        <button
          className={css.eyeBtn}
          onClick={togglePasswordVisibility}
          aria-label="Toggle password visibility"
          type="button"
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
