import React, { Component } from 'react';
import { Button, Icon, Label, Dropdown } from 'semantic-ui-react';
import ServingSizeInfoDisplay from './ServingSizeInfoDisplay';

class NutritionalDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { servingData: null };
  }
  componentWillReceiveProps(props) {
    console.log(props, "CWP IN NT")
  }

  render() {
    const { nutritionalInfo } = this.props;
    const { servingData } = this.state;

    let servingOptions = null;

    let servingSizeDescriptionDropdown = null;
    
    if (Object.keys(nutritionalInfo).length > 0) {
      if (nutritionalInfo.servings.serving.length > 1) {
        servingOptions = nutritionalInfo.servings.serving.map((serving, i) => (
          {
            text: serving.serving_description,
            value: i,
          }
        ));
      } else {
        servingOptions = [{
          text: nutritionalInfo.servings.serving.serving_description,
          value: 'oneEntry',
        }];
      }

      const handleServingDropdownChange = (e, data) => {
        if (data.value === 'oneEntry') {
          this.setState({ servingData: nutritionalInfo.servings.serving });
        }
        this.setState({ servingData: nutritionalInfo.servings.serving[data.value] });
      };

      servingSizeDescriptionDropdown = (
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
        {servingSizeDescriptionDropdown}
        <ServingSizeInfoDisplay {...servingData} />
      </div>
    );
  }
}

export default NutritionalDisplay;
