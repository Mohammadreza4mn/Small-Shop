import axios from "axios";

const localhost = axios.create({
  baseURL: "http://localhost:3001/",
});

// product
export const productListAPI = () => localhost.get("products");
export const productInfoAPI = (id) => localhost.get(`products/${id}`);

// basket
export const addBasketAPI = (data) => localhost.post("shoppingCart", data);
export const basketListAPI = () => localhost.get("shoppingCart");
export const updateBasketAPI = (id, data) =>
  localhost.patch(`shoppingCart/${id}`, data);
export const removeItemBasketAPI = (id) =>
  localhost.delete(`shoppingCart/${id}`);
