import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createDeck } from '../../store/decks';
import styles from './CreateDeckForm.module.css';

const CreateDeckForm = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [viewable, setViewable] = useState(false);

  const [highlightTitle, setHighlightTitle] = useState(false);
  const [highlightDescription, setHighlightDescription] = useState(false);

  const user = useSelector(state => state.session.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(createDeck(title, description, viewable, user.id));
    if (data) {
      setErrors(data);
    }
  }

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


          <div>
            {title.length > 0 &&
              <label
                className={styles.titleLabel}
                style={
                  highlightTitle ?
                    { color: 'rgb(68, 90, 176)' } :
                    { color: 'rgb(148, 156, 179)' }
                }
              >Title</label>
            }
            <input
              className={styles.titleInput}
              type='text'
              name='title'
              onChange={e => setTitle(e.target.value)}
              value={title}
              placeholder='Enter a title, like "Biology - Chapter 22: Evolution'
              style={
                title.length > 0 ?
                  { padding: '30px 0 10px 20px' } :
                  { padding: '20px 0 20px 20px' }
              }
              onFocus={() => setHighlightTitle(true)}
              onBlur={() => setHighlightTitle(false)}
            ></input>
          </div>
          <div>
            {description.length > 0 &&
              <label
                className={styles.descriptionLabel}
                style={
                  highlightDescription ?
                    { color: 'rgb(68, 90, 176)' } :
                    { color: 'rgb(148, 156, 179)' }
                }
              >Description</label>
            }
            <textarea
              className={styles.descriptionInput}
              // type='text'
              name='description'
              onChange={e => setDescription(e.target.value)}
              value={description}
              placeholder='Add a description...'
              style={
                description.length > 0 ?
                  { padding: '28px 0 10px 20px' } :
                  { padding: '20px 0 20px 20px' }
              }
              onFocus={() => setHighlightDescription(true)}
              onBlur={() => setHighlightDescription(false)}
            ></textarea>
          </div>
          <div className={styles.import}>
            <button className={styles.importButton} type='button'>+ Import from Word, Excel, Google Docs, etc.</button>
            <div>
              <label>Visible to Everyone</label>
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
