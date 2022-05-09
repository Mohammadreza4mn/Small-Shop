import * as actionTypes from "./action";

const inistialState: IinistialState = {
  basket: [],
};

interface IinistialState {
  basket: [];
}

const myReducer = (state = inistialState, action) => {
  switch (action.type) {
    case actionTypes.addProduct:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case actionTypes.incrementProduct: {
      let flag = [...state.basket];
      flag.find((item) => {
        if (item.location.street.number == action.payload) {
          item.count++;
        }
      });
      return {
        ...state,
        basket: flag,
      };
    }
    case actionTypes.decrementProduct: {
      let flag = [...state.basket];

      flag.find((item) => {
        if (item.location.street.number == action.payload) {
          if (item.count == 1) {
            flag.splice(
              flag.findIndex(
                (item) => item.location.street.number == action.payload
              ),
              1
            );
          } else {
            item.count--;
          }
        }
      });
      return {
        ...state,
        basket: flag,
      };
    }
    default:
      return state;
  }
};

export default myReducer;
