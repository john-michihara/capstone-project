import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDeck } from '../../store/decks';
import styles from './Flashcards.module.css';

const Flashcards = () => {
  const dispatch = useDispatch();
  const { deckId } = useParams();
  const deck = useSelector(state => state.decks[deckId]);

  const [highlight, setHighlight] = useState(false);
  const [page, setPage] = useState(1);
  const [showBack, setShowBack] = useState(false);
  const [shuffled, setShuffled] = useState(false);
  const [shuffledCards, setShuffledCards] = useState([]);

  useEffect(() => {
    dispatch(getDeck(deckId));
  }, [dispatch]);

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

  const handleShuffle = () => {
    setShuffled(!shuffled);
    const cardsCopy = [...deck?.cards];
    setShuffledCards(cardsCopy.sort(() => Math.random() - 0.5));
  };

  return (
    <div className={styles.background}>
      <div className={styles.margin}>
        <div className={styles.leftContainer}>
          <Link className={styles.link} to={`/decks/${deckId}`}>
            <button
              className={styles.backButton}
              onMouseOver={() => setHighlight(true)}
              onMouseOut={() => setHighlight(false)}>
              <span className={highlight ? styles.backIconHighlight : styles.backIcon}>
                <i className="fas fa-chevron-left" />
              </span>
              <span>Back</span>
            </button>
          </Link>
          <div className={styles.leftContainerPadding}>
            <div>
              <div className={styles.header}>
                <span className={styles.headerIcon}>
                  <i className="fas fa-clone" />
                </span>
                <span>Flashcards</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progress}
                  style={{ width: `${(page / deck?.cards.length) * 100}%` }}></div>
              </div>
              <div className={styles.progressText}>
                <div>Progress</div>
                <div>{page}/{deck?.cards.length}</div>
              </div>
            </div>
            <button className={shuffled ? styles.shuffleButtonOn : styles.shuffleButton} onClick={handleShuffle}>
              <span className={styles.shuffleIcon}>
                <i className="fas fa-random" />
              </span>
              Shuffle
            </button>
          </div>
        </div>



        <div className={styles.rightContainer}>
          <div className={styles.container}>
            <div
              className={styles.card}
              onClick={() => setShowBack(!showBack)}
              style={showBack ? { transform: 'rotateX(180deg)' } : null}
            >
              <div
                className={`${styles.face} ${styles.front}`}
                style={showBack ? { color: 'black' } : { color: 'white' }}>
                <div></div>
                <div>{shuffled ? shuffledCards[page - 1].back : deck?.cards.[page - 1].back}</div>
                {page === 1 ? (<div className={styles.instructions}>Click card to see term</div>) : (<div className={styles.instructionsInvisible}></div>)}
              </div>
              <div
                className={`${styles.face} ${styles.back}`}>
                <div></div>
                {shuffled ? shuffledCards[page - 1].front : deck?.cards[page - 1].front}
                {page === 1 ? (<div className={styles.instructions}>Click card to see term</div>) : (<div className={styles.instructionsInvisible}>Nothing</div>)}
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
          </div >
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
