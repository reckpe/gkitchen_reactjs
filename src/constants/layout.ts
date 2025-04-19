import { HeaderMenuItemI } from "../types/layout.interface";
import Slider1 from "../assets/images/register/slide1.jpg"
import Slider2 from "../assets/images/register/slide2.jpg"
import Slider3 from "../assets/images/register/slide3.jpg"

export const menuItems: HeaderMenuItemI[] = [
  { label: "products.title", path: "/product" },
  { label: "recipes.title", path: "/cooking" },
  { label: "promotions.title", path: "/promotion" },
  { label: "logo", path: "/", isLogo: true },
  { label: "meat_shop.title", path: "/location" },
  { label: "story.title", path: "/about-us" },
  { label: "threeFPlus.title", path: "/3f-plus" },
];

export const sliderRegister: string[] = [
  Slider1,
  Slider2,
  Slider3
]