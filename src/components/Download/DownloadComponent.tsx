import { useTranslation } from "react-i18next";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import QRDownload from "../../assets/icons/qr-app.png";
import IOSDownload from "../../assets/icons/apple.png";
import AndroidDownload from "../../assets/icons/ch-play.png";

const DownloadComponent = () => {
  const { t } = useTranslation();

  return (
    <Popover>
      <PopoverTrigger className="bg-black-light border border-white hover:opacity-80 py-0.5 px-2 rounded-[20px] relative flexCenter cursor-pointer">
        <span className="text-white font-medium text-sm">
          {t("downloadApp")}
        </span>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col border-none bg-white rounded-[4px] p-2 max-w-40 !z-[51]" align="start">
        <figure className="flexCenter">
          <img
            src={QRDownload}
            alt="Google Play"
            className="w-full h-full"
          />
        </figure>
        <figure className="flexCenter cursor-pointer">
          <img
            src={IOSDownload}
            alt="Google Play"
            className="w-full h-full"
          />
        </figure>
        <figure className="flexCenter cursor-pointer">
          <img
            src={AndroidDownload}
            alt="Google Play"
            className="w-full h-full"
          />
        </figure>
      </PopoverContent>
    </Popover>
  );
};

export default DownloadComponent;
