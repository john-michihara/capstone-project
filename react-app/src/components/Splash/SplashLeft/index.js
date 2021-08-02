import React from 'react';
import styles from './SplashLeft.module.css';

const SplashLeft = () => {
  return (
    <div className={styles.container}>
      <div className={styles.margin}>
        <h1 className={styles.title}>Become your most unstoppable self</h1>
        <p className={styles.subtitle}>Master any subject, one success at a time.</p>
        <button className={styles.button}>Get started</button>
      </div>
    </div>
  );
};

export default SplashLeft;
