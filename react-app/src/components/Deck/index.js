import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDeck } from '../../store/decks';
import StudyControls from './StudyControls';
import DeckTerms from './DeckTerms';

const Deck = () => {
  const dispatch = useDispatch();
  const { deckId } = useParams();

  const deck = useSelector(state => state.decks[deckId]);

  useEffect(() => {
    // Page starts at different heights depending on the search...
    window.scrollTo(0, 0);
    dispatch(getDeck(deckId));
  }, [dispatch]);

  return (
    <>
      <StudyControls deck={deck} />
      <DeckTerms deck={deck} />
    </>
  );
};

export default Deck;
