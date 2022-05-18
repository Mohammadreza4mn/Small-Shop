import { Color } from "@material-ui/lab";

// interface store
type store = "basket";
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
// basket
export interface IActionAddBasket {
  (payload: IProductBasket): {
    type: string;
    payload: IProductBasket;
  };
}
export interface IActionAddBasketSuccess {
  (payload: IProductBasket): {
    type: string;
    payload: IProductBasket;
  };
}
export interface IActionGetListBasket {
  (): {
    type: string;
  };
}
export interface IActionGetListBasketSuccess {
  (payload: IProductBasket): {
    type: string;
    payload: IProductBasket;
  };
}
export interface IActionBasketUpdate {
  (payload: { id: number; data: { count: number } }): {
    type: string;
    payload: { id: number; data: { count: number } };
  };
}
export interface IActionBasketUpdateSuccess {
  (payload: IProductBasket): {
    type: string;
    payload: IProductBasket;
  };
}
export interface IActionBasketRemove {
  (payload: number): {
    type: string;
    payload: number;
  };
}
export interface IActionBasketRemoveSuccess {
  (payload: number): {
    type: string;
    payload: number;
  };
}

// toast
export interface IActionToast {
  (message?: string): { type: string; payload: IInistialStateToast };
}
export interface IActionToastDown {
  (): { type: string; payload: IInistialStateToast };
}
