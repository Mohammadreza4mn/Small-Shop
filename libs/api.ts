import axios from "axios";
import { IProductBasket } from "../utils/interface";

const jsonServer = axios.create({
  baseURL: "http://localhost:3001/",
});
const nextApiRoutes = axios.create({
  baseURL: "https://small-shop-snowy.vercel.app/api/",
});

// product
export const productListAPI = () => nextApiRoutes.get("products");
export const productInfoAPI = (id: string) =>
  nextApiRoutes.get(`products/${id}`);

// basket
export const addBasketAPI = (data: IProductBasket) =>
  jsonServer.post("shoppingCart", data);
export const basketListAPI = () => jsonServer.get("shoppingCart");
export const updateBasketAPI = (id: number, data: { count: number }) =>
  jsonServer.patch(`shoppingCart/${id}`, data);
export const removeItemBasketAPI = (id: number) =>
  jsonServer.delete(`shoppingCart/${id}`);
