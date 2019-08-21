import { action } from 'typesafe-actions';
import ActionTypes from './constants';
import { Post } from 'types/model';

export const fetchPosts = () => action(ActionTypes.FETCH_POSTS);

export const fetchPostsSuccess = (posts: Post[]) =>
  action(ActionTypes.FETCH_POSTS_SUCCESS, posts);

export const fetchPostsFailure = (error: object) =>
  action(ActionTypes.FETCH_POSTS_FAILURE, error);
