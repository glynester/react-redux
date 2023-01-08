import counterReducer from './counter';
import loggedReducer from './islogged';  // Note name doesn't have to agree with (default) name of function exported from isLogged.js

import { combineReducers } from 'redux';

const allReducers = combineReducers(
  {
    counter: counterReducer,
    isLogged: loggedReducer} 
  );

  export default allReducers;