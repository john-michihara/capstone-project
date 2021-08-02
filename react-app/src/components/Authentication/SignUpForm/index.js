import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session';
import { login } from '../../../store/session';
import styles from './SignUpForm.module.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const handleDemo = () => {
    (async () => {
      await dispatch(login('marnie@aa.io', 'password'));
    })();
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img src='/images/signup.svg' />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={onSignUp}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className={styles.field}>
            <label className={styles.label}>USERNAME</label>
            <input
              className={styles.input}
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
              placeholder='john123'
            ></input>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>EMAIL</label>
            <input
              className={styles.input}
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
              placeholder='user@mail.com'
            ></input>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>PASSWORD</label>
            <input
              className={styles.input}
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
              placeholder='⬤⬤⬤⬤⬤⬤⬤'
            ></input>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>REPEAT PASSWORD</label>
            <input
              className={styles.input}
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
              placeholder='⬤⬤⬤⬤⬤⬤⬤'
            ></input>
          </div>
          <div className={styles.buttonsContainer}>
            <button
              className={
                username && email && password && repeatPassword ?
                  styles.enabled :
                  styles.disabled}
              type='submit'
            >
              Sign up
            </button>
            <button className={styles.demo} type='button' onClick={handleDemo}>Demo</button>
          </div>
          <div className={styles.loginContainer}>
            <span>Already have an account?</span>
            <Link className={styles.link} to='/login' exact={true}>
              <span>Log in</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
