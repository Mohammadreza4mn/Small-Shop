import * as actionTypes from "../action";
import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { IinistialState } from "../../utils/interface";

const inistialState: IinistialState = {
  list: [],
};

const basket = (state = inistialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }
    case actionTypes.addProductStore:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case actionTypes.updateBasketStore: {
      let flag = [...state.list];

      flag.splice(
        flag.findIndex((item) => item.id == action.payload.id),
        1,
        action.payload
      );

      return {
        ...state,
        list: flag,
      };
    }
    case actionTypes.removeProductBasketStore: {
      let flag = [...state.list];

      return {
        ...state,
        list: flag.filter(({ id }) => id !== action.payload),
      };
    }
    case actionTypes.setListBasket:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
export default basket;

// const getBasket = (state:ReduxState) =>state.
