import React, { lazy } from 'react';
import { Router as ReachRouter } from '@reach/router';
import ROUTES from './constants/routes';
import ComponentRoute from 'components/ComponentRoute';
import LoginPage from 'containers/Auth/LoginPage';
import Dashboard from 'containers/Dashboard';

const HomePage = lazy(() => import('containers/HomePage'));
const PostPage = lazy(() => import('containers/PostPage'));

const Routes = () => {
  return (
    <ReachRouter>
      <ComponentRoute path={ROUTES.LOGIN} Component={LoginPage} />
      <Dashboard path="/">
        <ComponentRoute path={ROUTES.HOME} Component={HomePage} />
        <ComponentRoute path={ROUTES.POST} Component={PostPage} />
      </Dashboard>
    </ReachRouter>
  );
};

export default Routes;
