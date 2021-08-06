import React from 'react';
import { useSelector } from 'react-redux';
import NavBarLeft from './NavBarLeft';
import NavBarRight from './NavBarRight';
import styles from './NavBar.module.css';

const NavBar = () => {
  const user = useSelector(state => state.session.user);

  return (
    <nav className={styles.container}>
      <NavBarLeft user={user} />
      <NavBarRight user={user} />
    </nav>
  );
}

export default NavBar;
