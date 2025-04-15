import { create } from "zustand";
import { LanguageState } from "../types/common.interface";
import i18n, { LanguageKey } from "../i18n";

export const useLanguageStore = create<LanguageState>((set) => {
  // Đồng bộ khi i18next thay đổi ngôn ngữ
  i18n.on("languageChanged", (lng) => {
    localStorage.setItem("language", lng);
    set({ language: lng });
  });

  return {
    language: (i18n.language as LanguageKey) || "vi",
    setLanguage: (lng) => {
      i18n.changeLanguage(lng);
    },
  };
});
