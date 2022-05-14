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

export const addProduct = (payload, side) => {
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
export const getListBasket = (payload, side) => {
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
export const updateBasket = (payload, side) => {
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
export const removeItemBasket = (payload, side) => {
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
