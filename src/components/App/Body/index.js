import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import FoodSearchResults from './FoodSearchResults';

export default class Body extends Component {
  componentDidMount() {
    console.log(this, "body")
  }
  render() {
    const { foodSearchResults } = this.props;
    return (
      <div>
        <Switch>
          <Route exact path="/" render={routeProps => <FoodSearchResults {...routeProps} foodSearchResults={foodSearchResults} />} />
        </Switch>
      </div>
    );
  }
}
