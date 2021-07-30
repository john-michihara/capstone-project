import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createDeck } from '../../store/decks';
import CreateDeckTitle from './CreateDeckTitle.js';
import CreateDeckDescription from './CreateDeckDescription';
import styles from './CreateDeckForm.module.css';

const CreateDeckForm = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [viewable, setViewable] = useState(false);

  const user = useSelector(state => state.session.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(createDeck(title, description, viewable, user.id));
    if (data) {
      setErrors(data);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.buttonContainer}>
          <div className={styles.marginContainer}>
            <h2 className={styles.title}>Create a new deck</h2>
            <button className={styles.button} type='submit'>Create</button>
          </div>
        </div>
        <div className={styles.container}>
          <div>
            {errors.map((error, idx) => (
              <div key={idx}>{error}</div>
            ))}
          </div>
          <CreateDeckTitle title={title} setTitle={setTitle} />
          <CreateDeckDescription description={description} setDescription={setDescription} />
          <div className={styles.import}>
            <button className={styles.importButton} type='button'>+ Import from Word, Excel, Google Docs, etc.</button>
            <div>
              <label className={styles.label}>Visible to Everyone</label>
              <input
                className={styles.viewable}
                type='checkbox'
                name='viewable'
                checked={viewable}
                onChange={e => setViewable(!viewable)}
              ></input>
            </div>
          </div>
        </div>
        <div className={styles.cardContainer}></div>
      </form>
    </>
  );
};

export default CreateDeckForm;
