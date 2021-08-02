import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/session';
import styles from './SplashLeft.module.css';

const SplashLeft = () => {
  const dispatch = useDispatch();

  const handleDemo = () => {
    (async () => {
      await dispatch(login('marnie@aa.io', 'password'));
    })();
  };

  return (
    <div className={styles.container}>
      <div className={styles.margin}>
        <h1 className={styles.title}>Become your most unstoppable self</h1>
        <p className={styles.subtitle}>Master any subject, one success at a time.</p>
        <div>
          <Link to='/login' exact={true}>
            <button className={styles.signupButton}>Get started</button>
          </Link>
          <button
            className={styles.demoButton}
            onClick={handleDemo}
          >
            Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplashLeft;
