import { AnyAction } from "redux";
import { IInistialStateLoading } from "../../utils/interface";
import { Loading } from "../../utils/enum";

const inistialState: IInistialStateLoading = {
  basket: [],
  product: [],
};
const loading = (state = inistialState, action: AnyAction) => {
  const {
    store,
    element,
  }: { store: keyof IInistialStateLoading; element: string } = action.payload;

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
