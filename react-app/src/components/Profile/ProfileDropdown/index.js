import React from 'react';
import styles from './ProfileDropdown.module.css';

const ProfileDropdownMenu = ({ setSelected }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.option} onClick={() => setSelected('Created')}>Created</div>
      <div className={styles.option} onClick={() => setSelected('Recent')}>Recent</div>
    </div>
  );
};

export default ProfileDropdownMenu;
