const SET_DECKS = 'decks/SET_DECKS';
const SET_DECK = 'decks/SET_DECK';
const REMOVE_DECK = 'decs/REMOVE_DECK';

const setDecks = (decks) => ({
  type: SET_DECKS,
  decks
});

const setDeck = (deck) => ({
  type: SET_DECK,
  deck
});

const removeDeck = (deck) => ({
  type: REMOVE_DECK,
  deck
})

const initialState = {};

export const getDecks = () => async (dispatch) => {
  const response = await fetch('/api/decks');
  if (response.ok) {
    const { decks } = await response.json();
    dispatch(setDecks(decks));
  }
};

export const getDeck = (id) => async (dispatch) => {
  const response = await fetch(`/api/decks/${id}`);
  if (response.ok) {
    const { deck } = await response.json();
    dispatch(setDeck(deck));
  }
}

export const createDeck = (formData, fields) => async (dispatch) => {
  const { title, description, viewable, creatorId } = formData;
  const deckResponse = await fetch('/api/decks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      description,
      viewable,
      creatorId,
    })
  });

  if (deckResponse.ok) {
    const deckData = await deckResponse.json();
    await Promise.all(
      fields.map(async field => {
        const { front, back } = field;
        return await fetch(`/api/decks/${parseInt(deckData.id)}/cards`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            front,
            back
          })
        });
      })
    );

    return deckData;

    // if (cardResponses.ok) {
    //   return null;
    // } else if (cardResponses.status < 500) {
    //   const cardsData = await cardResponses.json();
    //   if (cardsData.errors) {
    //     return cardsData.errors;
    //   }
    // } else {
    //   return ['An error occurred. Please try again.'];
    // }

  } else if (deckResponse.status < 500) {
    const deckData = await deckResponse.json();
    if (deckData) {
      return deckData;
    }
  } else {
    return ['An error occurred. Please try again.'];
  }
};

export const updateDeck = (id, title, description, viewable, fields, userId) => async (dispatch) => {
  const response = await fetch(`/api/decks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      description,
      viewable,
      fields,
      userId
    })
  });

  await fetch(`/api/decks/${id}/cards`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  await Promise.all(
    fields.map(async field => {
      const { front, back } = field;
      return await fetch(`/api/decks/${parseInt(id)}/cards`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          front,
          back
        })
      });
    })
  );

  if (response.ok) {
    const data = await response.json();
    dispatch(setDeck(data));
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

export const deleteDeck = (id) => async (dispatch) => {
  const response = await fetch(`/api/decks/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(removeDeck(data))
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

    case REMOVE_DECK:
      newState = { ...state };
      delete newState[action.deck.id];
      return {
        ...newState
      }

    default:
      return state;
  }
}
