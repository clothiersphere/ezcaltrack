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
    const { foodSearchResults, getFoodSearch, getFoodById, nutritionalInfo } = this.props;
    console.log(this.props, "APP")
    return (
      <div className="App">
        <Header {...{ getFoodSearch }} />
        <Body {...{ foodSearchResults, getFoodById, nutritionalInfo }} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state, "state")
  const {
    foodSearchResults,
    nutritionalInfo,
  } = state;

  return {
    foodSearchResults,
    nutritionalInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFoodSearch: term => dispatch(actions.getFoodSearch(term)),
    getFoodById: id => dispatch(actions.getFoodById(id)),
    createEntry: () => dispatch(actions.generateEntry()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
