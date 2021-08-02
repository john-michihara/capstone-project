import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../../Authentication/LogoutButton';
import styles from './ProfileDropdown.module.css';

const ProfileDropdownMenu = () => {
  const user = useSelector(state => state.session.user)

  return (
    <div className={styles.menu}>
      <Link className={styles.decks} to={`/profile/${user.username}`} exact={true}>Profile</Link>
      <LogoutButton />
    </div>
  );
};

export default ProfileDropdownMenu;
