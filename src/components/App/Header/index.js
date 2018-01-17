import React, { Component } from 'react';
import HeaderMenu from './Menu';

class Header extends Component {
  componentDidMount() {
  }
  render() {
    const { foodSearch } = this.props;
    return (
      <div className="Header">
        <HeaderMenu {...foodSearch} />
      </div>
    );
  }
}

export default Header;
