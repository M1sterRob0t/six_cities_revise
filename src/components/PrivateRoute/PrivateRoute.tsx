import {Route, Redirect} from 'react-router-dom';
import type { RouteProps } from 'react-router-dom';
import { AppRoute } from '../../utils/constants';
import React from 'react';

interface IPrivateRoute {
  render: () => JSX.Element;
  isAuthorized: boolean;
}

function PrivateRoute(props: IPrivateRoute & RouteProps): JSX.Element {
  const {exact, path, render, isAuthorized} = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        isAuthorized ? render() : <Redirect to={AppRoute.Login} />
      )}
    />
  );
}

export default PrivateRoute;
