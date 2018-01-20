import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Label, Dropdown } from 'semantic-ui-react';
import NutritionalDisplay from './NutritionalDisplay';


export default class FoodSearchResults extends Component {
  render() {
    let searchResults;
    const { foodSearchResults, getFoodById, nutritionalInfo } = this.props;
    if (foodSearchResults.length > 0) {
      const handleChange = (e, data) => {
        getFoodById(data.value);
      };

      searchResults = (
        <Dropdown
          placeholder="Select result from list below" 
          fluid 
          selection
          closeOnChange
          onChange={handleChange} 
          options={foodSearchResults} />
      );
    } else {
      searchResults = <div> bye </div>;
    }
    return (
      <div>
        {searchResults}
        <NutritionalDisplay nutritionalInfo={nutritionalInfo} />
      </div>

    );
  }
}

// FoodSearchResults.propTypes = {
//   results: PropTypes.shape({
//     food_description: PropTypes.string,
//     food_id: PropTypes.number,
//     food_name: PropTypes.string,
//     food_type: PropTypes.string,
//     food_url: PropTypes.string,
//   }).isRequired,
// };

// export default FoodSearchResults;
