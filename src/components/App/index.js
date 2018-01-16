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
    const { foodSearch } = this.props;
    foodSearch();
  }

  render() {
    const { searchResults } = this.props;

    return (
      <div className="App">
        <Header />
        <Body {...searchResults} />
        Footer
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state, "state")
  const {
    searchResults,
  } = state;

  return {
    searchResults,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    foodSearch: () => dispatch(actions.foodSearch()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));