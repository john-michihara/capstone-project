import React from 'react';
import styles from './DeckViewable.module.css';

const DeckViewable = ({ viewable, setViewable }) => {
  return (
    <div className={styles.import}>
      {/* <button className={styles.button} type='button'>+ Import from Word, Excel, Google Docs, etc.</button> */}
      <div>
        <label className={styles.label}>Visible to Everyone</label>
        <input
          className={styles.input}
          type='checkbox'
          name='viewable'
          checked={viewable}
          onChange={e => setViewable(!viewable)}
        ></input>
      </div>
    </div>
  );
};

export default DeckViewable;
