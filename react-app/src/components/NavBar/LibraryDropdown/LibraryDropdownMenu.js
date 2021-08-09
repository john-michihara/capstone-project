import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserDecks } from '../../../store/userDecks';
import ProfilePic from '../../ProfilePic';
import styles from './LibraryDropdown.module.css';

const LibraryDropdownMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const userDecks = useSelector(state => state.userDecks);

  const setUserDecks = async () => {
    await dispatch(getUserDecks(user.id));
  };

  useEffect(() => {
    setUserDecks();
  }, [dispatch]);

  return (
    <div className={styles.menu}>
      <div className={styles.header}>Decks</div>
      <div className={styles.scrollContainer}>
        {userDecks && Object.values(userDecks).map(deck => (
          <Link
            className={styles.link}
            to={`/decks/${deck.deck_id}`}
            key={deck.deck_id}>
            <div className={styles.container}>
              <div className={styles.title}>
                {deck.details.title}
              </div>
              <div className={styles.userDetails}>
                <div className={styles.imageContainer}>
                  <ProfilePic user={deck.details.creator} />
                </div>
                <div className={styles.username}>
                  {deck.details.creator.username}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <Link className={styles.libraryLink} to={`/profile/${user.username}`}>View all decks</Link>
      </div>
    </div>
  );
};

export default LibraryDropdownMenu;
