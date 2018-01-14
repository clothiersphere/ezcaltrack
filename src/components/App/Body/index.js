import React, { Component } from 'react';

export default class Body extends Component {
  componentDidMount() {
    console.log(this, "body")
  }

  iterate(props) {
    const bleh = Object.keys(props).map((key, i) =>
      (
        <div key={i}>
          {props[key].food_name}
        </div>
      ),
    );
    return bleh;
  }

  render() {
    const { props } = this;
    return (
      <div>
        {this.iterate(props)}
      </div>
    );
  }
}
