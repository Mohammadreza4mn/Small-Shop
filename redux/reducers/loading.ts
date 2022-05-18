import { Loading } from "../action";
import { AnyAction } from "redux";
import { IInistialStateLoading } from "../../utils/interface";

const inistialState: IInistialStateLoading = {
  basket: [],
};

const loading = (state = inistialState, action: AnyAction) => {
  const { store, element } = action.payload;

  switch (action.type) {
    case Loading.start:
      return {
        ...state,
        [store]: [...state[store], element],
      };
    case Loading.end:
      return {
        ...state,
        [store]: state[store].filter((item) => item !== element),
      };
    default:
      return state;
  }
};
export default loading;
