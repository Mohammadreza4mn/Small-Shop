import { Color } from "@material-ui/lab";
import { ReactElement } from "react";

// interface store
type listStoreForLoading = "basket" | "product";
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
export type IInistialStateLoading = Record<listStoreForLoading, string[]>;

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

// loading
export interface IActionLoading {
  (payload: { store: listStoreForLoading; element: string }): {
    type: string;
    payload: { store: listStoreForLoading; element: string };
  };
}

// interface utils/functions
export interface ISeparatorsNumber {
  ({
    price,
    currencyUnit,
  }: {
    price: number | string;
    currencyUnit: "fa-IR" | "en-US";
  }): string;
}

// interface utils/helpers
export interface IFindLoading {
  zone: Array<string>;
  element: string;
  exprIfTrue: ReactElement;
  exprIfFalse: Function;
}

export interface IFindBasket {
  list: IProductBasket[];
  id: number;
  exprIfTrue: Function;
  exprIfFalse: ReactElement;
}

export interface IGenerateCardActions {
  zone: Array<string>;
  element: string;
  product: IProductBasket | IProduct;
  list: IProductBasket[];
}
