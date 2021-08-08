import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './ProfileCreated.module.css';

const ProfileCreated = () => {
  const createdDecks = useSelector(state => Object.values(state.createdDecks))

  return (
    <div>
      {createdDecks.map(deck => (
        <Link className={styles.link} to={`/decks/${deck.id}`}>
          <div className={styles.container} key={deck.id}>
            <div className={styles.details}>
              <span className={styles.number}>{deck.cards.length} Terms</span>
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
        </Link>
      ))}
    </div>
  );
};

export default ProfileCreated;
