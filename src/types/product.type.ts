export interface ProductI {
  name: String;
  description: String;
  images: String[];
  amount: Number;
  price: Number;
  discount: Number;
  shipDay: Number;
  reasonChoice: String;
  information: String;
  status: String;
  idCate: Number;
}

export interface ProductStoreI {
  products: ProductI[];
  setListProducts: (products: ProductI[]) => void;
}
