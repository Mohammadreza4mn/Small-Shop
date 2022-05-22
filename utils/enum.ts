// list element for loading
export enum ElementBasket {
  span_product_count = "span_product_count",
  btn_add_basket = "btn_add_basket",
  badge_basket = "badge_basket",
}
export enum ElementProduct {
  card_product = "card_product",
}

// action basket
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

// action toast
export enum Toast {
  toggle = "toggle",
}

// action loading
export enum Loading {
  start = "start",
  end = "end",
}
