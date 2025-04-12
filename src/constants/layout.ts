import i18next from "i18next";
import { HeaderMenuItemI } from "../types/layout.interface";

export const menuItems: HeaderMenuItemI[] = [
  { label: i18next.t("products.title"), path: "/product" },
  { label: i18next.t("cooking"), path: "/cooking" },
  { label: i18next.t("promotions"), path: "/promotion" },
  { label: "logo", path: "/", isLogo: true },
  { label: i18next.t("meatShop"), path: "/location" },
  { label: i18next.t("story"), path: "/about-us" },
  { label: i18next.t("threeFPlus"), path: "/3f-plus" },
];
