import css from "./CloseButton.module.css";
import sprite from "../../../assets/icons/sprite.svg";

interface ButtonProps {
  handleClick: () => void;
  descr: string;
}

const CloseButton: React.FC<ButtonProps> = ({
  descr,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      className={css.closeBtn}
      aria-label={descr}
      type="button"
      onClick={handleClick}
    >
      <svg className={css.icon} width="18" height="18">
        <use href={`${sprite}#close`}></use>
      </svg>
    </button>
  );
};

export default CloseButton;
