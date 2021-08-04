import React, { useState } from 'react';
import CardsDisplay from '../CardsDisplay';
import styles from './StudyControls.module.css';

const StudyControls = ({ deck }) => {
  const [page, setPage] = useState(1);
  const [showBack, setShowBack] = useState(false);

  return (
    <div className={styles.background}>
      <div className={styles.offset}>
        <div className={styles.margin}>
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
            <CardsDisplay
              deck={deck}
              showBack={showBack}
              setShowBack={setShowBack}
              page={page}
              setPage={setPage}
            />
          </div>
        </div>
      </div >
    </div >
  );
};

export default StudyControls;
