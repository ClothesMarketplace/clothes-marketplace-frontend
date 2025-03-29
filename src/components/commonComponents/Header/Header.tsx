import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";
import React from "react";
import sprite from "../../../assets/icons/sprite.svg";
import clsx from "clsx";

const Header: React.FC = () => {
  return (
    <header className={clsx(css.header, "container")}>
      <Link className={css.logoLink} to="/">
        <svg className={css.logoIcon} width="60" height="42" aria-hidden="true">
          <use href={`${sprite}#logo`}></use>
        </svg>
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
