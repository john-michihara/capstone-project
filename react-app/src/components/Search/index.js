import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDecksBySearch } from '../../store/search';
import styles from './Search.module.css';

const Search = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    await dispatch(getDecksBySearch(searchQuery));
  };

  return (
    <>
      <h1>Hello from Search</h1>
      <form onSubmit={handleSearch}>
        <input
          className={styles.input}
          name='searchQuery'
          type='text'
          value={searchQuery}
          placeholder='Enter search query'
          onChange={e => setSearchQuery(e.target.value)}
        ></input>
      </form>
    </>
  );
};

export default Search;
