import * as actionTypes from '../constants/actionTypes';

const initialState = {};

function updateNutritionalInfoState(state, action) {
  const nutritionalInfo = action.results;
  return nutritionalInfo;
}

export default function getFoodSearch(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.GET_FOOD_BY_ID:
      return updateNutritionalInfoState(newState, action);
    default:
      return state;
  }
}
