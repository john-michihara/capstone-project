import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DeckTerms.module.css';

const DeckTerms = ({ deck }) => {
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
              className={styles.button}
              to={`/decks/${deck?.id}/edit`}
              exact={true}
            >
              Add or Remove Terms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeckTerms;
