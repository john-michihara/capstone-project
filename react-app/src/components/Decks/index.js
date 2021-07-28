import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDecks } from '../../store/decks';

const Decks = () => {
  const dispatch = useDispatch();
  const decks = useSelector(state => Object.values(state.decks));

  useEffect(() => {
    dispatch(getDecks());
  }, [dispatch]);

  return (
    <>
      <h1>Hello from Decks</h1>
      {
        decks.map(deck => (
          <div key={deck.id}>{deck.title}</div>
        ))
      }
    </>
  );
};

export default Decks;
