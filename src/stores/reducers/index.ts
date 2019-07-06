import { combineReducers } from 'redux';

import todos from './todos';
import currentFilter from './filters';

// https://redux.js.org/recipes/structuring-reducers/using-combinereducers#using-combinereducers
export default combineReducers({
  // states
  todos,
  currentFilter
});
