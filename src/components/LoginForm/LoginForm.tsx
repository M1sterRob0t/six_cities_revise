import { FormEvent, useState } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { loginAction } from '../../services/api-actions';

import type { TActions } from '../../store/types/actions';


const mapDispatchToProps = (dispatch: Dispatch<TActions>) => bindActionCreators({
  onLogin: loginAction
}, dispatch);

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function LoginForm({onLogin}: PropsFromRedux): JSX.Element {
  const [password, setPasswrod] = useState('');
  const [email, setEmail] = useState('');

  function onSubmit(evt: FormEvent) {
    evt.preventDefault();

    onLogin({
      email,
      password
    });
  }

  return (
    <form className="login__form form" action="#" method="post" onSubmit={onSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={(evt) => setPasswrod(evt.target.value)}
        />
      </div>
      <button className="login__submit form__submit button" type="submit" onClick={onSubmit}>
        Sign in
      </button>
    </form>
  );
}

export default connector(LoginForm);
