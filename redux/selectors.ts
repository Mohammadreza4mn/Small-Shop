import { RootState } from "./store";

export const selectBasket = (state: RootState) => state.basket;
export const selectToast = (state: RootState) => state.toast;
