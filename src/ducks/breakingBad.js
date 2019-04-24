import axios from "axios";
// Breaking Bad Ducks

// Initial State

const initialState = {
  characters: [],
  loading: true,
  breakingBadLoading: true,
  starWarsLoading: true,
  starWars: []
};

// Action Types Go Here
export const SET_LOADING = "SET_LOADING";
export const GET_CHARACTERS = "GET_CHARACTERS";
//action creator
export function setLoading(loading) {
  return {
    type: SET_LOADING,
    payload: loading
  };
}

export function getCharacters() {
  return {
    type: GET_CHARACTERS,
    payload: axios.get(
      "https://www.breakingbadapi.com/api/character/random?limit=10"
    )
  };
}
// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_CHARACTERS}_FULFILLED`:
    console.log(action.payload)
      return { ...state, characters: action.payload.data, loading: false };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
