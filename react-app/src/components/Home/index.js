import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDecks } from '../../store/userDecks';
import ProfilePic from '../ProfilePic';
import styles from './Home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const userDecks = useSelector(state => Object.values(state.userDecks));

  useEffect(() => {
    dispatch(getUserDecks(user.id));
  }, [dispatch]);

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.margin}>
          <div className={styles.headerContainer}>
            <h2 className={styles.title}>Recent</h2>
            <Link className={styles.link} to={`/profile/${user.username}`} exact={true}>
              <span>View all</span>
              <span className={styles.icon}>
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
          <div className={styles.decksContainer}>
            {userDecks && userDecks.slice(0, 6).map(deck => {
              return (
                <Link className={styles.deckLink} to={`/decks/${deck.deck_id}`} exact={true}>
                  <div className={styles.deckContainer}>
                    <div>
                      <h5 className={styles.deckTitle}>{deck.details.title}</h5>
                      <p className={styles.terms}>{deck.details.cards.length} terms</p>
                    </div>
                    <div className={styles.creatorDetails}>
                      <div className={styles.imageContainer}>
                        <ProfilePic user={deck.details.creator} />
                      </div>
                      <div className={styles.creator}>{deck.details.creator.username}</div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div >
  );
};

export default Home;
