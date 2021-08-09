import React from 'react';
import { NavLink } from 'react-router-dom';
import CreateDropdown from '../CreateDropdown';
import LibraryDropdown from '../LibraryDropdown';
import styles from './NavBarLeft.module.css';

const NavBarLeft = ({ user }) => {
  return (
    <div className={styles.container}>
      <NavLink to='/' className={styles.logo}>Quicklet</NavLink>
      <NavLink
        className={styles.home}
        activeClassName={styles.active}
        to={user ? '/home' : '/'}>
        Home
      </NavLink>
      {user && <LibraryDropdown />}
      {user && <CreateDropdown />}
    </div>
  );
};

export default NavBarLeft;
