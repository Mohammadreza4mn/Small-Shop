import { call, put, takeEvery, all } from "redux-saga/effects";
import {
  basketListAPI,
  updateBasketAPI,
  removeItemBasketAPI,
  addBasketAPI,
} from "../libs/api";
import {
  addProduct,
  getListBasket,
  Basket,
  updateBasket,
  removeItemBasket,
  toastError,
  toastSuccess,
} from "./action";

function* handleAddToBasket(action) {
  try {
    yield call(addBasketAPI, action.payload);
    yield put(addProduct(action.payload, "client"));
    yield put(toastSuccess("محصول با موفقیت به سبد خرید اضافه شد"));
  } catch (error) {
    yield put(toastError(error.message));
  }
}
function* handleGetBasket() {
  try {
    const { data } = yield call(basketListAPI);

    yield put(getListBasket(data, "client"));
  } catch (error) {
    yield put(toastError(error.message));
  }
}
function* handleChangeCountProduct(action) {
  try {
    const { data } = yield call(
      updateBasketAPI,
      action.payload.id,
      action.payload.data
    );

    yield put(updateBasket(data, "client"));
  } catch (error) {
    yield put(toastError(error.message));
  }
}
function* handleRemoveProduct(action) {
  try {
    yield call(removeItemBasketAPI, action.payload);
    yield put(removeItemBasket(action.payload, "client"));
  } catch (error) {
    yield put(toastError(error.message));
  }
}

function* watching() {
  yield takeEvery(Basket.addProductServer, handleAddToBasket);
  yield takeEvery(Basket.updateBasketServer, handleChangeCountProduct);
  yield takeEvery(Basket.removeItemBasketServer, handleRemoveProduct);
}

export default function* mySaga() {
  yield all([call(handleGetBasket), watching()]);
}
