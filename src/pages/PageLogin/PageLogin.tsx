import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';

import { AppRoute, AuthStatus } from '../../constants';
import { getUserAuthStatus } from '../../store/reducers/user-reducer/selectors';


function PageLogin(): JSX.Element {
  const authStatus = useSelector(getUserAuthStatus);

  if(authStatus === AuthStatus.Auth) {
    return <Redirect to={AppRoute.Main} />;
  }

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PageLogin;
