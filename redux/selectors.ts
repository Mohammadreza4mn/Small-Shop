import { RootState } from "./store";
import { IInistialStateBasket, IInistialStateToast } from "../utils/interface";

export const selectBasket = (state: RootState): IInistialStateBasket =>
  state.basket;
export const selectToast = (state: RootState): IInistialStateToast =>
  state.toast;
