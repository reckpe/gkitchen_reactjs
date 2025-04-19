import { useLanguageStore } from "../../features/language.slice";
import En from "../../assets/icons/en.svg";
import Vi from "../../assets/icons/vi.svg";
import { languageConfig, LanguageKey } from "../../i18n";
import { useTranslation } from "react-i18next";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const Language = () => {
  const { language, setLanguage } = useLanguageStore();
  const { t } = useTranslation();
  // const [show]

  const handleChangeLanguage = (lng: LanguageKey) => {
    setLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <Popover>
      <PopoverTrigger className="bg-black-light border border-white hover:opacity-80 py-0.5 px-1 pr-1.5 rounded-[20px] relative flexCenter cursor-pointer">
        <img
          src={language === "vi" ? Vi : En}
          alt="Language"
          className="w-5 h-5"
        />
        <span className="text-white font-bold text-sm ml-2">
          {t("language")}
        </span>
      </PopoverTrigger>
      <PopoverContent
        className="flex flex-col bg-black-light border !border-white max-w-fit rounded-[20px] p-2 !z-[51]"
        align="center"
      >
        {Object.entries(languageConfig).map(([key, value], index: number) => (
          <div
            className="flex items-center p-2 cursor-pointer"
            onClick={() => handleChangeLanguage(key as LanguageKey)}
            key={index}
          >
            <img src={value.img} alt="English" className="w-5 h-5" />
            <span className="text-white font-bold text-sm ml-2">{t(key)}</span>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default Language;
