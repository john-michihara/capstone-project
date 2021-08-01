import React, { useState } from 'react';
import { getDecks } from '../../../store/decks';
import styles from './StudyControls.module.css';

const StudyControls = ({ deck }) => {
  const [page, setPage] = useState(1);
  const [showBack, setShowBack] = useState(false);

  const handleLeftClick = () => {
    if (page > 1) {
      setPage(page - 1);
      setShowBack(false);
    }
  };

  const handleRightClick = () => {
    if (page < deck?.cards.length) {
      setPage(page + 1);
      setShowBack(false);
    }
  };

  return (
    <div className={styles.margins}>
      <div className={styles.header}>
        <h2 className={styles.title}>{deck?.title}</h2>
        <div>Created by {deck?.creator.username}</div>
      </div>
      <div className={styles.container}>
        <div className={styles.buttons}>
          <div className={styles.buttonsHeader}>STUDY</div>
          <div className={styles.buttonContainer}>
            <span className={styles.buttonIcon}>
              <i className="fas fa-clone" />
            </span>
            <span>Flashcards</span>
          </div>
          <div className={styles.buttonContainer}>
            <span className={styles.buttonIcon}>
              <i className="fas fa-pen" />
            </span>
            <span>Write</span>
          </div>
          <div className={styles.buttonContainer}>
            <span className={styles.buttonIcon}>
              <i className="fas fa-copy" />
            </span>
            <span>Test</span>
          </div>
        </div>
        <div className={styles.display}>
          <div
            className={styles.card}
            onClick={() => setShowBack(!showBack)}
          >
            {showBack ?
              (<div>{deck?.cards[page - 1].back}</div>) :
              (<div>{deck?.cards[page - 1].front}</div>)
            }
          </div>
          <div className={styles.pageButtons}>
            <span
              className={page === 1 ?
                styles.disabled :
                styles.pageButton
              }
              onClick={handleLeftClick}
            >
              <i className="fas fa-arrow-left" />
            </span>
            <span className={styles.pages}>{page}/{deck?.cards.length}</span>
            <span
              className={page === deck?.cards.length ?
                styles.disabled :
                styles.pageButton
              }
              onClick={handleRightClick}
            >
              <i className="fas fa-arrow-right" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyControls;
