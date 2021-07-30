import React from 'react';
import { NavLink } from 'react-router-dom';
import CreateDropdown from '../CreateDropdown';
import styles from './NavBarLeft.module.css';

const NavBarLeft = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Flashcards</h1>
      <NavLink
        className={styles.home}
        activeClassName={styles.active}
        to='/' exact>
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
