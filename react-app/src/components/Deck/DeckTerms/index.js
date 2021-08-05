import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './DeckTerms.module.css';

const DeckTerms = ({ deck }) => {
  const user = useSelector(state => state.session.user);

  return (
    <div className={styles.container}>
      <div className={styles.offset}>
        <div className={styles.margin}>
          <div className={styles.header}>
            <h2>Terms in this set ({deck?.cards.length})</h2>
            {/* <select>
            <option>Original</option>
            <option>Alphabetical</option>
          </select> */}
          </div>
          <div className={styles.terms}>
            {deck?.cards.map(card => (
              <div className={styles.term} key={card.id}>
                <div className={styles.front}>{card.front}</div>
                <div className={styles.back}>{card.back}</div>
              </div>
            ))}
          </div>
          <div className={styles.buttonContainer}>
            <Link
              to={`/decks/${deck?.id}/edit`}
              exact={true}
            >
              <button
                className={styles.button}
                disabled={user.id !== deck?.creator_id}
              >
                Add or Remove Terms
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeckTerms;
