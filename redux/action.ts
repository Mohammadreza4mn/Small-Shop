import {
  IActionGetListBasket,
  IActionToast,
  IActionBasketUpdate,
  IActionBasketRemove,
  IActionAddBasket,
  IActionAddBasketSuccess,
  IActionGetListBasketSuccess,
  IActionBasketUpdateSuccess,
  IActionBasketRemoveSuccess,
  IActionToastDown,
} from "../utils/interface";

// basket
export enum Basket {
  addBasket = "addBasket",
  addBasketSuccess = "addBasketSuccess",
  getListBasket = "getListBasket",
  getListBasketSuccess = "getListBasketSuccess",
  updateBasket = "updateBasket",
  updateBasketSuccess = "updateBasketSuccess",
  removeItemBasket = "removeItemBasket",
  removeItemBasketSuccess = "removeItemBasketSuccess",
}

export const addBasket: IActionAddBasket = (payload) => {
  return { type: Basket.addBasket, payload };
};
export const addBasketSuccess: IActionAddBasketSuccess = (payload) => {
  return { type: Basket.addBasketSuccess, payload };
};
export const getListBasket: IActionGetListBasket = () => {
  return { type: Basket.getListBasket };
};
export const getListBasketSuccess: IActionGetListBasketSuccess = (payload) => {
  return { type: Basket.getListBasketSuccess, payload };
};
export const updateBasket: IActionBasketUpdate = (payload) => {
  return { type: Basket.updateBasket, payload };
};
export const updateBasketSuccess: IActionBasketUpdateSuccess = (payload) => {
  return { type: Basket.updateBasketSuccess, payload };
};
export const removeItemBasket: IActionBasketRemove = (payload) => {
  return { type: Basket.removeItemBasket, payload };
};
export const removeItemBasketSuccess: IActionBasketRemoveSuccess = (
  payload
) => {
  return { type: Basket.removeItemBasketSuccess, payload };
};

// toast
export enum Toast {
  toggle = "toggle",
}

export const toastError: IActionToast = (message) => {
  return {
    type: Toast.toggle,
    payload: { severity: "error", toggle: true, message: message },
  };
};
export const toastSuccess: IActionToast = (message) => {
  return {
    type: Toast.toggle,
    payload: { severity: "success", toggle: true, message: message },
  };
};
export const toastDown: IActionToastDown = () => {
  return { type: Toast.toggle, payload: { toggle: false } };
};
