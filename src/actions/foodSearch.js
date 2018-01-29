import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

function showQueryResult(results) {
  return {
    type: actionTypes.FOOD_SEARCH,
    results,
  };
}

export function foodSearch() {
  return function (dispatch) {
    const request = axios({
      method: 'GET',
      url: 'http://localhost:8080/api/foodSearch',
    });
    return request
      .then((response) => {
        dispatch(showQueryResult(response.data));
      });
  };
}
