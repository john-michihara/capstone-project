import React, { useState } from 'react';
import styles from './DeckDescription.module.css';

const DeckDescription = ({ description, setDescription }) => {
  const [highlight, setHighlight] = useState(false);

  return (
    <div>
      {description.length > 0 &&
        <label
          className={styles.label}
          style={
            highlight ?
              { color: 'rgb(68, 90, 176)' } :
              { color: 'rgb(148, 156, 179)' }
          }
        >Description</label>
      }
      <textarea
        className={styles.input}
        name='description'
        value={description}
        placeholder='Add a description...'
        style={
          description.length > 0 ?
            { padding: '28px 0 10px 20px' } :
            { padding: '20px 0 20px 20px' }
        }
        onChange={e => setDescription(e.target.value)}
        onFocus={() => setHighlight(true)}
        onBlur={() => setHighlight(false)}
      ></textarea>
    </div>
  );
};

export default DeckDescription;
