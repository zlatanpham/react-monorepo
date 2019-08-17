/**
 * The home state selectors
 */

import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types/app';
import { initialState } from './reducer';

const selectHomeState = (state: ApplicationRootState) => {
  return state.home || initialState;
};

const makeSelectHomeLoading = () =>
  createSelector(
    selectHomeState,
    homeState => homeState.loading,
  );

const makeSelectHomeError = () =>
  createSelector(
    selectHomeState,
    homeState => homeState.error,
  );

const makeSelectPosts = () =>
  createSelector(
    selectHomeState,
    homeState => homeState.posts,
  );

export { makeSelectHomeLoading, makeSelectHomeError, makeSelectPosts };
