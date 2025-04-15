import { HeaderMenuItemI } from "../types/layout.interface";

export const menuItems: HeaderMenuItemI[] = [
  { label: "products.title", path: "/product" },
  { label: "cooking", path: "/cooking" },
  { label: "promotions.title", path: "/promotion" },
  { label: "logo", path: "/", isLogo: true },
  { label: "meat_shop.title", path: "/location" },
  { label: "story.title", path: "/about-us" },
  { label: "threeFPlus.title", path: "/3f-plus" },
];
