import React, { useState } from 'react';
import CardField from '../CardField';
import styles from './CardsForm.module.css';

const CardsForm = ({ button, fields, setFields }) => {
  const [highlight, setHighlight] = useState(false)

  const addCard = () => {
    const newFields = [...fields];
    newFields.push({ front: '', back: '' });
    setFields(newFields);
  };

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardsMarginContainer}>
        {fields.map((field, idx) => (
          <CardField
            fields={fields}
            setFields={setFields}
            field={field}
            idx={idx}
          />
        ))}
        <button
          type='button'
          onClick={addCard}
          className={styles.addButton}
          onMouseOver={() => setHighlight(true)}
          onMouseOut={() => setHighlight(false)}
        >
          <span
            className={styles.addButtonText}
            style={highlight ? { color: 'rgb(254, 204, 57)', borderBottom: '5px solid rgb(254, 204, 57)' } : { color: 'rgb(48, 53, 69)', borderBottom: '5px solid rgb(60, 207, 207)' }}
          >+ ADD CARD
          </span>
        </button>
        <div>
          <button className={styles.largeCreateButton}>{button}</button>
        </div>
      </div>
    </div>
  );
};

export default CardsForm;
