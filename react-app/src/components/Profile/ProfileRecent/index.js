import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ProfileRecent.module.css';

const ProfileRecent = () => {
  const userDecks = useSelector(state => Object.values(state.userDecks))

  return (
    <div>
      {userDecks.map(deck => (
        <div className={styles.container} key={deck.details.id}>
          <div className={styles.details}>
            <span className={styles.number}>0 Terms</span>
            <span className={styles.creator}>{deck.details.creator.username}</span>
          </div>
          <div>
            <span className={styles.title}>{deck.details.title}</span>
            {!deck.details.public && (
              <span className={styles.lock}>
                <i className="fas fa-lock"></i>
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileRecent;
