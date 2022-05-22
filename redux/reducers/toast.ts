import { AnyAction } from "redux";
import { IInistialStateToast } from "../../utils/interface";
import { Toast } from "../../utils/enum";

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
