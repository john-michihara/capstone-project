import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDecks } from '../../store/userDecks';
import { getCreatedDecks } from '../../store/createdDecks';
import styles from './Library.module.css';

const Library = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const createdDecks = useSelector(state => Object.values(state.createdDecks))
  const userDecks = useSelector(state => Object.values(state.userDecks))

  useEffect(() => {
    dispatch(getUserDecks(user.id))
    dispatch(getCreatedDecks(user.id));
  }, [dispatch]);

  return (
    <>
      <h1>Decks in users library</h1>
      {userDecks.map(deck => (
        <div>
          <span key={deck.id}>{deck.details.title}</span>
          <span key={deck.id}>{deck.details.updated_at}</span>
          <span key={deck.id}>{`Creator id: ${deck.details.creator_id}`}</span>
        </div>
      ))}

      <h1>Users created decks</h1>
      {createdDecks.map(deck => (
        <div>
          <span key={deck.id}>{deck.title}</span>
          <span key={deck.id}>{deck.updated_at}</span>
        </div>
      ))}

      <h1>Last Studied</h1>
      {userDecks.map(deck => (
        <div>
          <span key={deck.id}>{deck.details.title}</span>
          <span key={deck.id}>{`Last studied: ${deck.last_studied}`}</span>
        </div>
      ))}
    </>
  );
};

export default Library;
