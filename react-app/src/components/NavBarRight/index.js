import React from 'react';
import styles from './NavBarRight.module.css';

const NavBarRight = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <span className={styles.icon}>
          <i className="fas fa-search"></i>
        </span>
        <input className={styles.input} type='text' placeholder='Search' />
      </form>
      <button className={styles.profile}>J</button>
    </div>
  );
};

export default NavBarRight;
