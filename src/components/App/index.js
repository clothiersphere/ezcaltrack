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
    const { searchResults, foodSearch } = this.props;

    return (
      <div className="App">
        <Header {...{ foodSearch }} />
        <Body {...searchResults} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    searchResults,
  } = state;

  return {
    searchResults,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    foodSearch: (term) => dispatch(actions.foodSearch(term)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
