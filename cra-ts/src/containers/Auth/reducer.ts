import { AuthActions, AuthState } from './types';

import ActionTypes from './constants';
import produce from 'immer';

export const initialState: AuthState = {
  isLogin: !!window.localStorage.getItem('token'),
};

const authReducer = (
  state: AuthState = initialState,
  action: AuthActions,
): AuthState =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.LOG_IN:
        draft.isLogin = true;
        break;
      case ActionTypes.LOG_OUT:
        draft.isLogin = false;
        break;
    }
  });

export default authReducer;
