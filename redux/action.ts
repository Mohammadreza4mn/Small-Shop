import { IActionBasket, IActionToast } from "../utils/interface";

// basket
export enum Basket {
  addProductServer = "addProductServer",
  addProductStore = "addProductStore",
  getListBasketServer = "getListBasketServer",
  setListBasketStore = "setListBasketStore",
  updateBasketServer = "updateBasketServer",
  updateBasketStore = "updateBasketStore",
  removeItemBasketStore = "removeItemBasketStore",
  removeItemBasketServer = "removeItemBasketServer",
}
export const addProduct: IActionBasket = (payload, side) => {
  if (side == "client") {
    return {
      type: Basket.addProductStore,
      payload,
    };
  } else {
    return {
      type: Basket.addProductServer,
      payload,
    };
  }
};
export const getListBasket: IActionBasket = (payload, side) => {
  if (side == "client") {
    return {
      type: Basket.setListBasketStore,
      payload,
    };
  } else {
    return {
      type: Basket.getListBasketServer,
    };
  }
};
export const updateBasket: IActionBasket = (payload, side) => {
  if (side == "client") {
    return {
      type: Basket.updateBasketStore,
      payload,
    };
  } else {
    return {
      type: Basket.updateBasketServer,
      payload,
    };
  }
};
export const removeItemBasket: IActionBasket = (payload, side) => {
  if (side == "client") {
    return {
      type: Basket.removeItemBasketStore,
      payload,
    };
  } else {
    return {
      type: Basket.removeItemBasketServer,
      payload,
    };
  }
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
export const toastDown: IActionToast = () => {
  return {
    type: Toast.toggle,
    payload: { severity: "", toggle: false, message: "" },
  };
};
