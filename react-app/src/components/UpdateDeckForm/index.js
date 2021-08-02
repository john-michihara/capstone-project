import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DeckForm from '../FormComponents/DeckForm';
import CardsForm from '../FormComponents/CardsForm';

import { getDeck } from '../../store/decks';
import { updateDeck } from '../../store/decks';
import { deleteDeck } from '../../store/decks';
import styles from './UpdateDeckForm.module.css';

const UpdateDeckForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { deckId } = useParams();
  let deck = useSelector(state => state.decks[deckId]);
  const user = useSelector(state => state.session.user);
  const userId = parseInt(user.id);

  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [viewable, setViewable] = useState(false);
  const [fields, setFields] = useState([{ front: '', back: '' }, { front: '', back: '' }]);

  useEffect(() => {
    (async () => {
      await dispatch(getDeck(parseInt(deckId)));
    })();
  }, [dispatch, deckId]);

  useEffect(() => {
    (async () => {
      setTitle(deck?.title || title);
      setDescription(deck?.description || description);
      setViewable(deck?.public || viewable)
      setFields(deck?.cards || fields)
    })();
  }, [deck]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(updateDeck(deckId, title, description, viewable, fields, userId));
    if (data) {
      const errorsObj = {};
      data.forEach(error => {
        const [field, message] = error.split(' : ');
        errorsObj[field] = message;
      });
      setErrors(errorsObj);

    } else {
      await dispatch(getDeck(parseInt(deckId)));
    }
  };

  const handleDelete = async (e) => {
    const data = await dispatch(deleteDeck(parseInt(deckId)))
    if (data) {
      setErrors(data);
    } else {
      history.push('/');
    }
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <DeckForm
          header='Update your Deck'
          button='Done'
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          viewable={viewable}
          setViewable={setViewable}
          errors={errors}
        />
        <CardsForm
          button='Update'
          fields={fields}
          setFields={setFields}
        />
      </form>
      <button onClick={() => handleDelete(deckId)}>Delete Deck</button>
    </>
  );

};

export default UpdateDeckForm;
