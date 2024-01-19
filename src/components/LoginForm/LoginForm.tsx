import { FormEvent, useState } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { toast } from 'react-toastify';

import { loginAction } from '../../services/api-actions';
import { toastConfig } from '../../constants';

import type { TActions } from '../../store/types/actions';

const PASSWORD_INVALLID_MESSAGE = 'Password must contain at least one letter and one number!';
const EMAIL_INVALID_MESSAGE = 'Email must be correct!';

const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d).+$/;
const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const mapDispatchToProps = (dispatch: Dispatch<TActions>) =>
  bindActionCreators(
    {
      onLogin: loginAction,
    },
    dispatch
  );

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function LoginForm({ onLogin }: PropsFromRedux): JSX.Element {
  const [password, setPasswrod] = useState('');
  const [email, setEmail] = useState('');
  const [isPasswordInvalid, setPasswordInvalid] = useState(false);
  const [isEmailInvalid, setEmailInvalid] = useState(false);

  /* function checkIfPasswordInvalid(pass: string = password): void {
    if (pass.match(passwordRegexp)) {
      setPasswordInvalid(false);
    }
  }

  function checkIfEmailInvalid(mail: string = email): void {
    if (mail.match(emailRegexp)) {
      setEmailInvalid(true);
    }
  } */

  function onSubmit(evt: FormEvent) {
    evt.preventDefault();
    let isInvalid = false;

    if (!password.match(passwordRegexp)) {
      setPasswordInvalid(true);
      toast.warn(PASSWORD_INVALLID_MESSAGE, toastConfig);
      isInvalid = true;
    } else {
      setPasswordInvalid(false);
    }

    if (!email.match(emailRegexp)) {
      setEmailInvalid(true);
      toast.warn(EMAIL_INVALID_MESSAGE, toastConfig);
      isInvalid = true;
    } else {
      setEmailInvalid(false);
    }

    if (!isInvalid) {
      onLogin({
        email,
        password,
      });
    }
  }

  function onPasswordChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const pass = evt.target.value;
    setPasswrod(pass);

    if (!pass.match(passwordRegexp)) {
      setPasswordInvalid(true);
    } else {
      setPasswordInvalid(false);
    }
  }

  function onEmailChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const mail = evt.target.value;
    setEmail(mail);

    if (!mail.match(emailRegexp)) {
      setEmailInvalid(true);
    } else {
      setEmailInvalid(false);
    }
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
          onChange={onEmailChange}
          style={isEmailInvalid ? { border: '1px solid red' } : {}}
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          minLength={2}
          required
          value={password}
          onChange={onPasswordChange}
          style={isPasswordInvalid ? { border: '1px solid red' } : {}}
        />
      </div>
      <button className="login__submit form__submit button" type="submit" onClick={onSubmit}>
        Sign in
      </button>
    </form>
  );
}

export default connector(LoginForm);
