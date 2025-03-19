import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "./locales/en.json";
import uaLang from "./locales/ua.json";

const resources = {
  ua: {
    translation: uaLang,
  },
  en: {
    translation: enLang,
  },
};

i18next.use(initReactI18next).init({
  lng: "ua",
  debug: false,
  resources,
});

export default i18next;
