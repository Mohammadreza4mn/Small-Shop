import * as actionTypes from "./action";
import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { IinistialState } from "../utils/interface";

const inistialState: IinistialState = {
  basket: [],
};

export const basket = (state = inistialState, action: AnyAction) => {
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

      return {
        ...state,
        basket: flag.filter(({ id }) => id !== action.payload),
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

// const getBasket = (state:ReduxState) =>state.
