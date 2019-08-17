import { delay, takeLatest, all } from 'redux-saga/effects';
import ActionTypes from './constants';

export function* doLogin() {
  yield delay(100);
  window.localStorage.setItem('token', 'xxxxxxx');
}

export function* doLogout() {
  yield delay(100);
  window.localStorage.removeItem('token');
}

export function* watchLogin() {
  yield takeLatest(ActionTypes.LOG_IN, doLogin);
}

export function* watchLogout() {
  yield takeLatest(ActionTypes.LOG_OUT, doLogout);
}

export default function* watchAuthAll() {
  yield all([watchLogin(), watchLogout()]);
}
