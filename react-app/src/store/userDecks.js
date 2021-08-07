const SET_USER_DECKS = 'decks/SET_USER_DECKS';
const SET_USER_DECK = 'decks/SET_USER_DECK';
const REMOVE_USER_DECK = 'decks/REMOVE_USER_DECK';

const setUserDecks = (decks) => ({
  type: SET_USER_DECKS,
  userDecks: decks
});

const setUserDeck = (deck) => ({
  type: SET_USER_DECK,
  userDeck: deck
});

const removeUserDeck = (deckId) => ({
  type: REMOVE_USER_DECK,
  deckId
})

const initialState = {};

export const getUserDecks = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/decks`);
  if (response.ok) {
    const { decks } = await response.json();
    dispatch(setUserDecks(decks))
  }
};

export const createUserDeck = (userId, deckId) => async (dispatch) => {
  const response = await fetch('/api/user_decks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      deckId
    })
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUserDeck(data));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data) {
      return data;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
};

export const deleteUserDeck = (userId, deckId) => async (dispatch) => {
  const response = await fetch(`/api/user_decks/${userId}/${deckId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(removeUserDeck(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
};

export default function reducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case SET_USER_DECKS:
      newState = {};
      action.userDecks.forEach((deck) => {
        newState[deck.deck_id] = deck;
      })
      return {
        ...state,
        ...newState
      };

    case SET_USER_DECK:
      newState = {};
      newState[action.userDeck.deck_id] = action.userDeck;
      return {
        ...state,
        ...newState
      };

    case REMOVE_USER_DECK:
      newState = { ...state };
      delete newState[action.deckId]
      return {
        ...newState
      };

    default:
      return state;
  }
};
