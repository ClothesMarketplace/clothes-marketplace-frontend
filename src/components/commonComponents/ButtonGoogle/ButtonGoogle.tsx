import css from "./ButtonGoogle.module.css";
import sprite from "../../../assets/icons/sprite.svg";

interface ButtonGoogleProps {
  text: string;
}

const ButtonGoogle: React.FC<ButtonGoogleProps> = ({
  text,
}: ButtonGoogleProps) => {
  return (
    <div
      className={css.googleContainer}
      role="button"
      aria-label="Google authorization"
    >
      <span className={css.chooseText}>або увійти</span>
      <a
        className={css.googleLink}
        //   href={`${BASE_URL}/api/auth/google`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={css.googleIcon}>
          <svg width="20" height="20">
            <use href={`${sprite}#google`}></use>
          </svg>
        </div>
        <p className={css.text}>{text}</p>
      </a>
    </div>
  );
};

export default ButtonGoogle;
