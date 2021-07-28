const SET_DECKS = 'decks/SET_DECKS'

const setDecks = (decks) => ({
  type: SET_DECKS,
  decks
});

const initialState = {};

export const getDecks = () => async (dispatch) => {
  const response = await fetch('/api/decks');
  if (response.ok) {
    const { decks } = await response.json();
    dispatch(setDecks(decks));
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
    default:
      return state;
  }
}
