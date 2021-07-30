import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createDeck } from '../../store/decks';
import CreateDeckTitle from './CreateDeckTitle.js';
import CreateDeckDescription from './CreateDeckDescription';
import styles from './CreateDeckForm.module.css';

const CreateDeckForm = () => {
  const dispatch = useDispatch();
  const [highlight, setHighlight] = useState(false)
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [viewable, setViewable] = useState(false);
  const [fields, setFields] = useState([{ front: '', back: '' }, { front: '', back: '' }]);

  const user = useSelector(state => state.session.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      description,
      viewable,
      creatorId: user.id
    };

    console.log(fields)
    const data = await dispatch(createDeck(formData, fields));
    if (data) {
      setErrors(data);
    }
  };

  const editCard = (e, idx, key) => {
    const newFields = [...fields];
    newFields[idx][key] = e.target.value;
    setFields(newFields);
  };

  const addCard = () => {
    const newFields = [...fields];
    newFields.push({ front: '', back: '' });
    setFields(newFields);
  };

  const deleteCard = (idx) => {
    const newFields = [...fields];
    newFields.splice(idx, 1);
    setFields(newFields);
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
        <div className={styles.cardsContainer}>
          <div className={styles.cardsMarginContainer}>
            {fields.map((field, idx) => (
              <div className={styles.cardContainer} key={idx}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardNumber}>{idx + 1}</span>
                  <span onClick={() => deleteCard(idx)} >
                    <i className="far fa-trash-alt"></i>
                  </span>
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
              <button className={styles.largeCreateButton}>Create</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateDeckForm;
