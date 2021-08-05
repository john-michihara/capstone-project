import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ProfileRecent.module.css';
import ProfiePic from '../../ProfilePic';

const ProfileRecent = () => {
  const userDecks = useSelector(state => Object.values(state.userDecks))

  return (
    <div>
      {userDecks.map(deck => (
        <div className={styles.container} key={deck.details.id}>
          <div className={styles.details}>
            <div className={styles.number}>0 Terms</div>
            <div className={styles.imageContainer}>
              <ProfiePic user={deck.details.creator} />
            </div>
            <div className={styles.creator}>{deck.details.creator.username}</div>
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
