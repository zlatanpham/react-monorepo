import { action } from 'typesafe-actions';
import ActionTypes from './constants';
import { Post } from 'types/model';

export const fetchPost = (id: string) => action(ActionTypes.FETCH_POST, id);

export const fetchPostSuccess = (post: Post) =>
  action(ActionTypes.FETCH_POST_SUCCESS, post);

export const fetchPostFailure = (error: object) =>
  action(ActionTypes.FETCH_POST_FAILURE, error);
