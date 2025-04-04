import React from "react";
import css from "./SearchWrapper.module.css";

const SearchWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.ReactNode => {
  return <div className={css.searchWrapper}>{children}</div>;
};

export default SearchWrapper;
