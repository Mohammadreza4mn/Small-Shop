import { RootState } from "./store";
import {
  IInistialStateBasket,
  IInistialStateToast,
  IInistialStateLoading,
} from "../utils/interface";

export const selectBasket = (state: RootState): IInistialStateBasket =>
  state.basket;
export const selectToast = (state: RootState): IInistialStateToast =>
  state.toast;
export const selectLoading = (state: RootState): IInistialStateLoading =>
  state.loading;
