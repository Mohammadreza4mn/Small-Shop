export interface IProduct {
  id: number;
  name: string;
  price: number;
  img: string;
  count?: number;
  description: string;
}

export interface IinistialState {
  list: IProduct[];
}
