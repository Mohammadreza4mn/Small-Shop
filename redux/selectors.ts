import { RootState } from "./store";
import { IinistialStateBasket, IinistialStateToast } from "../utils/interface";

export const selectBasket = (state: RootState): IinistialStateBasket =>
  state.basket;
export const selectToast = (state: RootState): IinistialStateToast =>
  state.toast;
