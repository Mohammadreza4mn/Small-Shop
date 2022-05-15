import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/index";
import mySaga from "./sagas";
import { createWrapper, Context } from "next-redux-wrapper";

const bindMiddleware = (middleware) => {
  return applyMiddleware(...middleware);
};

export const makeStore = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  store.sagaTask = sagaMiddleware.run(mySaga);

  return store;
};

let flag = makeStore();
export type RootState = ReturnType<typeof flag.getState>;
export type AppDispatch = typeof flag.dispatch;

export const wrapper = createWrapper(makeStore, {
  debug: true,
});
