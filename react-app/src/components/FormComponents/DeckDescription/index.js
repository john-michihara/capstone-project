import React, { useState } from 'react';
import styles from './DeckDescription.module.css';

const DeckDescription = ({ description, setDescription, errors }) => {
  const [highlight, setHighlight] = useState(false);

  return (
    <div>
      {!errors ?
        (description.length > 0 &&
          <label
            className={styles.label}
            style={
              highlight ?
                { color: 'rgb(68, 90, 176)' } :
                { color: 'rgb(148, 156, 179)' }
            }
          >Description</label>) :
        (<label className={styles.error}>
          {errors}
        </label>)
      }
      <textarea
        className={!errors ? styles.input : styles.errorInput}
        name='description'
        value={description}
        placeholder='Add an optional description...'
        style={
          !errors ?
            (description.length > 0 ?
              { padding: '28px 0 10px 20px' } :
              { padding: '20px 0 20px 20px' }) :
            ({ padding: '28px 0 10px 20px' })
        }
        onChange={e => setDescription(e.target.value)}
        onFocus={() => setHighlight(true)}
        onBlur={() => setHighlight(false)}
      ></textarea>
    </div>
  );
};

export default DeckDescription;
