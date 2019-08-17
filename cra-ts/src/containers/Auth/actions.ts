import { action } from 'typesafe-actions';
import ActionTypes from './constants';

export const login = () => action(ActionTypes.LOG_IN);
export const logout = () => action(ActionTypes.LOG_OUT);
