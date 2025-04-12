import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next";

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
  .use(initReactI18next)
  .use(
    resourcesToBackend((language: string) => {
      // Tải file ngôn ngữ từ thư mục locales/
      return import(`./locales/${language}.json`);
    })
  )
  .init({
    resources,
    fallbackLng: "vi",
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18next;
