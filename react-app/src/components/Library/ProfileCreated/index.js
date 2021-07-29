import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ProfileCreated.module.css';

const ProfileCreated = () => {
  const createdDecks = useSelector(state => Object.values(state.createdDecks))

  return (
    <div>
      {createdDecks.map(deck => (
        <div className={styles.container}>
          <div className={styles.details}>
            <span className={styles.number}>0 Terms</span>
          </div>
          <div>
            <span className={styles.title}>{deck.title}</span>
            {!deck.public && (
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

export default ProfileCreated;
