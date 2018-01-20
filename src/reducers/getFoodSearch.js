import * as actionTypes from '../constants/actionTypes';

const initialState = [];

function updateFoodSearchState(state, action) {
  const food = action.results;
  return [...state, ...food];
}

export default function getFoodSearch(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.GET_FOOD_SEARCH:
      return updateFoodSearchState(newState, action);
    default:
      return state;
  }
}
