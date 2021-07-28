import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import styles from './NavigationBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.logo}>App Name</h1>
        <NavLink
          className={styles.home}
          activeClassName={styles.active}
          to='/' exact>
          Home
        </NavLink>
        <button>Your library</button>
        <button>Create</button>
      </div>
      <div className={styles.right}>
        <form>
          <input type='text' placeholder='Search' />
        </form>
        <button>P</button>
      </div>
    </nav>

    // <nav>
    //   <ul>
    //     <li>
    //       <NavLink to='/' exact={true} activeClassName='active'>
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to='/login' exact={true} activeClassName='active'>
    //         Login
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to='/sign-up' exact={true} activeClassName='active'>
    //         Sign Up
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink to='/users' exact={true} activeClassName='active'>
    //         Users
    //       </NavLink>
    //     </li>
    //     <li>
    //       <LogoutButton />
    //     </li>
    //   </ul>
    // </nav>
  );
}

export default NavBar;
