import { cn } from "@/lib/utils";
declare module "@/lib/utils" {
  export const someFunction: () => void;
  cn: typeof cn;
  // Add other exports here
}
declare module "swiper/css";
declare module "swiper/css/pagination";
declare module "swiper/css/navigation";
declare module "swiper/css/scrollbar";
