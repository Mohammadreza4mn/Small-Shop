import { combineReducers } from "redux";
import basket from "./basket";
import toast from "./toast";

export default combineReducers({
  basket,
  toast,
});
