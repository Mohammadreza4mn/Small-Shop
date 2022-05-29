import { combineReducers } from "redux";
import basket from "./basket";
import toast from "./toast";
import loading from "./loading";
import { withReduxStateSync } from "redux-state-sync";

const rootReducer = combineReducers({
  basket,
  toast,
  loading,
});

export default withReduxStateSync(rootReducer);
