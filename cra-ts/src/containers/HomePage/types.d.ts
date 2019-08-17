import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { Post } from 'types/model';

/* --- STATE --- */

export interface HomeState {
  readonly loading: boolean;
  readonly error: object | boolean;
  readonly posts: Post[] | null;
}

export type HomeActions = ActionType<typeof actions>;
