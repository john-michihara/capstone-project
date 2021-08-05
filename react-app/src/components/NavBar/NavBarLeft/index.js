import React from 'react';
import { NavLink } from 'react-router-dom';
import CreateDropdown from '../CreateDropdown';
import styles from './NavBarLeft.module.css';

const NavBarLeft = () => {
  return (
    <div className={styles.container}>
      <NavLink to='/' exact={true} className={styles.logo}>Quicklet</NavLink>
      <NavLink
        className={styles.home}
        activeClassName={styles.active}
        to='/' exact={true}>
        Home
      </NavLink>
      <button className={styles.library}>
        <span className={styles.libraryText}>Your library</span>
        <span className={styles.icon}>
          <i className="fas fa-chevron-down" />
        </span>
      </button>
      <CreateDropdown />
    </div>
  );
};

export default NavBarLeft;
