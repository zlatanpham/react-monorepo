import { PostState, PostActions } from './types';

import ActionTypes from './constants';
import produce from 'immer';

export const initialState: PostState = {
  loading: false,
  error: false,
  post: null,
};

const postReducer = (
  state: PostState = initialState,
  action: PostActions,
): PostState =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.FETCH_POST:
        draft.loading = true;
        draft.error = false;
        break;
      case ActionTypes.FETCH_POST_SUCCESS:
        draft.loading = false;
        draft.post = action.payload;
        break;
      case ActionTypes.FETCH_POST_FAILURE:
        draft.loading = false;
        break;
    }
  });

export default postReducer;
