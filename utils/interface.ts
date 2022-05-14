export interface IProduct {
  id: number;
  name: string;
  price: number;
  img: string;
  count?: number;
  description: string;
}

export interface IinistialStateBasket {
  list: IProduct[];
}

export interface IinistialStateToast {
  severity: string;
  toggle: boolean;
  message: string;
}
