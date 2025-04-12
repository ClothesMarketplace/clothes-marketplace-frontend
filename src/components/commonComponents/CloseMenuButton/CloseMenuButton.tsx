import React from "react";
import { useAppDispatch } from "../../../redux/store";
import { closeMenu } from "../../../redux/additional/slice";
import css from "./CloseMenuButton.module.css";
import sprite from "../../../assets/icons/sprite.svg";

const CloseMenuButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleClick = (): void => {
    dispatch(closeMenu());
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
