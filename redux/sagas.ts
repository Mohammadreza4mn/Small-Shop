import { call, put, takeEvery, all } from "redux-saga/effects";
import { AnyAction } from "redux";
import {
  basketListAPI,
  updateBasketAPI,
  removeItemBasketAPI,
  addBasketAPI,
} from "../libs/api";
import {
  getListBasketSuccess,
  Basket,
  updateBasketSuccess,
  removeItemBasketSuccess,
  toastError,
  toastSuccess,
  addBasketSuccess,
} from "./action";

function* handleAddBasket(action: AnyAction) {
  try {
    yield call(addBasketAPI, action.payload);
    yield put(addBasketSuccess(action.payload));
    yield put(toastSuccess("محصول با موفقیت به سبد خرید اضافه شد"));
  } catch (error: any) {
    yield put(toastError(error.message));
  }
}
function* handleGetBasket() {
  try {
    const { data } = yield call(basketListAPI);

    yield put(getListBasketSuccess(data));
  } catch (error: any) {
    yield put(toastError(error.message));
  }
}
function* handleChangeCountProduct(action: AnyAction) {
  try {
    const { data } = yield call(
      updateBasketAPI,
      action.payload.id,
      action.payload.data
    );

    yield put(updateBasketSuccess(data));
  } catch (error: any) {
    yield put(toastError(error.message));
  }
}
function* handleRemoveProduct(action: AnyAction) {
  try {
    yield call(removeItemBasketAPI, action.payload);
    yield put(removeItemBasketSuccess(action.payload));
  } catch (error: any) {
    yield put(toastError(error.message));
  }
}

function* watching() {
  yield takeEvery(Basket.addBasket, handleAddBasket);
  yield takeEvery(Basket.updateBasket, handleChangeCountProduct);
  yield takeEvery(Basket.removeItemBasket, handleRemoveProduct);
}

export default function* mySaga() {
  yield all([call(handleGetBasket), watching()]);
}
