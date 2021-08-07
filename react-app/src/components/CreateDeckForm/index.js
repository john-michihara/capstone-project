import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createDeck } from '../../store/decks';
import DeckForm from '../FormComponents/DeckForm';
import CardsForm from '../FormComponents/CardsForm';
import styles from './CreateDeckForm.module.css';

const CreateDeckForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector(state => state.session.user);

  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [viewable, setViewable] = useState(false);
  const [fields, setFields] = useState([{ front: '', back: '' }, { front: '', back: '' }, { front: '', back: '' }, { front: '', back: '' }, { front: '', back: '' },]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      description,
      viewable,
      creatorId: user.id
    };

    const data = await dispatch(createDeck(formData, fields));
    if (data.errors) {
      const errorsObj = {};

      data.errors.forEach(error => {
        const [field, message] = error.split(' : ');
        errorsObj[field] = message;
      });
      setErrors(errorsObj);

    } else {
      history.push(`/decks/${data.id}`);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <DeckForm
          header='Create a new Deck'
          button='Create'
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          viewable={viewable}
          setViewable={setViewable}
          errors={errors}
        />
        <CardsForm
          button='Create'
          fields={fields}
          setFields={setFields}
        />
      </form>
    </>
  );
};

export default CreateDeckForm;
