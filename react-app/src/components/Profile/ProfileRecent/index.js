import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './ProfileRecent.module.css';
import ProfiePic from '../../ProfilePic';

const ProfileRecent = () => {
  const userDecks = useSelector(state => Object.values(state.userDecks))

  return (
    <div>
      {userDecks.map(deck => (
        <Link className={styles.link} to={`/decks/${deck.details.id}`}>
          <div className={styles.container} key={deck.details.id}>
            <div className={styles.details}>
              <div className={styles.number}>{deck.details.cards.length} Terms</div>
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
        </Link>
      ))}
    </div>
  );
};

export default ProfileRecent;
