import React from 'react';
import { RouteComponentProps } from '@reach/router';

export interface ComponentRouteProps extends RouteComponentProps {
  Component: React.FunctionComponent<RouteComponentProps>;
}

const ComponentRoute = ({ Component, ...rest }: ComponentRouteProps) => {
  return <Component {...rest} />;
};

export default ComponentRoute;
