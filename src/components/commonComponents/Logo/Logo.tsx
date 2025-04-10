import React from "react";
import { Link } from "react-router-dom";
import css from "./Logo.module.css";
import sprite from "../../../assets/icons/sprite.svg";

const Logo: React.FC = () => {
  return (
    <Link className={css.logoLink} to="/">
      <svg className={css.logoIcon} width="60" height="42" aria-hidden="true">
        <use href={`${sprite}#logo`}></use>
      </svg>
    </Link>
  );
};

export default Logo;
