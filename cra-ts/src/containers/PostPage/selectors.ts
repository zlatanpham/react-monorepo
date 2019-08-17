import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types/app';
import { initialState } from './reducer';

const selectPostState = (state: ApplicationRootState) => {
  return state.post || initialState;
};

const makeSelectPostLoading = () =>
  createSelector(
    selectPostState,
    postState => postState.loading,
  );

const makeSelectPostError = () =>
  createSelector(
    selectPostState,
    postState => postState.error,
  );

const makeSelectPost = () =>
  createSelector(
    selectPostState,
    postState => postState.post,
  );

export { makeSelectPostLoading, makeSelectPostError, makeSelectPost };
