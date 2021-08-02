import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../store/session';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  const handleDemo = () => {
    (async () => {
      await dispatch(login('marnie@aa.io', 'password'));
    })();
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img src='/images/login.svg' />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={onLogin}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor='email'>EMAIL</label>
            <input
              className={styles.input}
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor='password'>PASSWORD</label>
            <input
              className={styles.input}
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
            <div className={styles.buttonsContainer}>
              <button className={styles.login} type='submit'>Log in</button>
              <button className={styles.demo} type='button' onClick={handleDemo}>Demo</button>
            </div>
            <div className={styles.signupContainer}>
              <span>Don't have an account?</span>
              <Link className={styles.link} to='/sign-up' exact={true}>
                <span>Sign up</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
