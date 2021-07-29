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

  const user = useSelector(state => state.session.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(createDeck(title, description, viewable, user.id))
    if (data) {
      setErrors(data);
    }
  }

  return (
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
          onChange={e => setTitle(e.target.value)}
          value={title}
        ></input>
      </div>
      <div>
        <label>Description</label>
        <input
          type='text'
          name='description'
          onChange={e => setDescription(e.target.value)}
          value={description}
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
  );
};

export default CreateDeckForm;
