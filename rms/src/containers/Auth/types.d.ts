import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface AuthState {
  readonly isLogin: boolean;
}

export type AuthActions = ActionType<typeof actions>;
