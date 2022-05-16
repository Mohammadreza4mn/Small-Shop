import { Color } from "@material-ui/lab";

// interface store
export interface IProduct {
  id: number;
  name: string;
  price: number;
  img: string;
  count?: number;
  description: string;
}
export interface IInistialStateBasket {
  list: IProduct[];
}
export interface IInistialStateToast {
  severity?: Color;
  toggle: boolean;
  message?: string;
}

// interface action redux
export interface IActionBasket {
  (payload: IProduct, side?: string): { type: string; payload?: IProduct };
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
