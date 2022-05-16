import axios from "axios";
import { IProduct } from "../utils/interface";

const localhost = axios.create({
  baseURL: "http://localhost:3001/",
});

// product
export const productListAPI = () => localhost.get("products");
export const productInfoAPI = (id: number) => localhost.get(`products/${id}`);

// basket
export const addBasketAPI = (data: IProduct) =>
  localhost.post("shoppingCart", data);
export const basketListAPI = () => localhost.get("shoppingCart");
export const updateBasketAPI = (id: number, data: IProduct) =>
  localhost.patch(`shoppingCart/${id}`, data);
export const removeItemBasketAPI = (id: number) =>
  localhost.delete(`shoppingCart/${id}`);
