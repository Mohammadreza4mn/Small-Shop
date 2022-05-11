import * as actionTypes from "./action";
import { HYDRATE } from "next-redux-wrapper";
import { createStore, AnyAction, Store } from "redux";
import { IProduct } from "../components/product/Product";

export interface IinistialState {
  basket: IProduct[];
}
const inistialState: IinistialState = {
  basket: [],
};

const myReducer = (state = inistialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case actionTypes.addProductStore:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case actionTypes.updateBasketStore: {
      let flag = [...state.basket];

      flag.splice(
        flag.findIndex((item) => item.id == action.payload.id),
        1,
        action.payload
      );

      return {
        ...state,
        basket: flag,
      };
    }
    case actionTypes.removeProductBasketStore: {
      let flag = [...state.basket];

      flag.splice(
        flag.findIndex((item) => item.id == action.payload),
        1
      );

      return {
        ...state,
        basket: flag,
      };
    }
    case actionTypes.setListBasket:
      return {
        ...state,
        basket: action.payload,
      };
    default:
      return state;
  }
};

export default myReducer;
