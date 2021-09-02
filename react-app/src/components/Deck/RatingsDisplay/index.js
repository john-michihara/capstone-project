import React, { useEffect, useState } from "react";

import styles from "./RatingsDisplay.module.css";

const RatingsDisplay = ({ deck, setShowModal }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    calculateRating();
  }, [deck]);

  const calculateRating = () => {
    if (!deck?.ratings.length) return setRating(0);

    let sum = 0;
    deck?.ratings.forEach((rating) => (sum += rating.value));
    setRating((sum / deck?.ratings.length).toFixed(1));
  };

  const generateStars = () => {
    const stars = [];
    let total = rating;

    for (let i = 1; i <= 5; i++) {
      if (total - 1 >= 1 || total - 1 === 0) {
        stars.push(
          <span className={styles.star}>
            <i className="fas fa-star" />
          </span>
        );
      } else if (total - 1 > 0) {
        stars.push(
          <span className={styles.star}>
            <i className="fas fa-star-half-alt" />
          </span>
        );
      } else {
        stars.push(
          <span className={styles.star}>
            <i className="far fa-star" />
          </span>
        );
      }
      total -= 1;
    }
    return stars;
  };

  return (
    <div className={styles.ratingsContainer}>
      {deck?.ratings.length > 0 && (
        <>
          <div className={styles.rating}>{rating}</div>
          <div>{generateStars()}</div>
          <div className={styles.reviews}>
            <span>{deck.ratings.length} </span>
            <span>{deck.ratings.length === 1 ? "review" : "reviews"}</span>
          </div>
        </>
      )}
      <button
        className={styles.ratingsButton}
        type="button"
        onClick={() => setShowModal(true)}
      >
        Leave a rating
      </button>
    </div>
  );
};

export default RatingsDisplay;
