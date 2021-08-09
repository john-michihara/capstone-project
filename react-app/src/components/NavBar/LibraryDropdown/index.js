import React, { useState, useEffect } from 'react';
import LibraryDropdownMenu from './LibraryDropdownMenu';
import styles from './LibraryDropdown.module.css';

const LibraryDropdown = () => {
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
    <>
      <button className={styles.button} onClick={openMenu}>
        <span className={styles.text}>Your library</span>
        <span className={styles.icon}>
          <i className="fas fa-chevron-down" />
        </span>
      </button>
      <div className={styles.testContainer}>
        {showMenu && <LibraryDropdownMenu />}
      </div>
    </>
  );
};

export default LibraryDropdown;
