import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileDropdown from '../ProfileDropdown';
import styles from './NavBarRight.module.css';

const NavBarRight = () => {
  const user = useSelector(state => state.session.user);

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <span className={styles.icon}>
          <i className="fas fa-search"></i>
        </span>
        <input className={styles.input} type='text' placeholder='Search' />
      </form>
      {user ?
        (<ProfileDropdown />) :
        (<div>
          <Link to='/login' exact={true}>
            <button className={styles.login}>Log in</button>
          </Link>
          <Link to='/sign-up'>
            <button className={styles.signup}>Sign up</button>
          </Link>
        </div>)}

    </div>
  );
};

export default NavBarRight;
