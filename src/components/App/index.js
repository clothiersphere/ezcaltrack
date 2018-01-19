import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Body from './Body';
import Header from './Header';

class App extends Component {
  componentDidMount() {
  }

  render() {
    const { foodSearchResults, getFoodSearch } = this.props;
    return (
      <div className="App">
        <Header {...{ getFoodSearch }} />
        <Body {...{ foodSearchResults }}  />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state, "state")
  const {
    foodSearchResults,
  } = state;

  return {
    foodSearchResults,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFoodSearch: term => dispatch(actions.getFoodSearch(term)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
