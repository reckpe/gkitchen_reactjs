import { create } from "zustand";
import { PromotionStoreI } from "../types/promotion.type";
import { createJSONStorage, persist } from "zustand/middleware";

export const usePromotionsStore = create<PromotionStoreI>()(
  persist(
    (set) => ({
      slides: [],
      setSlides: (slides) => set({ slides }),
      clearSlides: () => set({ slides: [] }),
    }),
    {
      name: "promotions-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
