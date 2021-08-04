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
    const errorsObj = {};
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {

        data.forEach(error => {
          const [field, message] = error.split(' : ');
          errorsObj[field] = message;
        });

        setErrors(errorsObj);
      }
    } else {
      errorsObj['repeat_password'] = 'Repeated password must match password'
      setErrors(errorsObj);
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
        <img src='signup.svg' />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={onSignUp}>
          <h1 className={styles.title}>Sign up</h1>
          <div className={styles.field}>
            {!errors.username ?
              (<label className={styles.label}>Username</label>) :
              (
                <>
                  <div className={styles.error}>{errors.server}</div>
                  <div className={styles.error}>{errors.username}</div>
                </>
              )
            }
            <input
              className={styles.input}
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
              placeholder='john123'
              style={errors.username ? { border: '1px solid rgb(253, 115, 96)' } : { border: null }}
            ></input>
          </div>
          <div className={styles.field}>
            {!errors.email ?
              (<label className={styles.label}>Email</label>) :
              (<div className={styles.error}>{errors.email}</div>)
            }
            <input
              className={styles.input}
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
              placeholder='user@mail.com'
              style={errors.email ? { border: '1px solid rgb(253, 115, 96)' } : { border: null }}
            ></input>
          </div>
          <div className={styles.field}>
            {!errors.password ?
              (<label className={styles.label}>Password</label>) :
              (<div className={styles.error}>{errors.password}</div>)
            }
            <input
              className={styles.input}
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
              placeholder='⬤⬤⬤⬤⬤⬤⬤'
              style={errors.password ? { border: '1px solid rgb(253, 115, 96)' } : { border: null }}
            ></input>
          </div>
          <div className={styles.field}>
            {!errors.repeat_password ?
              (<label className={styles.label}>Repeat Password</label>) :
              (<div className={styles.error}>{errors.repeat_password}</div>)
            }
            <input
              className={styles.input}
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
              placeholder='⬤⬤⬤⬤⬤⬤⬤'
              style={errors.repeat_password ? { border: '1px solid rgb(253, 115, 96)' } : { border: null }}
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
