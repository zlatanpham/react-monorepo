import { call, put, takeLatest } from 'redux-saga/effects';
import { coreAPI } from 'utils/request';
import ActionTypes from './constants';
import { fetchPostSuccess, fetchPostFailure } from './actions';
import { PostActions } from './types';

export function* fetchPost(action: PostActions) {
  const { payload } = action;
  try {
    const { data } = yield call(coreAPI.get, `/posts/${payload}`);
    yield put(fetchPostSuccess(data));
  } catch (err) {
    yield put(fetchPostFailure(err));
    console.log(err);
  }
}

export default function* watchPost() {
  yield takeLatest(ActionTypes.FETCH_POST, fetchPost);
}
