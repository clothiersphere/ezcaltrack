import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Label, Dropdown } from 'semantic-ui-react';
import NutritionalDisplay from './NutritionalDisplay';
import SearchResultsDropdown from './SearchResultsDropdown';


export default class FoodSearchResults extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { foodSearchResults, getFoodById, nutritionalInfo } = this.props;
    let searchResultsDropDown = null;

    if (foodSearchResults[0]) {
      
      const handleChange = (e, data) => {
        getFoodById(data.value);
      };

      searchResultsDropDown = (
        <Dropdown
          placeholder="Select result from list below"
          selection
          closeOnChange
          onChange={handleChange}
          options={foodSearchResults}
        />
      );
    }

    return (
      <div>
        <SearchResultsDropdown {...{ foodSearchResults, getFoodById } }/>
        <NutritionalDisplay {...{ nutritionalInfo }} />
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
