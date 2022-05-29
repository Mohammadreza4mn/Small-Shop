import { combineReducers } from "redux";
import basket from "./basket";
import toast from "./toast";
import loading from "./loading";

export default combineReducers({
  basket,
  toast,
  loading,
});
