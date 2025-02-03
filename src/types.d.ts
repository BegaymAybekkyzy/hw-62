export interface IBanner {
  title: string;
  description: string;
  type: string;
  id: string;
}
export interface IPRODUCTS {
  name: string;
  price: number;
  image: string;
}

export interface IProducts {
  name: string;
  count: number;
  price: number;
}
export interface IIngredientInfo {
  name: string;
  price: number;
  image: string;
}

export interface IIngredientQuantity {
  name: string;
  count: number;
}

export interface IItems {
  hasItem: boolean;
  clicked: boolean;
}
