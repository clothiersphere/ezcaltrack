import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import searchResults from './foodSearch';

export default combineReducers({
  searchResults,
  routing: routerReducer,
});
