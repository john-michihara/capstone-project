const SET_DECKS = 'decks/SET_DECKS'
const SET_CREATED_DECKS = 'decks/SET_CREATED_DECKS'

const setDecks = (decks) => ({
  type: SET_DECKS,
  decks
});

const setCreatedDecks = (decks) => ({
  type: SET_CREATED_DECKS,
  createdDecks: decks
})

const initialState = {};

export const getDecks = () => async (dispatch) => {
  const response = await fetch('/api/decks');
  if (response.ok) {
    const { decks } = await response.json();
    dispatch(setDecks(decks));
  }
}

export const getCreatedDecks = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/created`);
  if (response.ok) {
    const { decks } = await response.json();
    dispatch(setCreatedDecks(decks))
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
    case SET_CREATED_DECKS:
      new State = {};
      action.createdDecks.forEach(deck => {
        newState[deck.id] = deck;
      })
      return {
        ...state,
        ...newState
      }
    default:
      return state;
  }
}
