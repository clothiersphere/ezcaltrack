import React, { Component } from 'react';
import HeaderMenu from './Menu';

class Header extends Component {
  componentDidMount() {
  }
  render() {
    const { getFoodSearch } = this.props;
    return (
      <div className="Header">
        <HeaderMenu {...{ getFoodSearch }} />
      </div>
    );
  }
}

export default Header;
