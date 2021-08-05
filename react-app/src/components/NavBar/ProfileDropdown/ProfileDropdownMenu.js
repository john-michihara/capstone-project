import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../../Authentication/LogoutButton';
import ProfilePic from '../../ProfilePic';
import styles from './ProfileDropdown.module.css';

const ProfileDropdownMenu = () => {
  const user = useSelector(state => state.session.user)

  return (
    <div className={styles.menu}>
      <div className={styles.userDetails}>
        <div className={styles.imageContainer}>
          <ProfilePic user={user} />
        </div>
        <div>{user?.username}</div>
      </div>
      <Link
        className={styles.decks}
        to={`/profile/${user.username}`}
        exact={true}>
        Profile
      </Link>
      <LogoutButton />
    </div>
  );
};

export default ProfileDropdownMenu;
