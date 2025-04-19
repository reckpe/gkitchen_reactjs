import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationVI from "./langs/vi";
import translationEN from "./langs/en";
import En from "../assets/icons/en.svg";
import Vi from "../assets/icons/vi.svg";

export type LanguageKey = "en" | "vi";

const resources = {
  en: {
    translation: translationEN,
  },
  vi: {
    translation: translationVI,
  },
};

export const languageConfig: Record<
  LanguageKey,
  { name: string; code: string; img: string }
> = {
  en: {
    name: "English",
    code: "",
    img: En,
  },
  vi: {
    name: "Vietnamese",
    code: "+84",
    img: Vi,
  },
};

i18n.use(initReactI18next).init({
  lng:
    localStorage.getItem("language") ||
    navigator.language?.split("-")[0] ||
    "vi",
  resources,
  fallbackLng: "vi",
  supportedLngs: ["en", "vi"],
  interpolation: {
    escapeValue: false,
  },
  // debug: process.env.NODE_ENV === "development",
});

export default i18n;
