// Breaking Bad Ducks

// Initial State

const initialState = {
  characters: [],
  loading: true
};

// Action Types Go Here
const GET_BAD_CHARACTERS = "GET_BAD_CHARACTERS";

// Action Creators

export function getBadCharacters(characters) {
  // this action creator expects an array of characters to be passed in
  // to see an action creator that uses axios, look at starWars.js
  return {
    type: GET_BAD_CHARACTERS,
    payload: characters
  };
}

// Reducer
export default function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case GET_BAD_CHARACTERS:
      return { ...state, characters: action.payload, loading: false };

    default:
      return state;
  }
}
