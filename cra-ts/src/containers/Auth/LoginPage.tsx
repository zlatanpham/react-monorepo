import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsLogin } from './selectors';
import { ApplicationRootState } from 'types/app';
import { AuthState } from './types';
import { Redirect } from '@reach/router';
import ROUTES from 'constants/routes';
import { login } from './actions';
import { useInjectSaga } from 'utils/injectSaga';
import authSaga from './saga';

const mapDispatchToProps = (dispatch: any) => ({
  doLogin: () => dispatch(login()),
});

const mapStateToProps = createStructuredSelector<
  ApplicationRootState,
  AuthState
>({
  isLogin: makeSelectIsLogin(),
});

export default function LoginPage() {
  useInjectSaga({ key: 'auth', saga: authSaga });

  const { isLogin } = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  const { doLogin } = mapDispatchToProps(dispatch);

  if (isLogin) {
    return <Redirect to={ROUTES.HOME} noThrow />;
  }

  return (
    <div className="px-2 py-5 min-h-screen flex items-center justify-center">
      <button
        className="px-5 py-2 bg-black text-white"
        onClick={() => doLogin()}
      >
        Login
      </button>
    </div>
  );
}
