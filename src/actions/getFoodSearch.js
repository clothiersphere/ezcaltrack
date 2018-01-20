import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

function showQueryResults(results) {
  return {
    type: actionTypes.GET_FOOD_SEARCH,
    results,
  };
}

export function getFoodSearch(term) {
  return function (dispatch) {
    const request = axios({
      method: 'GET',
      url: `http://localhost:8080/api/food/search/${term}`,
    });
    return request
      .then((response) => {
        dispatch(showQueryResults(response.data));
      });
  };
}

