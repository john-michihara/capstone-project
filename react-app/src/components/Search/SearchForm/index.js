import React from 'react';
import styles from './SearchForm.module.css';

const SearchForm = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <form className={styles.form} onSubmit={handleSearch}>
      <div className={styles.icon}>
        <i className="fas fa-search" />
      </div>
      <input
        className={styles.input}
        name='searchQuery'
        type='text'
        value={searchQuery}
        placeholder='Enter search query'
        onChange={e => setSearchQuery(e.target.value)}
      ></input>
    </form>
  );
};

export default SearchForm;
