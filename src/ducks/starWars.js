import axios from "axios";
// Breaking Bad Ducks

// Initial State

const initialState = {
  characters: [],
  loading: true
};

// Action Types Go Here
export const SET_STARWARS_LOADING = "SET_STARWARS_LOADING";
export const GET_STARWARS_CHARACTERS = "GET_STARWARS_CHARACTERS";

//action creator
export function setStarWarsLoading(loading) {
  return {
    type: SET_STARWARS_LOADING,
    payload: loading
  };
}

export function getStarWarsCharacters() {
  return {
    type: GET_STARWARS_CHARACTERS,
    payload: axios.get("https://swapi.co/api/people")
  };
}

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_STARWARS_CHARACTERS}_FULFILLED`:
    console.log(action.payload)
      return { ...state, characters: action.payload.data.results, loading: false };
    case SET_STARWARS_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
