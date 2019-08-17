import { HomeState, HomeActions } from './types';

import ActionTypes from './constants';
import produce from 'immer';

export const initialState: HomeState = {
  loading: false,
  error: false,
  posts: null,
};

const homeReducer = (
  state: HomeState = initialState,
  action: HomeActions,
): HomeState =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.FETCH_POSTS:
        draft.loading = true;
        draft.error = false;
        break;
      case ActionTypes.FETCH_POSTS_SUCCESS:
        draft.loading = false;
        draft.posts = action.payload;
        break;
      case ActionTypes.FETCH_POSTS_FAILURE:
        draft.loading = false;
        break;
    }
  });

export default homeReducer;
