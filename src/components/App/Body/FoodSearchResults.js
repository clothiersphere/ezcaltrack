import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Label, Dropdown } from 'semantic-ui-react';


export default class FoodSearchResults extends Component {
  render() {
    let searchResults;
    const { foodSearchResults } = this.props;
    if (foodSearchResults.length > 0) {
      // if (Object.keys(results).length > 0) {
      // searchResults = Object.keys(results).map((key, i) =>
      //   (
      //     <div key={i} onClick={()=>console.log(results[key].food_id)}>
      //       {results[key].food_name} {results[key].food_description}
      //     </div>
      //   ));
      const handleChange = (e, data) => {
        console.log(data.value, "data value")
      }

      searchResults = <Dropdown 
                        placeholder='Select Food' 
                        fluid 
                        selection 
                        onChange={handleChange} 
                        options={foodSearchResults} />
    } else {
      searchResults = <div> bye </div>;
    }
    return (
      <div>{searchResults}</div>
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
