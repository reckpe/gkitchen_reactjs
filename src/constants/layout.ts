import { HeaderMenuItemI } from "../types/layout.interface";

export const menuItems: HeaderMenuItemI[] = [
  { label: "products.title", path: "/product" },
  { label: "cooking", path: "/cooking" },
  { label: "promotions", path: "/promotion" },
  { label: "logo", path: "/", isLogo: true },
  { label: "meatShop", path: "/location" },
  { label: "story", path: "/about-us" },
  { label: "threeFPlus", path: "/3f-plus" },
];
