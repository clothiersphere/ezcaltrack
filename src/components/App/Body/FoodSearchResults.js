import React from 'react';

const FoodSearchResults = ({ results }) => {
  let searchResults;

  if (Object.keys(results).length > 0) {
    searchResults = Object.keys(results).map((key, i) => {
      return (
        <div key={i} onClick={()=>console.log(results[key].food_id)}>
          {results[key].food_name} {results[key].food_description}
        </div>
      );
    });
  } else {
    searchResults = <div> bye </div>;
  }

  return <div>{searchResults}</div>;
};

export default FoodSearchResults;
