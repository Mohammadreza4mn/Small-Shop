import axios from "axios";
import { IProductBasket } from "../utils/interface";

const localhost = axios.create({
  baseURL: "http://localhost:3001/",
});

// product
export const productListAPI = () => localhost.get("products");
export const productInfoAPI = (id: string) => localhost.get(`products/${id}`);

// basket
export const addBasketAPI = (data: IProductBasket) =>
  localhost.post("shoppingCart", data);
export const basketListAPI = () => localhost.get("shoppingCart");
export const updateBasketAPI = (id: number, data: { count: number }) =>
  localhost.patch(`shoppingCart/${id}`, data);
export const removeItemBasketAPI = (id: number) =>
  localhost.delete(`shoppingCart/${id}`);
