import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware, { Task } from "redux-saga";
import rootReducer from "./reducers";
import mySaga from "./sagas";
import { createWrapper, Context } from "next-redux-wrapper";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";
import { Basket } from "../utils/enum";

interface SagaStore extends Store {
  sagaTask?: Task;
}

const bindMiddleware = (middleware: any) => {
  return applyMiddleware(...middleware);
};

export const makeStore = (context?: Context) => {
  const sagaMiddleware = createSagaMiddleware();
  const configSyncMiddleware = {
    whitelist: [
      Basket.updateBasketSuccess,
      Basket.addBasketSuccess,
      Basket.removeItemBasketSuccess,
    ],
  };

  const store: SagaStore = createStore(
    rootReducer,
    bindMiddleware([
      sagaMiddleware,
      createStateSyncMiddleware(configSyncMiddleware),
    ])
  );

  initMessageListener(store);
  store.sagaTask = sagaMiddleware.run(mySaga);

  return store;
};

let flagStore = createStore(rootReducer);
export type RootState = ReturnType<typeof flagStore.getState>;
export type AppDispatch = typeof flagStore.dispatch;

export const wrapper = createWrapper(makeStore, {
  debug: true,
});
