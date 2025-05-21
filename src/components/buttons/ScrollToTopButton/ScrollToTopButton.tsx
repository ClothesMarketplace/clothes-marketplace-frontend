import React from "react";
import css from "./ScrollToTopButton.module.css";
import sprite from "../../../assets/icons/sprite.svg";

const ScrollToTopButton: React.FC = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <button className={css.btn} type="button" onClick={handleScroll}>
      <svg className={css.icon} width="20" height="36">
        <use href={`${sprite}#up-arrow`}></use>
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
