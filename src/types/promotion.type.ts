export interface SlidesI {
  image: string;
}

export interface PromotionStoreI {
  slides: SlidesI[] | [];
  setSliders: (slides: SlidesI[]) => void;
  clearSliders: () => void;
}
