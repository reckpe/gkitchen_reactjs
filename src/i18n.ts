import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next";

export type LanguageKey = "en" | "vi";

const resources = {
  en: {
    translation: "en",
  },
  vi: {
    translation: "vi",
  },
};

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(
    resourcesToBackend((language: string) => {
      console.log(language, `../src/locales/${language}.json`);
      return import(`../src/locales/${language}.json`);
    })
  )
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "vi",
    supportedLngs: ["en", "vi"],
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "cookie", "htmlTag"],
      caches: ["localStorage"],
    },
  });

export default i18next;
