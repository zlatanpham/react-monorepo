import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types/app';
import { initialState } from './reducer';

const selectAuthState = (state: ApplicationRootState) => {
  return state.auth || initialState;
};

const makeSelectIsLogin = () =>
  createSelector(
    selectAuthState,
    authState => authState.isLogin,
  );

export { makeSelectIsLogin };
