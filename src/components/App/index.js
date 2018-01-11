import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Body from './Body';

class App extends Component {
  componentDidMount() {
    const { foodSearch } = this.props;
    foodSearch();
  }

  render() {
    return (
      <div className="App">
        Header
        <Body />
        Footer
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    food,
  } = state;

  return {
    food,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    foodSearch: () => dispatch(actions.foodSearch()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));