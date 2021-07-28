const SET_USER_DECKS = 'decks/SET_USER_DECKS';

const setUserDecks = (decks) => ({
  type: SET_USER_DECKS,
  userDecks: decks
});

const initialState = {};

export const getUserDecks = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/decks`);
  if (response.ok) {
    const { decks } = await response.json();
    console.log(decks)
    dispatch(setUserDecks(decks))
  }
};

export default function reducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case SET_USER_DECKS:
      newState = {};
      action.userDecks.forEach((deck, idx) => {
        newState[idx] = deck;
      })
      return {
        ...state,
        ...newState
      };
    default:
      return state;
  }
};
