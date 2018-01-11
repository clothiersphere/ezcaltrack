import * as actionTypes from '../constants/actionTypes';

const initialState = [];

function foodSearch(state, action) {
  const { results } = action;
  return [...state, ...results];
}

export default function (state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.FOOD_SEARCH:
      return foodSearch(newState, action);
    default:
      return state;
  }
}
