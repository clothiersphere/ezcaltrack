import * as actionTypes from '../constants/actionTypes';

const initialState = [];

function getFoodSearch(state, action) {
  const food = action.results;
  return [...state, ...food];
}

export default function (state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.GET_FOOD_SEARCH:
      return getFoodSearch(newState, action);
    default:
      return state;
  }
}
