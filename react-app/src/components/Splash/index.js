import React from 'react';
import SplashLeft from './SplashLeft';
import SplashRight from './SplashRight';
import styles from './Splash.module.css';

const Splash = () => {
  return (
    <div className={styles.container}>
      <SplashLeft />
      <SplashRight />
    </div>
  );
};

export default Splash;
