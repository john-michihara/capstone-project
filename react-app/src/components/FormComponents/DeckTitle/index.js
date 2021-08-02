import React, { useState } from 'react';
import styles from './DeckTitle.module.css';

const DeckTitle = ({ title, setTitle, errors }) => {
  const [highlight, setHighlight] = useState(false);

  return (
    <div>
      {!errors ?
        (
          title.length > 0 &&
          <label
            className={styles.label}
            style={
              highlight ?
                { color: 'rgb(68, 90, 176)' } :
                { color: 'rgb(148, 156, 179)' }
            }
          >Title</label>
        ) :
        (<label className={styles.error}>
          {errors}
        </label>)
      }

      <input
        className={!errors ? styles.input : styles.errorInput}
        type='text'
        name='title'
        value={title}
        placeholder={!errors && 'Enter a title, like "Biology - Chapter 22: Evolution'}
        style={
          !errors ?
            (title.length > 0 ?
              { padding: '30px 0 10px 20px' } :
              { padding: '20px 0 20px 20px' }) :
            ({ padding: '30px 0 10px 20px' })
        }
        onChange={e => setTitle(e.target.value)}
        onFocus={() => setHighlight(true)}
        onBlur={() => setHighlight(false)}
      ></input>
    </div>
  );
};

export default DeckTitle;
