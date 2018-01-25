import React, { Component } from 'react';
import { Button, Icon, Label, Dropdown } from 'semantic-ui-react';
import ServingSizeInfoDisplay from './ServingSizeInfoDisplay';

class NutritionalDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {servingData: null};
  }
  componentWillReceiveProps(props) {
    console.log(props, "CWP IN NT")
  }

  render() {
    const { nutritionalInfo } = this.props;
    const { servingData } = this.state;

    let servingSizeDropdown = null;
  

    if (Object.keys(nutritionalInfo).length > 0) {
      const servingOptions = nutritionalInfo.servings.serving.map((serving, i) => (
        {
          text: serving.serving_description,
          value: i,
        }
      ));

      const handleServingDropdownChange = (e, data) => {
        console.log(data.value, "hsddc");
        this.setState({servingData:nutritionalInfo.servings.serving[data.value]});
      }

      servingSizeDropdown = (
        <Dropdown
          placeholder="select serving size"
          selection
          closeOnChange
          onChange={handleServingDropdownChange}
          options={servingOptions}
        />
      );
    }

    return (
      <div className="nutritionalDisplay">
        {servingSizeDropdown}
        <ServingSizeInfoDisplay {...servingData} />
      </div>
    );
  };

    // let displayInfo = null;
    // let servingsizeDropdown;
    // let servingDropdown = null;

    // if (Object.keys(nutritionalInfo).length > 0) {
    //   console.log(nutritionalInfo, "nutritionalInfo")
    //   const { 
    //     id,
    //     name,
    //     servings,
    //     type,
    //     url,
    //   } = nutritionalInfo;

    //   const selectedServing = serving => (
    //     <div>
    //       {serving.name}
    //       {serving.serving_description}
    //       <div className='servingCalories'>
    //         {serving.calories} calories
    //       </div>
    //       <div className='servingProtein'>
    //         {serving.protein} protein
    //       </div>
    //       <div className='servingCarbohydrate'>
    //         {serving.carbohydrate} carbs
    //       </div>
    //       <div className='servingFat'>
    //         {serving.fat} fat
    //       </div>
    //     </div>
    //   );

    //   const handleServingDropdownChange = (e, data) => {
    //     console.log(data.value, "serving drop down change")
    //   } 
// {selectedServing(servings.serving[0])}

    //   displayInfo = (
    //     <div>
    //       {servings.serving.map((serving, key) => {
    //         return (
    //           <div key={key}>
    //             { serving.serving_description }
    //           </div>
    //         )
    //       })}
    //     </div>
    //   );

    // if (this.state.dropdownSelected) {
    //     servingDropdown = (
    //       <Dropdown
    //         placeholder="select serving size" 
    //         selection
    //         closeOnChange
    //         onChange={handleServingDropdownChange} 
    //         options={foodSearchResults} />
    //     )
    // }
  // }
    }

export default NutritionalDisplay;
