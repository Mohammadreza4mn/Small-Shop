import { call, put, takeEvery, all } from "redux-saga/effects";
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
  loadingStart,
  loadingEnd,
  addBasket,
  updateBasket,
  removeItemBasket,
} from "./action";
import { ElementBasket, ElementProduct } from "../utils/enum";

function* handleAddBasket(action: ReturnType<typeof addBasket>) {
  try {
    yield put(
      loadingStart({
        store: "basket",
        element: ElementBasket.btn_add_basket + action.payload.id,
      })
    );

    yield call(addBasketAPI, action.payload);

    yield put(addBasketSuccess(action.payload));
    yield put(toastSuccess("محصول با موفقیت به سبد خرید اضافه شد"));
  } catch (error: any) {
    yield put(toastError(error.message));
  } finally {
    yield put(
      loadingEnd({
        store: "basket",
        element: ElementBasket.btn_add_basket + action.payload.id,
      })
    );
  }
}
function* handleGetBasket() {
  try {
    yield put(
      loadingStart({
        store: "basket",
        element: "badge__basket",
      })
    );

    const { data } = yield call(basketListAPI);

    yield put(getListBasketSuccess(data));
  } catch (error: any) {
    yield put(toastError(error.message));
  } finally {
    yield put(
      loadingEnd({
        store: "basket",
        element: "badge__basket",
      })
    );
  }
}
function* handleChangeCountProduct(action: ReturnType<typeof updateBasket>) {
  try {
    yield put(
      loadingStart({
        store: "basket",
        element: ElementBasket.span_product_count + action.payload.id,
      })
    );

    const { data } = yield call(
      updateBasketAPI,
      action.payload.id,
      action.payload.data
    );

    yield put(updateBasketSuccess(data));
  } catch (error: any) {
    yield put(toastError(error.message));
  } finally {
    yield put(
      loadingEnd({
        store: "basket",
        element: ElementBasket.span_product_count + action.payload.id,
      })
    );
  }
}
function* handleRemoveProduct(action: ReturnType<typeof removeItemBasket>) {
  try {
    yield put(
      loadingStart({
        store: "product",
        element: ElementProduct.card_product + action.payload,
      })
    );

    yield call(removeItemBasketAPI, action.payload);

    yield put(removeItemBasketSuccess(action.payload));
  } catch (error: any) {
    yield put(toastError(error.message));
  } finally {
    yield put(
      loadingEnd({
        store: "product",
        element: ElementProduct.card_product + action.payload,
      })
    );
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
