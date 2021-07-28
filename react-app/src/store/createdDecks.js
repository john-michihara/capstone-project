const SET_CREATED_DECKS = 'decks/SET_CREATED_DECKS';

const setCreatedDecks = (decks) => ({
  type: SET_CREATED_DECKS,
  createdDecks: decks
});

const initialState = {};

export const getCreatedDecks = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/created`);
  if (response.ok) {
    const { decks } = await response.json();
    dispatch(setCreatedDecks(decks))
  }
};

export default function reducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case SET_CREATED_DECKS:
      newState = {};
      action.createdDecks.forEach(deck => {
        newState[deck.id] = deck;
      })
      return {
        ...state,
        ...newState
      };
    default:
      return state;
  }
};
