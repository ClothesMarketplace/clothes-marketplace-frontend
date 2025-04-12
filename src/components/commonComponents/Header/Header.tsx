import Navigation from "../Navigation/Navigation";
import css from "./Header.module.css";
import React from "react";
import clsx from "clsx";
import Logo from "../Logo/Logo";

const Header: React.FC = () => {
  return (
    <header className={clsx("container", css.header)}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
