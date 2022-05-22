import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware, { Task } from "redux-saga";
import rootReducer from "./reducers";
import mySaga from "./sagas";
import { createWrapper, Context } from "next-redux-wrapper";

interface SagaStore extends Store {
  sagaTask?: Task;
}

const bindMiddleware = (middleware: any) => {
  return applyMiddleware(...middleware);
};

export const makeStore = (context?: Context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store: SagaStore = createStore(
    rootReducer,
    bindMiddleware([sagaMiddleware])
  );

  store.sagaTask = sagaMiddleware.run(mySaga);

  return store;
};

let flag = makeStore();
export type RootState = ReturnType<typeof flag.getState>;
export type AppDispatch = typeof flag.dispatch;

export const wrapper = createWrapper(makeStore, {
  debug: true,
});
