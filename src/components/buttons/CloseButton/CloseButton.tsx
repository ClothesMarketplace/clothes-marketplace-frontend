import css from "./CloseButton.module.css";
import sprite from "../../../assets/icons/sprite.svg";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  descr: string;
  externalHandleClick?: () => void;
}

const CloseButton: React.FC<ButtonProps> = ({
  descr,
  externalHandleClick,
}: ButtonProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    externalHandleClick ? externalHandleClick() : navigate("/");
  };

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
