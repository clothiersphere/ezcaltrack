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

    let servingSizeDropdown = null;
    if (Object.keys(nutritionalInfo).length > 0) {
      const servingOptions = nutritionalInfo.servings.serving.map((serving, i) => (
        {
          text: serving.serving_description,
          value: i,
        }
      ));

      const handleServingDropdownChange = (e, data) => {
        this.setState({ servingData: nutritionalInfo.servings.serving[data.value] });
      };

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
  }
}

export default NutritionalDisplay;
