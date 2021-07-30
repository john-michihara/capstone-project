import React, { useState, useEffect } from 'react';
import CreateDropdownMenu from './CreateDropdownMenu';
import styles from './CreateDropdown.module.css';

const CreateDropdown = () => {
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
    <div className={styles.container}>
      <button className={styles.button} onClick={openMenu}>
        <span>Create</span>
        <span className={styles.downIcon}>
          <i className="fas fa-chevron-down" />
        </span>
      </button>
      {showMenu && <CreateDropdownMenu />}
    </div>
  );
};

export default CreateDropdown;
