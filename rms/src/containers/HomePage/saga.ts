import { call, put, takeLatest } from 'redux-saga/effects';
import { coreAPI } from 'utils/request';
import ActionTypes from './constants';
import { fetchPostsSuccess, fetchPostsFailure } from './actions';

export function* fetchPosts() {
  try {
    const { data } = yield call(coreAPI.get, '/posts');
    yield put(fetchPostsSuccess(data));
  } catch (err) {
    yield put(fetchPostsFailure(err));
    console.log(err);
  }
}

export default function* watchPosts() {
  yield takeLatest(ActionTypes.FETCH_POSTS, fetchPosts);
}
