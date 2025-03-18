import { useState } from "react";
import { useTranslation } from "react-i18next";
import css from "./LanguageSelector.module.css";
import clsx from "clsx";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState<string>(i18n.language);

  const changeLanguage = (
    language: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    i18n.changeLanguage(language);
    setActiveLanguage(language);
  };

  const changeToEnglish = (e: React.MouseEvent<HTMLButtonElement>) => {
    changeLanguage("en", e);
  };

  const changeToPortuguese = (e: React.MouseEvent<HTMLButtonElement>) => {
    changeLanguage("ua", e);
  };

  return (
    <div className={css.wrapper}>
      <button
        className={clsx(
          css.btn,
          activeLanguage === "en" ? css.active : css.disabled
        )}
        onClick={changeToEnglish}
        type="button"
      >
        en
      </button>
      <button
        className={clsx(
          css.btn,
          activeLanguage === "ua" ? css.active : css.disabled
        )}
        onClick={changeToPortuguese}
        type="button"
      >
        ua
      </button>
    </div>
  );
};

export default LanguageSelector;
