import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDecks } from '../../store/decks';
import { getCreatedDecks } from '../../store/createdDecks';

const Decks = () => {
  const dispatch = useDispatch();
  const decks = useSelector(state => Object.values(state.decks));
  const createdDecks = useSelector(state => Object.values(state.createdDecks))
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(getDecks());
    dispatch(getCreatedDecks(user.id));
  }, [dispatch, user.id]);

  return (
    <>
      <h1>Hello from Decks</h1>
      {
        decks.map(deck => (
          <div key={deck.id}>{deck.title}</div>
        ))
      }
      {createdDecks.map(deck => (
        <div key={deck.id}>{deck.title}</div>
      ))}
    </>
  );
};

export default Decks;
