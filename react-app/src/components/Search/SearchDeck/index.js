import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from '../../ProfilePic';
import styles from './SearchDeck.module.css';

const SearchDeck = ({ deck, selected, setSelected }) => {
  const [showButton, setShowButton] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setSelected(deck.id);
  };

  return (
    <Link className={styles.link} to={`/decks/${deck.id}`}>
      <div
        className={styles.container}
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
        style={selected === deck.id ?
          { borderBottom: '5px solid rgb(60, 207, 207)' } :
          { borderBottom: '5px solid rgb(255, 255, 255)' }
        }
      >
        <div className={styles.header}>
          <div>
            <h3 className={styles.title}>{deck.title}</h3>
            <p className={styles.terms}>{deck.cards.length} terms</p>
          </div>
          {showButton &&
            <button
              className={styles.button}
              onClick={handleClick}
            >Preview
            </button>
          }
        </div>
        <div className={styles.creatorDetails}>
          <div className={styles.imageContainer}>
            <ProfilePic user={deck.creator} />
          </div>
          <p className={styles.creator}>{deck.creator.username}</p>
        </div>
      </div>
    </Link >
  );
};

export default SearchDeck;
