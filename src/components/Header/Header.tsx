import { Link } from 'react-router-dom';
import { ConnectedProps, connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import type { TState } from '../../store/types/state';
import type { TActions } from '../../store/types/actions';

import { AppRoute, AuthStatus } from '../../constants';
import { logoutAction } from '../../services/api-actions';

const mapStateToProps = ({ authStatus }: TState) => ({
  authStatus,
});

const mapDispatchToProps = (dispatch: Dispatch<TActions>) => bindActionCreators({
  onLogout: logoutAction
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function Header({ authStatus, onLogout }: PropsFromRedux): JSX.Element {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Main} className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authStatus === AuthStatus.Auth && (
                <li className="header__nav-item user">
                  <Link
                    to={AppRoute.Favorites}
                    className="header__nav-link header__nav-link--profile"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
              )}
              <li className="header__nav-item">
                <Link to={AppRoute.Login} className="header__nav-link">
                  {authStatus === AuthStatus.Auth ? (
                    <span className="header__signout" onClick={() => onLogout()}>Sign out</span>
                  ) : (
                    <span className="header__login">Sign in</span>
                  )}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default connector(Header);
