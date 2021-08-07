import React from 'react';
import styles from './CardField.module.css';

const CardField = ({ fields, setFields, field, idx }) => {

  const editCard = (e, idx, key) => {
    const newFields = [...fields];
    newFields[idx][key] = e.target.value;
    setFields(newFields);
  };

  const deleteCard = (idx) => {
    const newFields = [...fields];
    newFields.splice(idx, 1);
    setFields(newFields);
  };

  return (
    <div className={styles.cardContainer} key={idx}>
      <div className={styles.cardHeader}>
        <span className={styles.cardNumber}>{idx + 1}</span>
        <div>
          <button
            className={styles.deleteButton}
            onClick={() => deleteCard(idx)}
            disabled={fields.length < 3}
          >
            <i className="far fa-trash-alt" />
          </button>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <input
            className={styles.input}
            type='text'
            value={field.front}
            onChange={e => editCard(e, idx, 'front')}
            placeholder='Enter term'
          ></input>
          <label className={styles.label}>TERM</label>
        </div>
        <div className={styles.content}>
          <input
            className={styles.input}
            type='text'
            value={field.back}
            onChange={e => editCard(e, idx, 'back')}
            placeholder='Enter definition'
          ></input>
          <label className={styles.label}>DEFINITION</label>
        </div>
      </div>
    </div>
  );
};

export default CardField;
