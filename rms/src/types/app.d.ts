import { Reducer, Store } from 'redux';
import { RouterState } from 'connected-react-router';
import { HomeState } from 'containers/HomePage/types';
import { AuthState } from 'containers/Auth/types';
import { PostState } from 'containers/PostPage/types';

export interface LifeStore extends Store {
  injectedReducers: any;
  injectedSagas: any;
  runSaga(
    saga: (() => IterableIterator<any>) | undefined,
    args: any | undefined,
  ): any;
}

export interface InjectReducerParams {
  key: keyof ApplicationRootState;
  reducer: Reducer<any, any>;
}

export interface InjectSagaParams {
  key: keyof ApplicationRootState;
  saga: () => IterableIterator<any>;
  mode?: string | undefined;
}

// Your root reducer type, which is your redux state types also
export interface ApplicationRootState {
  readonly auth: AuthState;
  readonly home: HomeState;
  readonly post: PostState;
}
