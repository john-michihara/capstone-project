import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDeck } from '../../store/decks';
import StudyControls from './StudyControls';
import styles from './Deck.module.css';

const Deck = () => {
  const dispatch = useDispatch();
  const { deckId } = useParams();

  const deck = useSelector(state => state.decks[deckId]);

  useEffect(() => {
    dispatch(getDeck(deckId))
  }, [dispatch]);

  return (
    <StudyControls deck={deck} />
  );
};

export default Deck;
