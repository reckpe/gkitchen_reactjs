import apiClient from "../config/axios";
import { ProductI } from "../types/product.type";

export const fetchProducts = async (): Promise<ProductI> => {
  try {
    const { data } = await apiClient.get(`/product`);
    return data.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
