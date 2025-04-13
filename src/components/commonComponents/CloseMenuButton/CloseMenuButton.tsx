import React from "react";
import css from "./CloseMenuButton.module.css";
import sprite from "../../../assets/icons/sprite.svg";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/store";
import { closeMenu } from "../../../redux/additional/slice";

const CloseMenuButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(closeMenu());
    const timeoutId = setTimeout(() => {
      navigate(-1);
    }, 200);

    return () => clearTimeout(timeoutId);
  };

  return (
    <button
      className={css.closeBtn}
      aria-label="Close menu"
      type="button"
      onClick={handleClick}
    >
      <svg className={css.icon} width="24" height="24">
        <use href={`${sprite}#close`}></use>
      </svg>
    </button>
  );
};

export default CloseMenuButton;
