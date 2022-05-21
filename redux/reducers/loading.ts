import { Loading } from "../action";
import { AnyAction } from "redux";
import { IInistialStateLoading } from "../../utils/interface";

const inistialState: IInistialStateLoading = {
  basket: [],
};

const loading = (state = inistialState, action: AnyAction) => {
  switch (action.type) {
    case Loading.start:
      return {
        ...state,
        [action.payload.store]: [
          ...state[action.payload.store],
          action.payload.element,
        ],
      };
    case Loading.end:
      return {
        ...state,
        [action.payload.store]: state[action.payload.store].filter(
          (item) => item !== action.payload.element
        ),
      };
    default:
      return state;
  }
};
export default loading;
