import apiClient from "../config/axios";
import { SlidesI } from "../types/promotion.type";

export const fetchSlider = async (): Promise<SlidesI> => {
  try {
    const { data } = await apiClient.get(`/slides`);
    return data.data;
  } catch (error) {
    console.error("Error fetching slides:", error);
    throw error;
  }
};
