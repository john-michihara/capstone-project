const SET_DECKS = 'search/SET_DECKS';

const setDecks = (decks) => ({
  type: SET_DECKS,
  decks
});

const initialState = {};

export const getDecksBySearch = (searchQuery) => async (dispatch) => {
  const response = await fetch('/api/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ searchQuery })
  });

  if (response.ok) {
    const { filtered_decks } = await response.json();
    dispatch(setDecks(filtered_decks));
    return null;
  } else if (response.status < 500) {
    const { errors } = await response.json();
    if (errors) {
      return errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
};

export default function reducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case SET_DECKS:
      newState = {};
      action.decks.forEach(deck => {
        newState[deck.id] = deck;
      });
      return {
        ...newState
      };

    default:
      return state;
  }
}
