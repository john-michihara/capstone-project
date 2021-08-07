import React from 'react';
import styles from './ProfilePic.module.css';

const ProfilePic = ({ user }) => {
  return (
    <img className={styles.profileImage} src={user?.profile_url} alt='Avatar' />
  );
};

export default ProfilePic;
