import React from 'react';
// import LogoutButton from '../auth/LogoutButton';
import NavBarLeft from './NavBarLeft';
import NavBarRight from './NavBarRight';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <NavBarLeft />
      <NavBarRight />
    </nav>
  );
}

export default NavBar;
