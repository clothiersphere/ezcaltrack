import React from 'react';
import { Dropdown } from 'semantic-ui-react';


const SearchResultsDropdown = ({ foodSearchResults, getFoodById }) => {
  console.log(foodSearchResults, "FSR")

  const handleChange = (e, data) => {
    getFoodById(data.value);
  };

  if (foodSearchResults[0]) {
    return (
      <Dropdown
        placeholder="Select result from list below"
        selection
        closeOnChange
        onChange={handleChange}
        options={foodSearchResults}
      />
    );
  }
  return null;
};


export default SearchResultsDropdown;
