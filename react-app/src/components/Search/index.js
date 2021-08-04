import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDecksBySearch } from '../../store/search';
import SearchForm from './SearchForm';
import SearchDeck from './SearchDeck';
import styles from './Search.module.css';

const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { keyword } = useParams();

  const decks = useSelector(state => Object.values(state.search));
  const decksById = useSelector(state => state.search);

  const [searchQuery, setSearchQuery] = useState('');
  const [numResults, setNumResults] = useState(1);
  const [selected, setSelected] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault();
    history.push(`/search/${searchQuery}`)
    setNumResults(1);
    setSelected('');
  }

  const handleViewMore = () => {
    setNumResults(prev => prev + 1);
  };

  useEffect(() => {
    setSearchQuery(keyword);
    dispatch(getDecksBySearch(keyword));
  }, [dispatch, keyword]);

  useEffect(() => {
    setSelected(decks[0]?.id);
  }, [decksById]);

  return (
    <>
      <SearchForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <div className={styles.background}>
        <div className={styles.container}>
          {decks.length ?
            (
              <>
                <div className={styles.decksContainer}>
                  <h2>Study decks</h2>
                  {decks.slice(0, (6 * numResults)).map(deck =>
                    <SearchDeck deck={deck} selected={selected} setSelected={setSelected} />
                  )}
                  {decks.length > 6 * numResults &&
                    <button className={styles.viewMore} onClick={handleViewMore}>View more</button>
                  }
                </div>
                <div className={styles.cardsContainer}>
                  <h2>Deck preview</h2>
                  <div className={styles.details}>
                    <div className={styles.header}>
                      <h3 className={styles.title}>{decksById[selected]?.title}</h3>
                      <Link to={`/decks/${decksById[selected]?.id}`} exact={true}>
                        <button className={styles.button}>Study</button>
                      </Link>
                    </div>
                    {decksById && decksById[selected]?.cards.map(card => (
                      <div className={styles.card}>
                        <div className={styles.front}>{card.front}</div>
                        <div className={styles.back}>{card.back}</div>
                      </div>
                    ))}
                    <div className={styles.bottom}></div>
                  </div>
                </div>
              </>
            ) : (
              <div className={styles.noResultsContainer}>
                <h2 className={styles.noResultsTitle}>Sorry, we couldn't find any search results.</h2>
                <h3 className={styles.noResultsSubtitle}>Try searching with fewer or more general keywords</h3>
              </div>
            )}

        </div>
      </div>
    </>
  );
};

export default Search;
