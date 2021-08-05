import React from 'react';
import styles from './CardsDisplay.module.css';

const CardsDisplay = ({ deck, showBack, setShowBack, page, setPage }) => {
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
    <div className={styles.container}>
      <div
        className={styles.card}
        onClick={() => setShowBack(!showBack)}
        style={showBack ? { transform: 'rotateX(180deg)' } : null}
      >
        <div className={`${styles.face} ${styles.front}`}>
          {deck?.cards[page - 1].back}
        </div>
        <div className={`${styles.face} ${styles.back}`}>
          {deck?.cards[page - 1].front}
        </div>
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
  );
};

export default CardsDisplay;
