import { create } from "zustand";
import { ProductStoreI } from "../types/product.type";
import { createJSONStorage, persist } from "zustand/middleware";

export const useProductStore = create<ProductStoreI>()(
  persist(
    (set) => ({
      products: [],
      setListProducts: (products) => set({ products }),
    }),
    {
      name: "product-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
