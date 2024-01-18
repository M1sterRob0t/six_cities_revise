import { ConnectedProps, connect } from 'react-redux';
import {Route, Redirect, RouteProps} from 'react-router-dom';

import { AppRoute, AuthStatus } from '../../constants';

import type { TState } from '../../store/types/state';
import Spinner from '../Spinner';


const mapStateToProps = ({ authStatus }: TState) => ({
  authStatus,
});

interface IPrivateRoute {
  render: () => JSX.Element;
}

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & IPrivateRoute & RouteProps;

function PrivateRoute(props: ConnectedComponentProps): JSX.Element {
  const {exact, path, render, authStatus} = props;

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

export default connector(PrivateRoute);
