import { createStore, applyMiddleware, AnyAction, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { basket } from "./reducer";
import mySaga from "./sagas";
import { createWrapper, Context } from "next-redux-wrapper";
import { IinistialState } from "../utils/interface";

const bindMiddleware = (middleware) => {
  return applyMiddleware(...middleware);
};

export const makeStore = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(basket, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(mySaga);

  return store;
};

export const wrapper = createWrapper<Store<IinistialState>>(makeStore, {
  debug: true,
});
