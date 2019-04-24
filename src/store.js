import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import breakingBad from "./ducks/breakingBad";
import starWars from "./ducks/starWars";

// combinedReducers is also sometimes called rootReducer
const combinedReducers = combineReducers({ starWars, breakingBad });
const store = createStore(combinedReducers, applyMiddleware(promise));

export default store;
