import React, { useEffect } from "react";

import styles from "./RatingStar.module.css";

const RatingStar = (props) => {
  const {
    selectedRating,
    setSelectedRating,
    hoveredRating,
    setHoveredRating,
    value,
  } = props;

  useEffect(() => {
    setHoveredRating(selectedRating);
  }, [selectedRating]);

  const star =
    hoveredRating >= value ? (
      <i className="fas fa-star" />
    ) : (
      <i className="far fa-star" />
    );

  return (
    <button
      className={styles.star}
      onMouseOver={() => setHoveredRating(value)}
      onMouseLeave={() => setHoveredRating(selectedRating)}
      onClick={() => setSelectedRating(value)}
    >
      {star}
    </button>
  );
};

export default RatingStar;
