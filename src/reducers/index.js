import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import foodSearchResults from './getFoodSearch';

export default combineReducers({
  foodSearchResults,
  routing: routerReducer,
});
