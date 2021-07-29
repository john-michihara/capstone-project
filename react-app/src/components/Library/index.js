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
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.profile}>
            <div className={styles.image}>J</div>
            <div className={styles.names}>
              <h2 className={styles.username}>{user.username}</h2>
              <h3 className={styles.fullname}>John Smith</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.containerSets}>
        <div className={styles.offsetContainer}>
          <div className={styles.sets}>
            <div className={styles.setsHeader}>
              <button className={styles.button}>
                <span className={styles.filter}>Recent</span>
                <span className={styles.icon}>
                  <i className="fas fa-chevron-down" />
                </span></button>
              <form className={styles.form}>
                <span className={styles.icon}>
                  <i className="fas fa-search"></i>
                </span>
                <input className={styles.input} type='text' placeholder='Search your decks' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
    // <>
    //   <h1>Decks in users library</h1>
    //   {userDecks.map(deck => (
    //     <div>
    //       <span key={deck.id}>{deck.details.title}</span>
    //       <span key={deck.id}>{deck.details.updated_at}</span>
    //       <span key={deck.id}>{`Creator id: ${deck.details.creator_id}`}</span>
    //     </div>
    //   ))}

    //   <h1>Users created decks</h1>
    //   {createdDecks.map(deck => (
    //     <div>
    //       <span key={deck.id}>{deck.title}</span>
    //       <span key={deck.id}>{deck.updated_at}</span>
    //     </div>
    //   ))}

    //   <h1>Last Studied</h1>
    //   {userDecks.map(deck => (
    //     <div>
    //       <span key={deck.id}>{deck.details.title}</span>
    //       <span key={deck.id}>{`Last studied: ${deck.last_studied}`}</span>
    //     </div>
    //   ))}
    // </>
  );
};

export default Library;
