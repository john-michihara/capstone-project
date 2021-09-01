import React, { useState } from "react";

import RatingStar from "./RatingStar";
import styles from "./RatingsModal.module.css";

const RatingsModal = ({ setShowModal }) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [error, setError] = useState("");

  const generateRatingStars = () => {
    const ratingStars = [];
    for (let i = 1; i <= 5; i++) {
      ratingStars.push(
        <RatingStar
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          hoveredRating={hoveredRating}
          setHoveredRating={setHoveredRating}
          value={i}
        />
      );
    }
    return ratingStars;
  };

  const onClick = () => {
    if (selectedRating < 1) {
      setError("Select a star rating to submit");
      return;
    }
    setShowModal(false);
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2 className={styles.headerText}>How would you rate this deck?</h2>
          <button
            className={styles.headerButton}
            onClick={() => setShowModal(false)}
          >
            <i className="fas fa-times" />
          </button>
        </header>
        <main className={styles.main}>
          <section className={styles.ratings}>
            <h2
              className={styles.ratingsText}
              style={{ color: error && "red" }}
            >
              {error || "Select star rating"}
            </h2>
            <ul className={styles.stars}>{generateRatingStars()}</ul>
          </section>
          <section>
            <button
              type="button"
              className={styles.submitButton}
              onClick={onClick}
            >
              Submit
            </button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default RatingsModal;
