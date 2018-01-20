import axios from 'axios';
import * as actionTypes from '../constants/actionTypes';

function showQueryResults(results) {
  return {
    type: actionTypes.GET_FOOD_BY_ID,
    results,
  };
}

export function getFoodById(id) {
  return function (dispatch) {
    const request = axios({
      method: 'GET',
      url: `http://localhost:8080/api/food/getInfo/${id}`,
    });
    return request
      .then((response) => {
        dispatch(showQueryResults(response.data));
      });
  };
}

