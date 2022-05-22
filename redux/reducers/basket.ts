import { AnyAction } from "redux";
import { IInistialStateBasket } from "../../utils/interface";
import { Basket } from "../../utils/enum";

const inistialState: IInistialStateBasket = {
  list: [],
};

const basket = (state = inistialState, action: AnyAction) => {
  switch (action.type) {
    case Basket.addBasketSuccess:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case Basket.updateBasketSuccess: {
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
    case Basket.removeItemBasketSuccess: {
      let flag = [...state.list];

      return {
        ...state,
        list: flag.filter(({ id }) => id !== action.payload),
      };
    }
    case Basket.getListBasketSuccess:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
export default basket;
