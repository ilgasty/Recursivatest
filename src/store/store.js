import {  combineReducers,  createStore } from "redux";

import { aReducer } from "../reducers/aReducer";

//const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const reducers=combineReducers({
  aut:aReducer
});

export const store=createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());