import React from 'react';
import { Dropdown, Icon, Menu, Segment, Button } from 'semantic-ui-react';


// const foodSearch = () => {

// }


const addEntryButton = () => (
      <div className="addEntryButton">
        <Button animated="vertical" onClick={()=>console.log("add entry")}>
          <Button.Content hidden><Icon name="plus" /></Button.Content>
          <Button.Content visible>
            Add Entry
          </Button.Content>
        </Button>
      </div>
    );

const HeaderMenu = ({foodSearch}) => {
  console.log(foodSearch, "foodSearch")
  return (
  <div>
    <Menu attached="top">
      <Dropdown item icon="plus" simple>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Icon name="dropdown" />
            <span className='text'>New</span>
            <Dropdown.Menu>
              <Dropdown.Item>Document</Dropdown.Item>
              <Dropdown.Item>Image</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>Open</Dropdown.Item>
          <Dropdown.Item>Save...</Dropdown.Item>
          <Dropdown.Item>Edit Permissions</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Header>Export</Dropdown.Header>
          <Dropdown.Item>Share</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item>
        {addEntryButton()}
      </Menu.Item>
      <Menu.Menu position="right">
        <div className="ui right aligned category search item">
          <div className="ui transparent icon input">
            <input className="prompt" type="text" placeholder="Search foods..." />
            <i className="search link icon" />
          </div>
          <div className="results" />
        </div>
      </Menu.Menu>
    </Menu>
  </div>
);
}

export default HeaderMenu;
