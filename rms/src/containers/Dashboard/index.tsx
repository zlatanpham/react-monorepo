import React, { Suspense } from 'react';
import { RouteComponentProps, Redirect } from '@reach/router';
import ErrorBoundary from 'components/ErrorBoundary';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsLogin } from 'containers/Auth/selectors';
import { ApplicationRootState } from 'types/app';
import { AuthState } from 'containers/Auth/types';
import ROUTES from 'constants/routes';
import { useInjectSaga } from 'utils/injectSaga';
import saga from '../Auth/saga';
import GlobalHeader from 'components/GlobalHeader';

const mapStateToProps = createStructuredSelector<
  ApplicationRootState,
  AuthState
>({
  isLogin: makeSelectIsLogin(),
});

const Dashboard: React.FunctionComponent<RouteComponentProps> = ({
  children,
}) => {
  useInjectSaga({ key: 'auth', saga });

  const { isLogin } = useSelector(mapStateToProps);
  if (!isLogin) {
    return <Redirect to={ROUTES.LOGIN} noThrow />;
  }

  return (
    <ErrorBoundary>
      <GlobalHeader />
      <div className="px-5 py-8 mx-auto" style={{ maxWidth: '1000px' }}>
        <Suspense fallback={null}>{children}</Suspense>
      </div>
    </ErrorBoundary>
  );
};

export default Dashboard;
