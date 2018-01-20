import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import foodSearchResults from './getFoodSearch';
import nutritionalInfo from './getFoodById';

export default combineReducers({
  foodSearchResults,
  nutritionalInfo,
  routing: routerReducer,
});
