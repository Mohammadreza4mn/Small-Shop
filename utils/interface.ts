import { Color } from "@material-ui/lab";

// interface store
export interface IProduct {
  id: number;
  name: string;
  price: number;
  img: string;
  description: string;
}
export interface IProductBasket extends IProduct {
  count: number;
}
export interface IInistialStateBasket {
  list: IProductBasket[];
}
export interface IInistialStateToast {
  severity?: Color;
  toggle: boolean;
  message?: string;
}

// interface action redux
export interface IActionBasket {
  (payload: IProductBasket, side?: string): {
    type: string;
    payload?: IProduct;
  };
}
export interface IActionBasketUpdate {
  (payload: { id: number; data: { count: number } }, side?: string): {
    type: string;
    payload?: IProduct;
  };
}
export interface IActionBasketRemove {
  (payload: { id: number; data: { count: number } }, side?: string): {
    type: string;
    payload?: IProduct;
  };
}
export interface IActionToast {
  (message?: string): { type: string; payload: IInistialStateToast };
}
