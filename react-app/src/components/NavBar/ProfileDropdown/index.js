import React, { useState, useEffect } from 'react';
import ProfileDropdownMenu from './ProfileDropdownMenu';
import styles from './ProfileDropdown.module.css';

const ProfileDropdown = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  }

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (!showMenu) return;
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  return (
    <div>
      <button className={styles.profile} onClick={openMenu}>J</button>
      {showMenu && <ProfileDropdownMenu />}
    </div>
  );
};

export default ProfileDropdown;
