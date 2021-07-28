import React from 'react';
// import LogoutButton from '../auth/LogoutButton';
import NavBarLeft from '../NavBarLeft';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <NavBarLeft />
      <div className={styles.right}>
        <form className={styles.searchForm}>
          <span>
            <i className="fas fa-search"></i>
          </span>
          <input className={styles.searchInput} type='text' placeholder='Search' />
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
