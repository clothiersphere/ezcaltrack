import React, { Component } from 'react';

export default class Body extends Component {
  componentDidMount() {
    console.log(this, "body")
  }
  render() {
    return (
      <div>
      Body
      </div>
    );
  }
}
