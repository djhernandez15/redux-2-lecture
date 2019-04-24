import axios from "axios";

// Star Wars Ducks

// Initial State

const initialState = {
  characters: [],
  loading: true
};

// Action Types Go Here
const GET_SWAPI_CHARACTERS = "GET_SWAPI_CHARACTERS";

// Action Creators

export function getSwapiCharacters() {
  return {
    type: GET_SWAPI_CHARACTERS,
    payload: axios.get("https://swapi.co/api/people")
  };
}

// Reducer
export default function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case `${GET_SWAPI_CHARACTERS}_FULFILLED`:
      return {
        ...state,
        characters: action.payload.data.results,
        loading: false
      };

    default:
      return state;
  }
}
