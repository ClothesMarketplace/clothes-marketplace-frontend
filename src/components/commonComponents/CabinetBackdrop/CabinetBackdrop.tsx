import React from "react";
import css from "./CabinetBackdrop.module.css";

const CabinetBackdrop: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.ReactNode => {
  return <div className={css.backdrop}>{children}</div>;
};

export default CabinetBackdrop;
