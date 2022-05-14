import { Toast } from "../action";
import { AnyAction } from "redux";
import { IinistialStateToast } from "../../utils/interface";

const inistialState: IinistialStateToast = {
  severity: "",
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
