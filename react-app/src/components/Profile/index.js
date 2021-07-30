import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDecks } from '../../store/userDecks';
import { getCreatedDecks } from '../../store/createdDecks';
import ProfileHeader from './ProfileHeader';
import ProfileDropdownMenu from './ProfileDropdown';
import ProfileRecent from './ProfileRecent';
import ProfileCreated from './ProfileCreated';
import styles from './Profile.module.css';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);

  const [showMenu, setShowMenu] = useState(false);
  const [selected, setSelected] = useState('Recent');

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  }

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (!showMenu) return;
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  useEffect(() => {
    dispatch(getUserDecks(user.id));
    dispatch(getCreatedDecks(user.id));
  }, [dispatch, user]);

  return (
    <>
      <ProfileHeader />
      <div className={styles.containerSets}>
        <div className={styles.offsetContainer}>
          <div className={styles.sets}>
            <div className={styles.setsHeader}>
              <button className={styles.button} onClick={openMenu}>
                <span className={styles.filter}>{selected}</span>
                <span className={styles.icon}>
                  <i className="fas fa-chevron-down" />
                </span>
              </button>
              {showMenu && <ProfileDropdownMenu setSelected={setSelected} />}
              <form className={styles.form}>
                <span className={styles.icon}>
                  <i className="fas fa-search"></i>
                </span>
                <input className={styles.input} type='text' placeholder='Search your decks' />
              </form>
            </div>
            {selected === 'Recent' && <ProfileRecent />}
            {selected === 'Created' && <ProfileCreated />}
            {selected === 'Studied' && (<h1>studied</h1>)}
          </div>
        </div>
      </div>
    </>
    // <>
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

export default Profile;
