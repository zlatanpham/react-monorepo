import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { Post } from 'types/model';

export interface PostState {
  readonly loading: boolean;
  readonly error: object | boolean;
  readonly post: Post | null;
}

export type PostActions = ActionType<typeof actions>;
