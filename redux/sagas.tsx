import React from 'react';
import { call, put, takeEvery, all } from 'redux-saga/effects'
import { getPercentageAPI, checkIpAPI } from '../libs/api';
import * as actionTypes from './action';

function* fetchPercentage(action) {

  try {
    const { data } = yield call(getPercentageAPI, action.payload.sName, action.payload.fName);

    yield put({ type: actionTypes.setSnackbar, payload: action.payload.fName + " & " + action.payload.sName + " " + data.result });
    yield put({ type: actionTypes.setResultCalculator, payload: data });
    yield put({ type: actionTypes.percentageApiSucceed, payload: true });

  } catch (error) {

    yield put({ type: actionTypes.percentageApiFailed, payload: true });
    yield put({ type: actionTypes.setSnackbar, payload: error.message });

  } finally {

    yield put({ type: actionTypes.setLoading, payload: false });
  }
}

function* handleCheckIp() {

  try {
    const { data } = yield call(checkIpAPI);
    if (data.success == true && data.country == "Iran") {
      yield put({ type: actionTypes.setSnackbar, payload: <div className='flex' dir='rtl'>فیلتر شکن شما خاموش است، در این برنامه از api استفاده شده است که ایران را تحریم کرده است، لطفا IP خود را به خارج ایران تغییر دهید</div> })
    }
  } catch (error) {
    yield put({ type: actionTypes.setSnackbar, payload: error.message });

  }
}

function* watching() {
  yield takeEvery(actionTypes.percentageApiRequest, fetchPercentage);
  yield takeEvery(actionTypes.checkIp, handleCheckIp);
}

export default function* mySaga() {
  yield all([watching()])
}