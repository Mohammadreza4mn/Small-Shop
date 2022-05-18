import { Toast } from "../action";
import { AnyAction } from "redux";
import { IInistialStateToast } from "../../utils/interface";

const inistialState: IInistialStateToast = {
  severity: "info",
  toggle: false,
  message: "",
};

const toast = (state = inistialState, action: AnyAction) => {
  switch (action.type) {
    case Toast.toggle:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default toast;
