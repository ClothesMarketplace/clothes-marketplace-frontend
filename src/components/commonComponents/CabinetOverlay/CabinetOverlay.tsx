import React from "react";
import css from "./CabinetOverlay.module.css";

const CabinetOverlay: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.ReactNode => {
  return <div className={css.backdrop}>{children}</div>;
};

export default CabinetOverlay;
