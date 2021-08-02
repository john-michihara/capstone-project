import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SplashLeft.module.css';

const SplashLeft = () => {
  return (
    <div className={styles.container}>
      <div className={styles.margin}>
        <h1 className={styles.title}>Become your most unstoppable self</h1>
        <p className={styles.subtitle}>Master any subject, one success at a time.</p>
        <Link to='/login' exact={true}>
          <button className={styles.button}>Get started</button>
        </Link>
      </div>
    </div>
  );
};

export default SplashLeft;
