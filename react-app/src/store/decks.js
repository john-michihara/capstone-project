const SET_DECKS = 'decks/SET_DECKS';
const SET_DECK = 'decks/SET_DECK';

const setDecks = (decks) => ({
  type: SET_DECKS,
  decks
});

const setDeck = (deck) => ({
  type: SET_DECK,
  deck
});

const initialState = {};

export const getDecks = () => async (dispatch) => {
  const response = await fetch('/api/decks');
  if (response.ok) {
    const { decks } = await response.json();
    dispatch(setDecks(decks));
  }
};

export const createDeck = (title, description, viewable, creatorId) => async (dispatch) => {
  const response = await fetch('/api/decks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      description,
      viewable,
      creatorId
    })
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setDeck(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.'];
  }
}

export default function reducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case SET_DECKS:
      newState = {};
      action.decks.forEach(deck => {
        newState[deck.id] = deck;
      });
      return {
        ...state,
        ...newState
      };

    case SET_DECK:
      newState = {};
      newState[action.deck.id] = action.deck;
      return {
        ...state,
        ...newState
      };

    default:
      return state;
  }
}
