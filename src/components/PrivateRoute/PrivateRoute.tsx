import {Route, Redirect, RouteProps} from 'react-router-dom';

import Spinner from '../Spinner';

import { AppRoute, AuthStatus } from '../../constants';
import { getUserAuthStatus } from '../../store/reducers/user-reducer/selectors';
import { useSelector } from 'react-redux';


interface IPrivateRoute {
  render: () => JSX.Element;
}

function PrivateRoute(props: IPrivateRoute & RouteProps): JSX.Element {
  const {exact, path, render} = props;
  const authStatus = useSelector(getUserAuthStatus);

  if (authStatus === AuthStatus.Unknown) {
    return <Spinner />;
  }

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authStatus === AuthStatus.Auth ? render() : <Redirect to={AppRoute.Login} />
      )}
    />
  );
}

export default PrivateRoute;
