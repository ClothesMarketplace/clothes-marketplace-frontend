import React from "react";
import { Link } from "react-router-dom";
import css from "./Logo.module.css";
import sprite from "../../../assets/icons/sprite.svg";
import clsx from "clsx";

const Logo: React.FC<{ forFooter?: boolean; classString?: string }> = ({
  forFooter = false,
  classString,
}) => {
  return (
    <Link
      className={clsx(css.logoLink, classString && css[classString])}
      to="/"
    >
      <svg
        className={clsx(css.logoIcon, forFooter && css.logoForFooter)}
        width="62"
        height="44"
        aria-hidden="true"
      >
        <use href={`${sprite}#logo`}></use>
      </svg>
    </Link>
  );
};

export default Logo;
