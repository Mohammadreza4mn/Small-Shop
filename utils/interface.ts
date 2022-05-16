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
  severity: string;
  toggle: boolean;
  message?: string;
}

// interface action redux
export interface IActionBasket {
  (payload: IProduct, side?: string): { type: string; payload?: IProduct };
}
export interface IActionToast {
  (message?: string): { type: string; payload: IInistialStateToast };
}
