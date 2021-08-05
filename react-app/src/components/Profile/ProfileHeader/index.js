import React from 'react';
import { useSelector } from 'react-redux';
import ProfilePic from '../../ProfilePic';
import styles from './ProfileHeader.module.css';

const ProfileHeader = () => {
  const user = useSelector(state => state.session.user);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.profile}>
          <div className={styles.imageContainer}>
            <ProfilePic user={user} />
          </div>
          <div className={styles.names}>
            <h2 className={styles.username}>{user.username}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
