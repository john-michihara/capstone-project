import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CardsDisplay from "../CardsDisplay";
import ProfilePic from "../../ProfilePic";
import RatingsModal from "../../RatingsModal";
import RatingsDisplay from "../RatingsDisplay";
import { deleteDeck } from "../../../store/decks";
import { createUserDeck } from "../../../store/userDecks";
import { getUserDecks } from "../../../store/userDecks";
import { deleteUserDeck } from "../../../store/userDecks";
import styles from "./StudyControls.module.css";

const StudyControls = ({ deck }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);
  const userDecks = useSelector((state) => state.userDecks);

  const [page, setPage] = useState(1);
  const [showBack, setShowBack] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(getUserDecks(user?.id));
    })();
  }, [dispatch]);

  const handleAdd = async () => {
    if (user.id === deck?.creator_id) return;
    await dispatch(createUserDeck(parseInt(user.id), parseInt(deck?.id)));
  };

  const handleRemove = async () => {
    if (user.id === deck?.creator_id) return;
    await dispatch(deleteUserDeck(parseInt(user.id), parseInt(deck?.id)));
    window.location.reload();
  };

  const handleEdit = () => {
    if (user.id !== deck?.creator_id) return;
    history.push(`/decks/${deck?.id}/edit`);
  };

  const handleDelete = async (e) => {
    if (user.id !== deck?.creator_id) return;
    await dispatch(deleteDeck(parseInt(deck?.id)));
    history.push("/");
    window.location.reload();
  };

  return (
    <>
      {showModal && (
        <RatingsModal
          deck={deck}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      <div className={styles.background}>
        <div className={styles.offset}>
          <div className={styles.margin}>
            <div className={styles.header}>
              <h2 className={styles.title}>{deck?.title}</h2>
              <div className={styles.creatorDetails}>
                <div className={styles.imageContainer}>
                  <ProfilePic user={deck?.creator} />
                </div>
                <div className={styles.createdByContainer}>
                  <div className={styles.createdBy}>Created by</div>
                  <div className={styles.creator}>{deck?.creator.username}</div>
                </div>
              </div>
            </div>
            <RatingsDisplay deck={deck} setShowModal={setShowModal} />
            <div className={styles.container}>
              <div className={styles.buttons}>
                <div className={styles.buttonsHeader}>STUDY</div>

                <Link
                  className={styles.link}
                  to={`/decks/${deck?.id}/flashcards`}
                >
                  <button className={styles.button}>
                    <span className={styles.buttonIcon}>
                      <i className="fas fa-clone" />
                    </span>
                    <span>Flashcards</span>
                  </button>
                </Link>

                {/* <button className={styles.button}>
                <span className={styles.buttonIcon}>
                  <i className="fas fa-keyboard" />
                </span>
                <span>Write</span>
              </button>

              <button className={styles.button}>
                <span className={styles.buttonIcon}>
                  <i className="fas fa-copy" />
                </span>
                <span>Test</span>
              </button> */}

                <div className={styles.marginContainer}>
                  <div className={styles.buttonsHeader}>DECK SETTINGS</div>

                  {user.id !== deck?.creator_id &&
                    (userDecks[deck?.id] ? (
                      <button
                        className={styles.button}
                        onClick={handleRemove}
                        disabled={user.id === deck?.creator_id}
                      >
                        <span className={styles.buttonIcon}>
                          <i className="fas fa-minus-circle" />
                        </span>
                        <span>Remove from Library</span>
                      </button>
                    ) : (
                      <button
                        className={styles.button}
                        onClick={handleAdd}
                        disabled={user.id === deck?.creator_id}
                      >
                        <span className={styles.buttonIcon}>
                          <i className="fas fa-plus-circle" />
                        </span>
                        <span>Add to Library</span>
                      </button>
                    ))}

                  <button
                    className={styles.button}
                    onClick={handleEdit}
                    disabled={user.id !== deck?.creator_id}
                  >
                    <span className={styles.buttonIcon}>
                      <i className="fas fa-pen" />
                    </span>
                    <span>Edit Deck</span>
                  </button>

                  <button
                    className={styles.button}
                    onClick={handleDelete}
                    disabled={user.id !== deck?.creator_id}
                  >
                    <span className={styles.buttonIcon}>
                      <i className="fas fa-copy" />
                    </span>
                    <span>Delete Deck</span>
                  </button>
                </div>
              </div>

              <CardsDisplay
                deck={deck}
                showBack={showBack}
                setShowBack={setShowBack}
                page={page}
                setPage={setPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudyControls;
