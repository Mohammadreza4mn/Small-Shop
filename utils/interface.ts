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

export interface IActionBasket {
  parameter: {
    payload: IProduct;
    side?: string;
  };
  return: {
    type: string;
    payload: IProduct;
  };
}
