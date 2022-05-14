import { call, put, takeEvery, all } from "redux-saga/effects";
import {
  basketListAPI,
  updateBasketAPI,
  removeItemBasketAPI,
  addBasketAPI,
} from "../libs/api";
import * as actionTypes from "./action";

function* handleAddToBasket(action) {
  try {
    yield call(addBasketAPI, action.payload);

    yield put({ type: actionTypes.addProductStore, payload: action.payload });
  } catch (error) {
    //yield put({ type: actionTypes.setSnackbar, payload: error.message });
    console.log(error.message);
  }
}
function* handleGetBasket() {
  try {
    const { data } = yield call(basketListAPI);

    yield put({ type: actionTypes.setListBasket, payload: data });
  } catch (error) {
    //yield put({ type: actionTypes.setSnackbar, payload: error.message });
    console.log(error.message);
  }
}
function* handleChangeCountProduct(action) {
  try {
    const { data } = yield call(
      updateBasketAPI,
      action.payload.id,
      action.payload.data
    );

    yield put({ type: actionTypes.updateBasketStore, payload: data });
  } catch (error) {
    //yield put({ type: actionTypes.setSnackbar, payload: error.message });
    console.log(error.message);
  }
}
function* handleRemoveProduct(action) {
  try {
    yield call(removeItemBasketAPI, action.payload);

    yield put({
      type: actionTypes.removeProductBasketStore,
      payload: action.payload,
    });
  } catch (error) {
    //yield put({ type: actionTypes.setSnackbar, payload: error.message });
    console.log(error.message);
  }
}

function* watching() {
  yield takeEvery(actionTypes.addProductServer, handleAddToBasket);
  yield takeEvery(actionTypes.getListBasket, handleGetBasket);
  yield takeEvery(actionTypes.updateBasketServer, handleChangeCountProduct);
  yield takeEvery(actionTypes.removeProductBasketServer, handleRemoveProduct);
}

export default function* mySaga() {
  yield all([watching()]);
}
