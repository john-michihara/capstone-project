import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CreateDropdown.module.css';

const CreateDropdownMenu = () => {
  return (
    <div className={styles.menu}>
      <Link className={styles.decks} to='/create-deck'>
        <span className={styles.deckIcon}>
          <i className="far fa-clone"></i>
        </span>
        <span>Deck</span>
      </Link>
    </div>
  );
};

export default CreateDropdownMenu;
