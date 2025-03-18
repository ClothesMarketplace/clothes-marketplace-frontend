import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";
import React from "react";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const Header: React.FC = () => {
  return (
    <header className={css.header}>
      <div className={css.logoContainer}>
        <Link to="/">LOGO</Link>
        <div>Категорії</div>

        <LanguageSelector />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
