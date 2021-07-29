import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDeck } from '../../store/decks';
import { updateDeck } from '../../store/decks';
import styles from './UpdateDeckForm.module.css';

const UpdateDeckForm = () => {
  const dispatch = useDispatch();
  const { deckId } = useParams();
  const deck = useSelector(state => state.decks[deckId]);
  const user = useSelector(state => state.session.user);
  const userId = parseInt(user.id);

  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [viewable, setViewable] = useState(false);

  useEffect(async () => {
    await dispatch(getDeck(parseInt(deckId)));
  }, [dispatch]);

  useEffect(async () => {
    setTitle(deck?.title || '');
    setDescription(deck?.description || '');
    setViewable(deck?.public || false)
  }, [deck]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(updateDeck(deckId, title, description, viewable, userId));
    if (data) {
      setErrors(data)
    }
  };

  return (
    <>
      <h1>Hello from UpdateDeckForm</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {errors.map((error, idx) => (
            <div key={idx}>{error}</div>
          ))}
        </div>
        <div>
          <label>Title</label>
          <input
            type='text'
            name='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Description</label>
          <input
            type='text'
            name='description'
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Public</label>
          <input
            type='checkbox'
            name='viewable'
            checked={viewable}
            onChange={e => setViewable(!viewable)}
          ></input>
        </div>
        <button type='submit'>Create</button>
      </form>
    </>
  );

};

export default UpdateDeckForm;
