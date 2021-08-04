import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileDropdown from '../ProfileDropdown';
import styles from './NavBarRight.module.css';

const NavBarRight = () => {
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  const [keyword, setKeyword] = useState('');
  const [focus, setFocus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${keyword}`)
  };

  return (
    <div className={styles.container}>
      <form
        className={focus ? styles.focusForm : styles.form}
        onSubmit={handleSubmit}
      >
        <span className={focus ? styles.focusIcon : styles.icon}>
          <i className="fas fa-search"></i>
        </span>
        <input
          className={styles.input}
          name='keyword'
          type='text'
          placeholder='Search'
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          required={true}
        />
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
