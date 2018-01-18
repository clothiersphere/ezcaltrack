import React from 'react';
import PropTypes from 'prop-types';

const FoodSearchResults = ({ results }) => {
  let searchResults;

  if (Object.keys(results).length > 0) {
    searchResults = Object.keys(results).map((key, i) =>
      (
        <div key={i} onClick={()=>console.log(results[key].food_id)}>
          {results[key].food_name} {results[key].food_description}
        </div>
      ));
  } else {
    searchResults = <div> bye </div>;
  }

  return <div>{searchResults}</div>;
};

FoodSearchResults.propTypes = {
  results: PropTypes.shape({
    food_description: PropTypes.string,
    food_id: PropTypes.number,
    food_name: PropTypes.string,
    food_type: PropTypes.string,
    food_url: PropTypes.string,
  }).isRequired,
};

export default FoodSearchResults;
