import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Input } from 'semantic-ui-react';

import FoodSearchResults from './FoodSearchResults';
import DailyFoodEntries from './DailyFoodEntries';

export default class Body extends Component {
  componentDidMount() {
    console.log(this, "body")
  }


  render() {
    const { foodSearchResults, getFoodById, nutritionalInfo } = this.props;

    const entry = {
      name: 'Frankfurter or Hotdog',
      id: 1849,
      servingId: 5972,
    };

    return (
      <div>
        <Switch>
          <Route exact path="/" render={routeProps => 
            <FoodSearchResults {...routeProps} 
              foodSearchResults={foodSearchResults} 
              getFoodById={getFoodById} 
              nutritionalInfo={nutritionalInfo} 
            />
          } />
        </Switch>
      </div>
    );
  }
}


// return (
//   <div>
//     <Switch>
//       <Route exact path="/" render={routeProps => 
//         <FoodSearchResults {...routeProps} 
//           foodSearchResults={foodSearchResults} 
//           getFoodById={getFoodById} 
//           nutritionalInfo={nutritionalInfo} 
//         />
//       } />
//     </Switch>
//   </div>
// );